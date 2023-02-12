### 그리스어로 Poly가 무슨 뜻일까?

many, several, much, multi : 많은, 다수의

### morphos or morphic란?

form(형태), structure(구조)

## 즉, 여러가지 다른 모양들, 형태들

# Polymorphism!

- 인자들과 반환값에 대하여 형태(타입)에 따라 그에 상응하는 형태(타입)를 갖을 수 있다.
- any와의 차이점은 해당 타입에 대한 정보를 잃지 않는다. any는 any로서 밖에 알 수 없지만 generics는 타입 정보를 알 수 있다.

# Generics!

> '제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.’
>

concrete type

- number, boolean, void 등 지금까지 배운 타입

generic type

- 타입의 placeholder 같은 것!
- 결국, 타입을 확실히 모를 때  generic을 사용한다.

- Call Signatures를 만들 때, 직접 모든 타입을 작성해주는 것은  Generics를 알기 전까지는 그리 좋은 방법은 아니다. 왜냐하면 Generics은 기본적으로 placeholder를 사용해서 네가 작성한 코드의 타입 기준으로 바꿔주기 때문이다. 간단히 말해 너의 코드를 추론해서 타입을

```jsx
//기본 작성법
type SuperPrint = <T,M>( a : T[], b : M) => T
//화살표함수가 아니라 좀 더 쉽게 작성
function EasySuperPrint<T>(a:T[]){
	return a[0]
}

// <T> 를 작성하여 제네릭을 사용할 거라고 선언!
// <T>는 배열에서 오고, 함수의 첫번째 파라미터에서 오는 거라고 타입 스크립트에게 알려주는 것.

const superPrint : SuperPrint = (a) => a[0]

const a = superPrint([1,2,3,4],"9") // number type으로 대체.
//해당 함수는 타입스크립트가 추론을 해줬지만 숨겨진 걸 보면 아래와 같다.
//const a = superPrint<number>([1,2,3,4],"9")

const b = superPrint([true, false, true], 4)
const c = superPrint(["a", "b", "c"], true)
const d = superPrint([1,2,true,false,"hello"], "hi")

c.toUpperCase(); //사용가능
```

- 제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법입니다. 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있습니다.(구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
- 타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.

—예를 들자면

```jsx
function identity< Type >(arg: Type): Type {
	return arg;
}

// 제네릭 화살표 함수 (tsx기준)
const identity=< Type extends {} >(arg: Type):Type => {
	return arg;
}

let output = identity< string >("myString"); // 첫 번째 방법
let output = identity("myString"); // 두 번째 방법
// 두 번째 방법은 type argument inference(타입 인수 유추)를 사용합니다. 
//즉, 컴파일러가 전달하는 인수 유형에 따라 자동으로 Type 값을 설정하기를 원합니다.
```

[Documentation - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

### 실무에선 어떻게 사용할까?

```tsx
type Player<E> = {
	name: string,
	extraInfo: E
};

type MeExtra = {age: number};

type MePlayer = Player<MeExtra>;

const player: MePlayer = {
	name: "joseph",
	extraInfo: {
		age: 23
	}
};

const player2: Player<null> = {
	name: "Yee",
	extraInfo: null
};

//Generic은 위와 같이 원하는 만큼 커스텀 및 재사용이 가능하다
//아마 직접 작성하기보다 패키지/라이브러리의 Generic을 활용하는 경우가 더 많을 것이다

const numArr: Array = [1, 2, 3, 4];

const [state, setState] = useState();

//함수 뿐만 아니라 다양한 경우의 Generic을 활용할 수 있는데, 예를 들어 Array 기본 형태나 React의 useState가 Generic으로 디자인되어 있다
```