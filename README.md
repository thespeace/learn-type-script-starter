# learn-type-script-starter
##### C#, Java, Go, Rust 같은 언어의 컴파일러처럼, TypeScript는 작성한 언어를 JavaScript로 변환해줍니다.
##### 그 이유는 브라우저는 타입스크립트가 아니라 자바스크립트를 이해하기 때문인데, Node.js는 둘 다 이해할 수 있기 때문에 타입스크립트로 작성한 걸 자바스크립트로 변환해서 사용할 수 있게 해준다.
***
# 프로젝트 생성
> 준비물 : Computer + Node.js + IDEA
#
### Node.js 프로젝트 만들기
```
npm init -y
```
##### package.json의 ``main``을 없애고 script의 ``test``도 사용하지 않으니 삭제해줍니다.
#
### TypeScript 설치
```
npm i -D typescript
```
##### 해당 명령어에서 i는 install을 D을 붙임으로서 타입스크립트가 ``devDependencies``에 설치됩니다.
#
### 작동 테스트!
##### 폴더와 파일을 생성해줍니다. root 경로에 src폴더 생성 후 그 하위에 ``index.ts`` 파일 생성
```
const hello =()=> "hi";
```
##### 컴파일 동작을 입증하기 위해 해당 파일에 타입스크립트를 실행해서 자바스크립트 파일을 받아봅시다.(컴파일)
#
##### 그전에 사용하는 IDEA가 우리가 타입스크립트로 작업한다는 것을 알게 하기 위해 ``타입스크립트 설정파일``을 만들어 줘야 합니다.
```
touch tsconfig.json
```
##### 해당 명령어를 사용하거나 직접 파일을 만들어 줘도 됩니다. 후자일 경우, 파일 이름은 꼭 ``tsconfig.json``이어야만 합니다.
### *tsconfig.json 내용은 직접 확인 바랍니다.*
#

