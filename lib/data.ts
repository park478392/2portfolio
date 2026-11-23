export const profile = {
  name: '박시우',
  role: '정보보호학과 2학년',
  tagline: '개인 포트폴리오',
  intro:
    '정보보호학과 2학년 박시우입니다. Next.js로 만든 웹 프로젝트와 웹서버보안프로그래밍 수업의 실습 내용을 정리했습니다. 화면 구성부터 데이터 저장, 회원 인증까지 직접 구현하며 공부하고 있습니다.',
  github: 'https://github.com/',
  email: 'hello@example.com',
}
export type Project = {
  slug: string
  number: string
  title: string
  category: string
  summary: string
  details: string
  stack: string[]
  features: string[]
  status: string
}
export const projects: Project[] = [
  {
    slug: 'football-data',
    number: '01',
    title: '축구 데이터 분석 웹',
    category: '외부 API · 웹 개발',
    summary:
      '유럽 5대 리그의 경기 일정, 순위, 주요 선수 데이터를 한눈에 확인하는 대시보드',
    details:
      '외부 축구 API의 데이터를 서버에서 받아 리그별 일정과 순위를 보여주는 웹을 개발하고 있습니다. 리그와 날짜를 선택하는 화면, API 응답을 가공하는 서버 구조를 중심으로 구성하는 프로젝트입니다.',
    stack: ['Next.js', 'React', 'TypeScript', 'REST API'],
    features: [
      '리그별 순위표',
      '날짜별 경기 일정',
      '득점·도움 순위',
      '서버 API를 통한 데이터 가공',
    ],
    status: '진행 중',
  },
  {
    slug: 'security-board',
    number: '02',
    title: '보안 게시판',
    category: '데이터 저장 · 회원 인증',
    summary: 'MongoDB CRUD와 회원 인증을 결합한 포트폴리오 실습 게시판',
    details:
      'MongoDB Atlas와 Mongoose로 게시글을 저장하고 Auth.js 로그인과 bcrypt 해싱을 적용했습니다. 게시판 메뉴에서 목록·상세·작성 화면을 연결하며 서버 입력 검증과 인증을 실습합니다.',
    stack: ['MongoDB', 'Mongoose', 'Auth.js', 'Server Actions'],
    features: [
      '게시글 목록·상세·작성',
      '회원가입 및 로그인',
      '서버 세션 확인',
      '서버 입력값 검증',
    ],
    status: '포트폴리오 포함',
  },
  {
    slug: 'portfolio',
    number: '03',
    title: '개인 개발 포트폴리오',
    category: '화면 구성 · 라우팅',
    summary: '수업에서 학습한 Next.js 기술을 실제 웹사이트로 구성한 프로젝트',
    details:
      'App Router 기반 서버 컴포넌트와 클라이언트 인터랙션, 동적 라우트, loading/error 경계, Tailwind CSS를 활용했습니다.',
    stack: ['Next.js 16', 'Tailwind CSS 4', 'TypeScript'],
    features: [
      '반응형 UI',
      '동적 프로젝트 상세',
      '1~7주 학습 기록',
      '배포 가능한 프로젝트 구조',
    ],
    status: '내용 보완 중',
  },
]
export const learning = [
  {
    week: '01',
    title: '풀스택 웹과 보안',
    body: 'SSR·SSG·RSC 개념과 시크릿 관리, 보안 개발의 필요성',
  },
  {
    week: '02',
    title: '개발환경 및 기술 선택',
    body: 'React, Next.js, Tailwind, MongoDB, Auth.js, Vercel',
  },
  {
    week: '03',
    title: 'App Router',
    body: 'layout.tsx, page.tsx, 서버·클라이언트 컴포넌트',
  },
  {
    week: '04',
    title: '핵심 기능',
    body: '동적 라우팅, loading.tsx, Server Action, Route Handler',
  },
  {
    week: '05',
    title: '게시판 구축',
    body: '목록·상세·작성, FormData, useFormStatus',
  },
  {
    week: '06',
    title: 'MongoDB 연결',
    body: 'Mongoose 스키마, 연결 캐싱, 에러 경계',
  },
  {
    week: '07',
    title: '사용자 인증',
    body: 'Auth.js Credentials, bcrypt 해싱, JWT 세션',
  },
]
