import Link from 'next/link'
import { auth } from '@/auth'
import { logoutAction } from '@/lib/actions'
const links = [
  { href: '/', label: '소개' },
  { href: '/projects', label: '프로젝트' },
  { href: '/learning', label: '학습 기록' },
  { href: '/board', label: '게시판' },
]
export async function SiteHeader() {
  const session = await auth()
  return (
    <header className="border-b border-stroke/70 sticky top-0 z-20 backdrop-blur-xl bg-ink/90">
      <div className="wrap flex flex-wrap min-h-18 py-4 items-center justify-between gap-4">
        <Link href="/" className="font-extrabold tracking-tight text-lg">
          박시우<span className="text-accent">.</span>
        </Link>
        <nav aria-label="주 메뉴" className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap">
          {links.map((x) => (
            <Link
              className="text-slate-300 hover:text-accent"
              key={x.href}
              href={x.href}
            >
              {x.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-xs sm:text-sm">
          {session?.user ? (
            <form action={logoutAction}>
              <button className="text-accent cursor-pointer">로그아웃</button>
            </form>
          ) : (
            <Link className="text-accent" href="/login">
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
