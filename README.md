# RTM (Record The Moment)

![Logo white](https://github.com/harry21-kr/RTM/assets/166012944/7dff6169-cb3a-45fd-b66d-c744535959e2)

## 🖥️ 프로젝트 소개

- 우리 삶은 평범한 일상이라 생각이 들지라도, 다채로운 순간들이 모여있습니다. 그 기록들을 사진과 짧은 코멘트로 모아볼 수 있는 나만의 갤러리 페이지입니다.
- supabase 를 활용하여 DB 사용법을 익히고, 로그인/회원가입 기능과 포스팅을 CRUD를 통해 구현합니다.

<br>

## 🕰️ 개발 기간

- 24.05.31 ~ 24.06.06

<br>

## 💠 팀원 구성

### : 세명 남았조 (B-11)

| 팀장        | 부팀장      | 팀원        |
| ----------- | ----------- | ----------- |
| 박원빈      | 한예슬      | 박세영      |
| @harry21-kr | @yeseul0809 | @SeYoungYee |

<br>

## 📌 기능

- 로그인/로그아웃 기능
  - 아이디 변경 가능
  - 비밀번호 변경시 이메일 인증 후 변경 가능
- 유저정보 CRUD 구현
  - 사이트 이름, 한줄소개 수정 가능
  - 프로필 사진 등록 및 변경 가능
- 게시글 CRUD 구현 (작성, 조회, 수정, 삭제)
  - 모달을 통해 사진과 간단한 코멘트가 담긴 포스팅 등록
  - 작성한 포스팅 수정, 삭제 가능
  - 캘린더를 통해 작성한 포스팅을 날짜별로 확인할 수 있습니다.

<br>

## 📝 와이어프레임

- LogIn page
<img src="https://github.com/harry21-kr/RTM/assets/166012944/aa90f66b-9ef9-4583-9e82-f4064dea03b6" width="600" height="400">

- My page
<img src="https://github.com/harry21-kr/RTM/assets/166012944/c2b6d859-a6d0-4ad3-a6e0-d4cccebb9326" width="600" height="600">

<br>

## ⚙️ 개발 환경

### 버전 및 이슈관리

- Github

### 협업 툴

- Slack
- Zep

### 디자인 툴

- Figma

### 개발엔진 및 언어

- React / Supabase / Javascript

<br>

## 🗂️ 폴더구조

```
📦
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ README.md
├─ index.html
├─ jsconfig.json
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ src
│  ├─ Providers.jsx
│  ├─ Redux
│  │  ├─ Config
│  │  │  └─ configureStore.js
│  │  └─ Slices
│  │     ├─ PostModalSlice.js
│  │     └─ PostsSlice.js
│  ├─ assets
│  │  ├─ SiteLogo.png
│  │  ├─ background.png
│  │  ├─ background2.png
│  │  ├─ brownfilm.png
│  │  ├─ film.png
│  │  └─ react.svg
│  ├─ components
│  │  ├─ GlobalStyles.jsx
│  │  ├─ Header
│  │  │  ├─ Login.jsx
│  │  │  ├─ ModifyHeader.jsx
│  │  │  └─ MyPage.jsx
│  │  ├─ LoginPage
│  │  │  ├─ LoginForm.jsx
│  │  │  └─ index.jsx
│  │  ├─ Modal
│  │  │  ├─ PostModal.jsx
│  │  │  └─ PostingModal.jsx
│  │  ├─ MyPage
│  │  │  ├─ AddUserToTable.jsx
│  │  │  ├─ Calendar.jsx
│  │  │  ├─ Modify.jsx
│  │  │  ├─ PostItem.jsx
│  │  │  ├─ PostingList.jsx
│  │  │  ├─ Profile.jsx
│  │  │  ├─ hooks
│  │  │  │  └─ UseFetchPosts.js
│  │  │  └─ index.jsx
│  │  └─ common
│  │     └─ index.jsx
│  ├─ config
│  │  └─ constants
│  │     └─ index.js
│  ├─ contexts
│  │  ├─ Auth
│  │  │  ├─ AuthContext.jsx
│  │  │  └─ hooks.js
│  │  └─ Modal
│  │     ├─ ModalContext.jsx
│  │     └─ useModal.js
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ LoginPage
│  │  │  └─ LoginPage.jsx
│  │  ├─ ModifyPage
│  │  │  └─ ModifyPage.jsx
│  │  └─ MyPage
│  │     └─ MyPage.jsx
│  └─ routes
│     └─ Router.jsx
├─ vite.config.js
└─ yarn.lock
```
