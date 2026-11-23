import { projects } from '@/lib/data'
import { projectNotes } from '@/lib/notes'
import { notFound } from 'next/navigation'
import Link from 'next/link'
type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() { return projects.map(p => ({ slug: p.slug })) }
export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params
  const p = projects.find(p => p.slug === slug)
  if (!p) notFound()
  const notes = projectNotes[slug]
  return <section className="wrap max-w-4xl py-16 sm:py-20">
    <Link href="/projects" className="text-accent text-sm">← 프로젝트 목록</Link>
    <p className="eyebrow mt-12">프로젝트 {p.number} · {p.status}</p>
    <h1 className="text-3xl sm:text-5xl font-bold mt-5">{p.title}</h1>
    <p className="muted text-lg leading-8 mt-6">{p.details}</p>
    <div className="flex flex-wrap gap-2 mt-6">{p.stack.map(s => <span className="chip" key={s}>{s}</span>)}</div>
    <section className="mt-12"><h2 className="section-title mb-4">프로젝트 목적</h2><p className="muted leading-8">{notes.purpose}</p></section>
    <div className="grid md:grid-cols-2 gap-6 mt-10">
      <section className="panel p-6 sm:p-8"><h2 className="text-xl font-bold mb-5">{slug === 'football-data' ? '구현 목표' : '주요 기능'}</h2><ul className="grid gap-4">{p.features.map(f => <li className="leading-7" key={f}>· {f}</li>)}</ul></section>
      <section className="panel p-6 sm:p-8"><h2 className="text-xl font-bold mb-5">동작 흐름</h2><ol className="grid gap-4">{notes.flow.map((step, i) => <li className="flex gap-3 leading-7" key={step}><span className="text-accent font-bold">{i + 1}.</span><span>{step}</span></li>)}</ol></section>
    </div>
    <section className="mt-10 border-t border-stroke pt-8"><h2 className="text-xl font-bold mb-4">구현에서 다룬 내용</h2><p className="muted leading-8">{notes.focus}</p></section>
    <section className="mt-8"><h2 className="text-xl font-bold mb-4">현재 범위와 다음 과제</h2><p className="muted leading-8">{notes.next}</p></section>
    {slug === 'security-board' && <Link className="button mt-8" href="/board">게시판 열기 →</Link>}
    {slug === 'portfolio' && <Link className="button mt-8" href="/learning">학습 기록 읽기 →</Link>}
  </section>
}
