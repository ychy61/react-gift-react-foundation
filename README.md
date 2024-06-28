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

- [ ] Storybook을 추가
- [ ] Button 컴포넌트 구현
  - [ ] Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보이도록 구현
  - [ ] Size Props에 따라 버튼의 크기가 다르게 보이도록 구현 (value가 responsive인 경우 미디어 쿼리에 따라 크기 변경)
  - [ ] Button Element의 기본 속성들을 모두 사용할 수 있게 구현
- [ ] Input 컴포넌트 구현
  - [ ] disabled Props에 따라 Input이 비활성화되고, UI에서도 비활성화 됨을 인지할 수 있게 구현
  - [ ] invalid Props에 따라 Input의 값이 잘못되었음을 UI에서 인지할 수 있게 구현
  - [ ] Size Props에 따라 Input의 크기가 다르게 보이도록 구현 (value가 responsive인 경우 미디어 쿼리에 따라 크기 변경)
  - [ ] Input Element의 기본 속성들을 모두 사용할 수 있게 구현
- [ ] Image 컴포넌트 구현
  - [ ] ratio Props에 따라 이미지 비율을 설정할 수 있게 구현 (예: 16/9, square)
  - [ ] radius Props에 따라 모서리가 둥글게 설정되도록 구현 (예: number인 경우 해당 값만큼 둥글게, circle인 경우 원형)
  - [ ] Img Element의 기본 속성들을 모두 사용할 수 있게 구현
- [ ] GoodsItem 컴포넌트 구현
  - [ ] Default 형태의 GoodsItem 컴포넌트 구현
  - [ ] Ranking 형태의 GoodsItem 컴포넌트 구현
  - [ ] 공통으로 imageSrc, subtitle, title, amount Props를 받아서 구현
  - [ ] Ranking 형태의 경우 rankingIndex Props를 추가로 받아서, 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보이도록 구현
- [ ] Grid 컴포넌트 구현
- [ ] Container 컴포넌트 구현
- [ ] 각 컴포넌트는 Storybook에서 확인할 수 있도록 설정

## Step 3

- [ ] 질문의 답변을 README에 작성
