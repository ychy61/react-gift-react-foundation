# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

## Step 1

- [X] Create React App을 기반으로 프로젝트를 생성
- [X] Typescript로 프로젝트가 동작되게 세팅
- [X] 절대 경로로 Import 할 수 있게 alias를 설정
- [X] tsconfig 설정
- [X] ESLint, Prettier를 추가하고 Lint 룰을 세팅
- [X] Emotion 스타일 라이브러리를 추가
- [X] Reset CSS를 적용
- [X] .gitignore를 추가
- [X] 프로젝트에 불필요한 코드들을 정리
- [ ] 본인만의 폴더 구조 기준을 세우고 반영 -> step2에서 계속
- [ ] 일관된 코드 작성 -> step2에서 계속
- [ ] 기능 단위로 커밋

## Step 2

- [X] Storybook을 추가
- [X] Button 컴포넌트 구현
  - [X] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보이도록 구현
  - [X] Size Props에 따라 버튼의 크기가 다르게 보이도록 구현 (value가 responsive인 경우 미디어 쿼리에 따라 크기 변경)
  - [X] Button Element의 기본 속성들을 모두 사용할 수 있게 구현
- [X] Input 컴포넌트 구현
  - [X] disabled Props에 따라 Input이 비활성화되고, UI에서도 비활성화 됨을 인지할 수 있게 구현
  - [X] invalid Props에 따라 Input의 값이 잘못되었음을 UI에서 인지할 수 있게 구현
  - [X] Size Props에 따라 Input의 크기가 다르게 보이도록 구현 (value가 responsive인 경우 미디어 쿼리에 따라 크기 변경)
  - [X] Input Element의 기본 속성들을 모두 사용할 수 있게 구현
- [X] Image 컴포넌트 구현
  - [X] ratio Props에 따라 이미지 비율을 설정할 수 있게 구현 (예: 16/9, square)
  - [X] radius Props에 따라 모서리가 둥글게 설정되도록 구현 (예: number인 경우 해당 값만큼 둥글게, circle인 경우 원형)
  - [X] Img Element의 기본 속성들을 모두 사용할 수 있게 구현
- [X] GoodsItem 컴포넌트 구현
  - [X] Default 형태의 GoodsItem 컴포넌트 구현
  - [X] Ranking 형태의 GoodsItem 컴포넌트 구현
  - [X] 공통으로 imageSrc, subtitle, title, amount Props를 받아서 구현
  - [X] Ranking 형태의 경우 rankingIndex Props를 추가로 받아서, 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보이도록 구현
- [X] Grid 컴포넌트 구현
- [X] Container 컴포넌트 구현
- [X] 각 컴포넌트는 Storybook에서 확인할 수 있도록 설정

## Step 3

- [ ] 질문의 답변을 README에 작성

### 1주차 질문

- 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
프로젝트에 필요한 다양한 모듈과 자산(js 파일, CSS 파일, 이미지 등)을 의존성 그래프를 기반으로 하나 이상의 번들로 묶어주는 모듈 번들러(module bundler)이다.
- 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
브라우저는 JSX 코드를 이해할 수 있도록 Babel을 통해 일반 JavaScript 코드로 변환하여 읽는다.
- 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
React는 상태를 변경할 때 불변성을 유지하는 특징이 있어 상태를 직접 수정하지 않고 새로운 상태 객체를 만들어 교체한다. 따라서 상태를 새로 만들어 바꾸기 때문에 상태가 변했다는 것을 React가 알 수 있게 된다.