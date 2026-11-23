import Link from 'next/link'
import { projects } from '@/lib/data'
export default function Projects() {
  return (
    <section className="wrap py-20">
      <p className="eyebrow">웹 개발 · 데이터 · 인증</p>
      <h1 className="text-4xl font-extrabold mt-4 mb-4">프로젝트</h1>
      <p className="muted leading-8 max-w-2xl mb-10">
        수업에서 배운 내용을 적용한 프로젝트입니다. 각 상세 페이지에서 목적, 주요 기능, 데이터가 오가는 흐름과 앞으로 보완할 내용을 확인할 수 있습니다.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="panel project-card p-8"
          >
            <div className="flex justify-between text-accent text-xs">
              <span>{p.category}</span>
              <span>{p.number} ↗</span>
            </div>
            <h2 className="text-2xl font-bold mt-12">{p.title}</h2>
            <p className="text-accent text-sm mt-3">{p.status}</p>
            <p className="muted mt-4 leading-7">{p.summary}</p>
            <div className="flex flex-wrap gap-2 mt-7">
              {p.stack.map((s) => (
                <span className="chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <aside className="mt-12 border-t border-stroke pt-8"><h2 className="font-bold text-xl mb-3">프로젝트를 보는 순서</h2><p className="muted leading-8 max-w-3xl">현재 보고 있는 포트폴리오에서 페이지 구성과 라우팅을 살펴보고, 보안 게시판에서 데이터 저장과 인증 흐름을 확인할 수 있습니다. 축구 데이터 프로젝트는 외부 API를 활용하는 진행 중인 작업입니다.</p></aside>
    </section>
  )
}
