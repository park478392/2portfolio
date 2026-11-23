import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import './globals.css'
export const metadata: Metadata = {
  title: '박시우 | 개인 포트폴리오',
  description: '정보보호학과 박시우의 웹 프로젝트와 학습 기록',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="wrap border-t border-stroke mt-24 py-10 text-sm muted flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} 박시우 · 개인 포트폴리오</span>
          <span>웹 프로젝트와 수업 기록</span>
        </footer>
      </body>
    </html>
  )
}
