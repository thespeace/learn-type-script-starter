- 함수 위에 마우스를 올렸을 때 보게 되는 걸 말한다.
- 함수의 타입, 함수의 반환 타입이 아니라 인자의 타입, 반환의 타입을 지정하는 것.(겁먹을 필요없다)
- 코드를 구현하면서 타입을 같이 써줬어야하는데, 콜 시그니처를 사용하면 이 함수의 `파라미터의 타입`은 무엇인지, `리턴 타입`은 무엇인지를 지정해주는데, 이것은 `단축키`와 같다!
- 프로퍼티로 호출 가능한 것을 설명하려면 객체 타입에 Call Signature을 작성할 수 있습니다.
- Call Signatures는 다음과 같이 함수의 매개 변수(parameter)와 반환 타입을 지정합니다.

```tsx
//기본 문법 예시
type Add = (a:number, b:number) => number;
const add:Add = (a,b) => a + b

//{}를 사용하면 그 값이 반환값이 함수 내부의 내용으로 처리가 된다.
const add:Add = (a,b) => a+b  // 기존 함수로 풀면 다음과 같게 됩니다.

function add(a, b) {
	return (a+b)
}

const add:Add = (a,b) => {a+b} // 함수로 풀면 다음과 같게 됩니다.

function add(a, b) {
	a+b;
}

//즉 애로우함수에서 {}를 사용하게 되면 그 안의 값은 반환이 아니라 함수 내부 내용으로 처리되기에
//반환값이 없는 void로 처리됩니다. 이에 따라 위에서 미리 선안한 Add자료형의 반환값은 number라고
//정해놓은 내용과 충돌하기에 에러가 발생합니다.

type PizzaFunction = {
	pizza: string;
	(args: number): boolean;
};

function hello(fn: PizzaFunction) {
	console.log(fn.pizza, fn(6));
}
```

