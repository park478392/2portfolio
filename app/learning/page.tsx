import { learning } from '@/lib/data'
import { weekNotes } from '@/lib/notes'
export default function Learning() {
  return (
    <section className="wrap py-20">
      <p className="eyebrow">웹서버보안프로그래밍 · 1~7주</p>
      <h1 className="text-4xl font-extrabold mt-4">학습 기록</h1>
      <p className="muted mt-4 mb-10">
        웹서버보안프로그래밍 강의에서 학습한 기술을 정리했습니다.
      </p>
      <div className="grid gap-4">
        {learning.map((x) => (
          <article
            className="panel p-6 sm:p-8 flex gap-6 items-start"
            key={x.week}
          >
            <span className="text-accent font-black text-2xl">{x.week}</span>
            <div>
              <h2 className="font-bold text-lg">{x.title}</h2>
              <p className="muted mt-2 leading-7">{x.body}</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6 border-t border-stroke pt-6">
                <div><h3 className="font-bold mb-2">핵심 개념</h3><p className="muted leading-7">{weekNotes[x.week].concepts}</p></div>
                <div><h3 className="font-bold mb-2">실습 내용</h3><p className="muted leading-7">{weekNotes[x.week].practice}</p></div>
              </div>
              <p className="mt-5 text-sm leading-7"><strong className="text-accent">확인할 점 · </strong>{weekNotes[x.week].check}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
