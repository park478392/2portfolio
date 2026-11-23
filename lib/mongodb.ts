import mongoose from 'mongoose'
import { Resolver } from 'node:dns/promises'
type Cache = {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
}
declare global {
  var mongooseCache: Cache | undefined
}
const cached = globalThis.mongooseCache ?? { conn: null, promise: null }
if (process.env.NODE_ENV !== 'production') globalThis.mongooseCache = cached
export async function connectDB() {
  const uri = process.env.MONGODB_URI
  if (!uri) throw new Error('MONGODB_URI not configured')
  if (cached.conn) return cached.conn
  if (!cached.promise) {
    cached.promise = (async () => {
      // Fail promptly when the local DNS cannot resolve an Atlas SRV address.
      // Keep the machine's existing DNS servers; do not override network settings.
      if (uri.startsWith('mongodb+srv://')) {
        const resolver = new Resolver({ timeout: 2000, tries: 1 })
        await resolver.resolveSrv(`_mongodb._tcp.${new URL(uri).hostname}`)
      }
      return mongoose.connect(uri, { bufferCommands: false, serverSelectionTimeoutMS: 8000, connectTimeoutMS: 8000 })
    })()
  }
  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }
  return cached.conn
}
