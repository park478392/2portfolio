import Link from 'next/link'
import {
  ArrowUpRight,
  Code2,
  ShieldCheck,
  Database,
  ChevronRight,
} from 'lucide-react'
import { profile, projects, learning } from '@/lib/data'
export default function Home() {
  return (
    <>
      <section className="wrap pt-24 pb-24 md:pt-32 md:pb-28">
        <p className="eyebrow mb-5">정보보호학과 2학년</p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-[-.065em] leading-[1.13] max-w-4xl">
          개인 포트폴리오
          <br />
          <span className="text-accent">박시우</span>
        </h1>
        <p className="text-slate-300 leading-8 mt-8 max-w-2xl text-lg">
          {profile.intro}
        </p>
        <div className="flex gap-3 flex-wrap mt-9">
          <Link href="/projects" className="button">
            프로젝트 보기 <ArrowUpRight size={17} />
          </Link>
          <Link href="/board" className="button button-secondary">
            실습 게시판 <ChevronRight size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20">
          <div className="panel p-6">
            <Code2 className="text-accent mb-5" />
            <div className="font-bold text-lg">화면 구성</div>
            <p className="muted text-sm mt-2">Next.js · React · TypeScript</p>
            <p className="muted text-sm leading-7 mt-4">
              페이지와 공통 레이아웃을 나누고, 프로젝트별 상세 화면을
              연결합니다.
            </p>
          </div>
          <div className="panel p-6">
            <Database className="text-accent mb-5" />
            <div className="font-bold text-lg">데이터 처리</div>
            <p className="muted text-sm mt-2">MongoDB · Mongoose · API</p>
            <p className="muted text-sm leading-7 mt-4">
              입력한 게시글을 서버에서 검증하고 데이터베이스에 저장·조회합니다.
            </p>
          </div>
          <div className="panel p-6">
            <ShieldCheck className="text-accent mb-5" />
            <div className="font-bold text-lg">회원 인증</div>
            <p className="muted text-sm mt-2">Auth.js · bcrypt · Secrets</p>
            <p className="muted text-sm leading-7 mt-4">
              비밀번호 해싱과 세션 확인을 적용하며 인증 흐름을 공부합니다.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-surface border-y border-stroke py-20">
        <div className="wrap">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-3">수업에서 프로젝트로</p>
              <h2 className="section-title">프로젝트</h2>
            </div>
            <Link href="/projects" className="text-sm text-accent">
              전체 보기 ↗
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="panel project-card p-7 block"
              >
                <div className="flex justify-between text-xs text-accent">
                  <span>{project.category}</span>
                  <span>{project.status}</span>
                  <ArrowUpRight size={18} />
                </div>
                <p className="text-2xl font-bold mt-11">{project.title}</p>
                <p className="muted text-sm mt-3 leading-7">
                  {project.summary}
                </p>
                <div className="flex gap-2 flex-wrap mt-7">
                  {project.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="eyebrow mb-3">웹서버보안프로그래밍</p>
            <h2 className="section-title">학습 기록</h2>
          </div>
          <Link href="/learning" className="text-sm text-accent">
            학습 기록 ↗
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {learning.slice(0, 4).map((l) => (
            <div key={l.week} className="panel p-5">
              <p className="text-accent text-xs font-bold">{l.week}주차</p>
              <h3 className="font-bold mt-3">{l.title}</h3>
              <p className="muted text-sm leading-6 mt-3">{l.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap pb-12">
        <div className="border-t border-stroke pt-10 grid md:grid-cols-2 gap-8">
          <div>
            <p className="eyebrow mb-3">이 포트폴리오에 대해</p>
            <h2 className="section-title">배운 내용을 직접 연결해 보기</h2>
          </div>
          <div>
            <p className="muted leading-8">
              웹서버보안프로그래밍에서 다룬 라우팅, 폼 처리, 데이터베이스와
              인증을 하나의 사이트로 구성했습니다. 프로젝트 상세에는 기능과
              구조를, 학습 기록에는 개념과 실습에서 확인할 점을 정리했습니다.
            </p>
            <Link
              href="/learning"
              className="inline-block mt-5 text-accent font-bold"
            >
              1~7주 학습 내용 읽기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
