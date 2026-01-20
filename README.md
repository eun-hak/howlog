# HowLog (하우로그) - 방법을 기록한 아카이브

**How + Log** - 다양한 분야의 실용적인 방법을 기록하고 공유하는 지식 아카이브

## 프로젝트 소개

HowLog(하우로그)는 다양한 분야의 How-to 가이드와 튜토리얼을 제공하는 지식 공유 플랫폼입니다.  
기술, 생활, 창작, 취미 등 여러 주제의 실용적인 노하우를 체계적으로 기록하고 공유합니다.

**사이트 URL**: https://howlog.jisiknarae.com

## 기술 스택

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경 변수 설정
`.env.local` 파일을 생성하고 다음 내용을 추가하세요:
```
NEXT_PUBLIC_SITE_URL=https://howlog.jisiknarae.com
```

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 프로덕션 빌드
```bash
npm run build
npm start
```

## 주요 기능

### ✅ 완성된 기능
- [x] 고품질 콘텐츠 게시 시스템
- [x] 필수 정책 페이지 (About, Contact, Privacy Policy, Terms of Service, Cookies)
- [x] 완전한 네비게이션 (Header/Footer)
- [x] 카테고리별 분류 시스템
- [x] 게시글 검색 기능
- [x] 반응형 디자인 (모바일 최적화)
- [x] SEO 최적화 (메타 태그, Open Graph, Twitter Card)
- [x] JSON-LD 구조화 데이터
- [x] Sitemap.xml 자동 생성
- [x] Robots.txt 설정
- [x] 404 페이지 및 에러 처리

## 페이지 구조

```
/                    - 홈페이지 (최신 글, 추천 콘텐츠)
/about              - 사이트 소개
/contact            - 문의하기
/privacy-policy     - 개인정보처리방침
/terms              - 이용약관
/cookies            - 쿠키 정책
/search             - 게시글 검색
/category/[slug]    - 카테고리별 글 목록
/post/[id]          - 게시글 상세
```

## 콘텐츠 관리

### 새 게시글 추가
`src/app/data/posts-content.ts` 파일에 콘텐츠를 추가하고  
`src/app/data/mock.ts`의 `POSTS` 배열에 메타데이터를 추가하세요.

### 카테고리 추가
`src/app/data/mock.ts`의 `CATEGORIES` 배열에 새 카테고리를 추가하세요.

### 스타일 커스터마이징
- `src/styles/`: 전역 CSS 파일
- `tailwind.config.ts`: Tailwind 설정
- `src/app/components/ui/`: UI 컴포넌트

## 브랜드 아이덴티티

### 이름
- **한글**: 하우로그
- **영문**: HowLog
- **의미**: How(방법) + Log(기록)

### 컬러
- **Primary**: Orange (#EA580C)
- **Secondary**: Red (#DC2626)
- **Gradient**: from-orange-600 to-red-600

### 로고
- 문자: "H" (HowLog의 첫 글자)
- 형태: 둥근 사각형 배경
- 그라데이션: Orange에서 Red로

## 성능 최적화

- Next.js App Router의 자동 코드 스플리팅
- 이미지 최적화 (Next.js Image 컴포넌트)
- Static Site Generation (SSG) 활용
- 지연 로딩 (Lazy Loading)

## 접근성

- 시맨틱 HTML 태그 사용
- ARIA 레이블 적용
- 키보드 네비게이션 지원
- 색상 대비 WCAG AA 기준 준수

## SEO 최적화

### 메타데이터
- 각 페이지별 맞춤 title, description
- Open Graph 태그 설정
- Twitter Card 지원
- Canonical URL 설정

### 구조화 데이터
- JSON-LD 스키마 적용
- Article/BlogPosting 타입
- Organization 정보

### 기술적 SEO
- Sitemap.xml 자동 생성
- Robots.txt 설정
- 빠른 로딩 속도
- 모바일 친화적 디자인

## Google AdSense 준비

본 프로젝트는 Google AdSense 정책을 준수하도록 설계되었습니다:

- ✅ 고품질 독창적 콘텐츠
- ✅ 필수 정책 페이지 완비
- ✅ 명확한 네비게이션 구조
- ✅ SEO 최적화
- ✅ 반응형 디자인

AdSense 승인 후 광고 코드를 삽입할 수 있도록 `AdSlot` 컴포넌트가 준비되어 있습니다.

## 배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

### 환경 변수 설정
Vercel 대시보드에서 다음 환경 변수를 설정하세요:
- `NEXT_PUBLIC_SITE_URL`: https://howlog.jisiknarae.com

## 문의

- **이메일**: contact@howlog.jisiknarae.com
- **웹사이트**: https://howlog.jisiknarae.com

## 라이선스

This project is private and proprietary.

---

© 2025 HowLog. All rights reserved.
