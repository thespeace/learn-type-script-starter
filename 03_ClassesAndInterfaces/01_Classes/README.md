TypeScript로 객체지향 프로그래밍을 해보자!

Classer같은 객체 지향 기술로 더 안전하고 더 좋게, 그리고 재사용성이 좋은 코드를 만들 수 있다.

코드로 살펴보자.

### Private vs Public

```tsx
class Player {
	constructor(
		private firstName : string, //parameter들을 써주기만하면 ts가 알아서 constructor 함수를 만들어준다.
		private lastName : string,
		public nickName : string
	) {}
}

const seo = new Player("seo", "las", "thespeace");

seo.firstName // (private) js에서는 작동하지만 ts에서는 작동하지 않는다.(컴파일X)************
seo.nickName // (public) 가능

```

### Abstract Class(추상 클래스) , protected

```tsx
abstract class User { // 추상클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다. but 직접 새로운 인스턴스를 만들 수는 없다.
	constructor( //추상 property
		private firstName : string, 
		private lastName : string,
		protected age : number,
		public nickName : string
	) {}
	private getFullName(){ 
		return `${this.firstName} + ${this.lastName}`//하지만 이와 같이 메소드 대신 추상메소드를 만들어 보자. 추상 메소드는 call signature만 작성해야 한다. getAge를 보자.
	abstract getAge():void // 추상 메소드는 뭘까? 
//추상 메소드는 오직 클래스 안에서만 구현(implementation)해야 하고, 코드가 없는 메소드이다. 그리고 상속받는 모든 클래스들이 작성(구현)을 해야만 하는 메소드를 의미한다.

	}
}

class Player extends User { // 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.
	getAge(){
		console.log(this.age); // protected 선언으로 자식 클래스에서 받아올 수 있다.
	}
}

const seo = new User("seo", "las", "thespeace"); //작동하지 않는다. 추상 클래스의 인스턴스를 만들 수 없다고 경고하기 때문.

const realSeo = new Player("seo", "las", "thespeace");
realSeo.nickname // 가능.
realSeo.getFullName() // (private)불가능
```

### —접근 제어자(보호 등급)의 접근 가능한 위치

| 구분 | 선언한 클래스 내 | 상속받은 클래스 내 | 인스턴스 |
| --- | --- | --- | --- |
| private | O | X | X |
| protected | O | O | X |
| public | O | O | O |

## 예제) 해쉬 맵을 이용해서 단어 사전을 만들어보자

```tsx
type Words = { //object의 type을 선언해야할때 아래와 같이 type을 선언한다.
	[key:string] : string //제한된 양의 property || key를 가지는 타입을 정의해주는 방법. property의 이름에 대해 미리 알진 못하지만 타입만 알고 있을 때 쓰면 된다.
}

// let dict : Words = {
// 	"kimchi" : "food",
// 	"" : ""
// }

class Dict {
	private words : Words //property가 constructor로부터 바로 초기화 되지 않은 경우, 아래와 같이~~
	constructor(){
		this.words = {} //수동으로 초기화!
	}
	add(word:Word){ //class를 만들때 클래스를 타입처럼 사용할 수 있다. word는 Word 클래스의 인스턴스 타입.
		if(this.words[word.term] === undefined){ //사전에 없는 단어이면~
			this.words[word.term] = word.def;
		}
	}
	def(term:string) {
		return this.words[term]
	}
}

class Word {
	constructor(
		public term : string,
		public def : string
	) {}
}

const kimchi = new Word("kimchi", "한국의 음식"); //클래스를 만들 수도 있다.

const dict = new Dict()

dict.add(kimchi);
dict.def("kimchi")
```