# 타입스크립트의 타입들

1. 암시적 유형

    ```jsx
    let a = "hello"
    a = 1; // 자바스크립트에선 가능. 하지만 타입스크립트는 위의 변수 선언으로 인해 a는 string 타입이라고 추론하여 에러를 띄운다.
    		   // 보통은 변수를 생성하고 타입을 변경하지 않는다. string에서 시작해서 string으로 끝나는 것.
    ```

2. 명시적 유형

    ```tsx
    let b : boolean = true // Type Checker와 소통하는 방식(타입을 확인). 변수 b는 boolean이라고 알려주는 것.
    let b = false // 위와 결과는 같다. 하지만 코드의 길이를 줄일 수 있고, 가독성면에서는 암시작 유형으로 작성하는 코드가 더 좋다.
    ```


보통은 암시적 표현이 좋지만 가끔은 명시적 유형도 유용하다.


```tsx
let c : number[] = [1,2,3,4]
c.push("5"); //error! 보통은 한 배열에 같은 타입만 넣기 때문에 체크하기 용이.
```
---
#

1. 대표적이고 간단한 타입들

    ```tsx
    let a : number = 1;
    let b : string = "li";
    let c : boolean = true;
    let d = [1,2];
    let e : string[] = ["1","2"];
    
    ```

2. Optional Type

    ```tsx
    //player은 object 타입
    //name은 string, age는 number || undefined
    //age는 optional parameter(선택적 변수)
    const player : {
    	name : String,
    	age?: number
    } = {
    	name : "nico"
    }
    
    // ❌ player.age가 undefined일 가능성 알림
    if(player.age < 10) {
    }
    
    //⭕ player.age가 undefined일 가능성 체크
    if(player.age && player.age < 10) {
    }
    ```


1. Alias(별칭) 타입
    - Type Aliases을 사용하여 객체 타입뿐만 아니라 모든 타입에 이름을 지정할 수 있습니다.
    - 하나의 Alias type의 변수를 만들어두면 재사용성으로 인해 효율성이 증가한다.
    - 코드가 깔끔하고 명확해질 때까지만 이작업을 하면 된다. (과도한 사용은 금물)

```tsx
type Age = number;
// type Name = string; 이것도 사용가능하겠죠?

type Player = {
    name: string,
    age?: Age
}

const player : Player = {
    name: "nico"
}
```

3-1. ⭐ 함수에서는 어떻게 쓸까

```tsx
type Age = number;
type Name = string;
type Player = {
    name: string,
    age?:number
}

function playerMaker1(name:string) : Player { //매개변수의 타입을 지정하는 방법 
    return {
        name //매개변수와 같은이름이니 이렇게 가능.
				// 만약 firstName 이면?  firstName : name
    }
}

//화살표 함수는 이렇게.
const playerMaker2 = (name:string) : Player => ({name})

const nico = playerMaker1("nico")
nico.age = 12 // 이것을 사용가능하게 하려면 

// 플러스 왜 리턴에 중괄호를 두 개로 감싸야하는가?
/*화살표 함수에서 return 값을 객체로 반환할 경우에
(parameter) => {}
이렇게만 쓰면 {} 부분이 함수 본문인지 객체인지 구분이 안되기 때문에
({}) 이렇게 묶어줘서 return값이 객체임을 확실히 하는 것 같아요.

function playerMaker (parameter) {
}

(parameter) => {}

★

function playerMaker(parameter){
return {객체}
}

(parameter) => ({객체})*/
```

1. readonly
    - JavaScript에서는 mutability(변경 가능성)이 기본값이지만 타입스크립트에서는 readonly를 통해 `읽기 전용`(immutability(불변성))으로 만들 수 있습니다.

```tsx
const numbers: readonly number[] = [1, 2, 3, 4]
🚫 numbers.push(1)
/*❗ readonly가 있으면 최초 선언 후 수정 불가
    ⇒ immutability(불변성) 부여
        but, javascript에서는 그냥 배열*/

const names : readonly string[] = ["1","2"]
🚫 names.map()
```

1. Tuple
    - 배열을 생성할 수 있는데, 최소한의 길이를 가져야 하고, 특정 위치에 특정 타입이 있어야 한다.
    - 정해진 개수와 순서에 따라 배열 선언

```tsx
const player : [string, number, boolean] = ["nico",1,true]
🚫 player[0] = 1

```

1. undefined, null, any
    - any: 아무 타입
    - undefined: 선언X 할당X
    - null: 선언O 할당X

    ```tsx
    let a : undefined = undefined
    
    type Player = {
        age?:number  // === ( number || undefined )
    }
    
    let b : null = null
    
    let a : [] // === any[]
    //any는 타입스크립트로부터 빠져나오고 싶을때 사용한다.
    //ts에서는 any를 사용하지 않기위해 할 수 있는 설정이 있다.
    //즉 any는 ts의 모든 것을 비활성화 시킨다.
    ```
    
   ---

   ## 타입스크립트에서만 존재하는 타입


1. unknown
    - 어떤 타입인지 모르는 변수를 지정
    - unknown타입은 모든 값을 나타냅니다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전합니다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문입니다.

```tsx
let a : unknown

if(typeof a === 'number'){
    let b = a + 1
}
if(typeof a === 'string'){
    let b = a.toUpperCase()
}
🚫 let b = a + 1

function hello(a: any) {
a.b(); // OK
}

function hello2(a: unknown) {
a.b(); // 에러: Object is of type 'unknown'.
}
```

1. void
    - 아무것도 return하지 않는 함수에서 반환 자료형
    - void는 값을 반환하지 않는 함수의 반환 값을 나타냅니다. 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입입니다.

```tsx
// The inferred return type is void
function noop() {
	return;
}

function hello() {
    console.log('x')
}
const a = hello()
🚫 a.toUpperCase() // void는 비어있는 것, 아무것도 리턴하지 않는다.
```

1. never
    - 함수가 return하지 않을 때
    - 일부 함수는 값을 반환하지 않습니다. 이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미합니다.

```tsx
function hello():never {
    🚫return "a"
    throw new Error("zzz") // 오류를 발생시키는 함수
}

function temp(name:string|number):never {
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    } else {
        name
    }
}

if 안에서는 string형의 name 반환
else if 안에서는 number형의 name 반환
else 안에서는 never형의 name 반환
⇒ 즉, 제대로 인자가 전달되었다면 else로 올 수 없음, 왜냐하면 앞의 if문에서 지정한 type을 다 체크했기 때문!

function fail(msg: string): never {
	throw new Error(msg);
}
```