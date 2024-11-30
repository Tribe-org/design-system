# 디자인 시스템 레포지토리

본 레포지토리는 트라이브 디자인 시스템 컴포넌트를 관리하는 레포지토리입니다.

Figma - https://www.figma.com/design/bEwagtkqQtvPSvUIkF9A4M/tribe_planning-%26-design?node-id=133-4335&node-type=canvas&t=3wmgOgo82kBigHBN-0

# 이용 방법

피그마의 규칙에 따라 컴포넌트를 제작 후, 스토리북으로 검토를 진행합니다.
스토리북 파일은 src/components/stories 아래에, 디자인 시스템 컴포넌트는 src/components에 폴더에 맞게 정리해두시기 바랍니다.

# 배포 방법

## 빌드 하기

배포하기 이전에, 먼저 프로젝트 빌드를 반드시 하셔야 합니다. 빌드 한 내용은 dist 폴더에 들어가며, 이 폴더가 배포되는 원리입니다.

```
yarn build
```

## 버전 수정하기

이전에 배포된 버전과 같은 버전으로는 배포할 수 없기 때문에, 버전을 올려주어야 합니다.

다음의 버전 중 원하는 버전을 골라 업데이트해 주시기 바랍니다.

- Major: `npm version major`
- Minor: `npm version minor`
- Patch: `npm version patch`

이렇게 업데이트 한 버전은 자동으로 커밋에 올라갑니다.

## 배포하기

다음의 명령어를 실행해 배포를 진행할 수 있습니다.

```
# npm 명령어 사용할 경우
npm publish

# yarn을 사용할 경우
yarn deploy
```

## 푸시하고 병합하기

배포를 완료했으면, 반드시 main 브랜치에 코드를 병합해야 다음 사람이 배포 에러를 받지 않을 수 있습니다.

반드시 해당 브랜치를 main 브랜치에 병합하도록 합시다!
