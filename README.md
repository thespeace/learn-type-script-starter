# learn-type-script-starter

### 왜 타입스크립트?
#### 자바스크립트는 매우 유연한 언어입니다. 때문에 개발자가 멍청하게 코드를 짜도 개발자를 이해하려고 하고 도와주려고 합니다.
```aidl
//만약 숫자 배열에 false를 더하려고 한다면 배열이 완전히 사라져버리고 boolean은 string이 되어버린다.
//다른 언어는 이를 허용하지 않는다. 하지만 자바스크립트는 가능하다.
console.log([1,2,3] + false);
> '1,2,3,4false'
```
### 왜 타입 안정성이 필요한지 알아보자
```aidl
function divide(a, b) {
    return a / b
}
divide(2, 3)
> 0.666666666
//이상적으로 생각하면 매개변수가 number이여야만 가능하다.
//하지만 문제는 js는 이 함수를 올바르게 사용하도록 강제하지 않는다.
divide("xxxxx")
> NaN
```
#### 보다시피 js는 코드 실행을 막아주지 않는다. 매개변수가 2개여야하고 number로 받아야함에도 에러가 없이 Not a Number만 뱉고 실행시켰다.
#### 안정성이 전혀 보장받지 못하고있다. 언어의 도움을 받지 못하고있다.

### 근본적인 단점
```aidl
const seo = { name : "seonghwan" }
seo.hello()
> Uncaught TypeError
```
#### 드디어 에러를 만났다. 하지만 근본적인 문제는 js는 이게 에러가 날 거라는 걸 몰라서 그냥 코드를 실행시켰다.
#### 이상적으로는 코드가 실행되기도 전에 언어가 자체적으로 seo 객체에는 hello()라는 함수가 없다고 알려주는 게 가장 좋을 것이다.
#### 하지만 이 에러는 유저의 컴퓨터에서 코드가 실행되면 나타나는 에러이다. 결코 좋은게 아니다.
#### 만일 Java에서 이런식으로 코드를 작성하면 시작조차 하지 못한다. 컴파일에 실패해버린다.
#### 때문에 이상적으로 프로그래밍을 하기 위해 타입스크립트를 사용하자.

### 결론, (타입) 안정성으로 인해 코드에 버그가 엄청나게 줄어들고, 런타임 에러가 줄고, 생산성도 늘어나게 된다.
***
#
## 타입스크립트란?
1. Strongly typed(강타입) programming language
   2. C#, Java, Go, Rust 같은 언어의 컴파일러(어셈블리 코드, 바이트 코드 등등으로 변환)처럼, TypeScript는 작성한 언어를 JavaScript로 변환(컴파일)해줍니다. 그 이유는 브라우저는 타입스크립트가 아니라 자바스크립트를 이해하기 때문인데, Node.js는 둘 다 이해할 수 있기 때문에 타입스크립트로 작성한 걸 자바스크립트로 변환해서 사용할 수 있게 해준다.
2. 타입스크립트의 컴파일
   3. TypeScript는 JavaScript에 추가적인 구문을 추가하여 editor와의 단단한 통합을 지원합니다. editor에서 초기에 오류를 잡을 수 있습니다.(정확히는 컴파일 되기 전에 오류)
   4.  TypeScript 코드는 JavaScript가 실행되는 모든 곳(브라우저, Node.js 또는 Deno 및 앱 등)에서 JavaScript로 변환될 수 있습니다.
3. TypeScript는 JavaScript를 이해하고 타입 추론(type inference)을 사용하여 추가 코드 없이도 훌륭한 도구를 제공합니다.

### 타입스크립트의 두가지 접근 방식
```aidl
// 변수만 생성하고 암시적으로 정의(타입을 추론해준다)
let a = "hello"; //string이라고 추론해서 암시적으로 정의
a = 1 //Error!

//데이터와 변수의 타입을 명시적으로 정의
let b : boolean = false; // <-----우리가 처음보는 타입스크립트 문법
b = "hi" // Error!
```
#### Type Checker가 타입을 확인해서 오류를 알려준다.
#### 이 타입 체커를 잘 활용해서 암시적으로 타입 추론을 맡기는 게 코드도 더 짧아져서 가독성이 좋아지기 때문에 더 좋은 방법이다.
#### 만일 아래와 같은 상황일 때는 명시적 정의가 적합하다.

```aidl
//빈 배열은 안의 타입을 추론하지 못하기때문에 이럴땐 명시적 정의
//let c = [] 
let c : number[] = [] 
c.push(1) 
```





#
#
#
#
#
# 프로젝트 생성
> 준비물 : Computer + Node.js + IDEA
#
### Node.js 프로젝트 만들기
```
npm init -y
```
#### package.json의 ``main``을 없애고 script의 ``test``도 사용하지 않으니 삭제해줍니다.
#
### TypeScript 설치
```
npm i -D typescript
```
#### 해당 명령어에서 i는 install을 D을 붙임으로서 타입스크립트가 ``devDependencies``에 설치됩니다.
#
### 작동 테스트!
#### 폴더와 파일을 생성해줍니다. root 경로에 src폴더 생성 후 그 하위에 ``index.ts`` 파일 생성
```
const hello =()=> "hi";
```
#### 컴파일 동작을 입증하기 위해 해당 파일에 타입스크립트를 실행해서 자바스크립트 파일을 받아봅시다.(컴파일)
#
#### 그전에 사용하는 IDEA가 우리가 타입스크립트로 작업한다는 것을 알게 하기 위해 ``타입스크립트 설정파일``을 만들어 줘야 합니다.
```
touch tsconfig.json
```
#### 해당 명령어를 사용하거나 직접 파일을 만들어 줘도 됩니다. 후자일 경우, 파일 이름은 꼭 ``tsconfig.json``이어야만 합니다.
### *tsconfig.json 내용은 직접 확인 바랍니다.*
#

타입스크립트 코드 테스트
https://www.typescriptlang.org/play

타입스크립트 핸드북
https://typescript-kr.github.io/pages/basic-types.html
