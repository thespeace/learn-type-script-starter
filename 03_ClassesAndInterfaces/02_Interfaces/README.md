# Interfaces
#
```tsx
type Nickname = string;
type Health =  number;
type Friends = Array<String>
type Team = "read" | "blue" | "yellow" //type이 특정값을 가지도록 alias 타입으로 정의,
type Height = 160 | 170 | 180

type Player = { //object의 모양(타입)을 정의 방법 1
    nickName :  Nickname,
    healthBar : Health,
    team ?: Team,
    height ?: Height
}
const seo : Player = {
    nickName : "thespeace",
    healthBar:10
}

interface Player2 { //object의 모양(타입)을 정의 방법 2, interface는 오로지 "오브젝트"만 정의 가능
    nickName :  Nickname,
    healthBar : Health
}
const seo2 : Player2 = {
    nickName : "thespeace",
    healthBar:10
}

type Food = String; //Food를 정의
const kimchi : Food = "delicious";

//인터페이스 상속
// type User = {
//     name:string
// }
// type Name = User & { } //인터페이스는 클래스와 닮았다.
// const seonghwan : Name = {
//     name : "name"
// }

interface User{
    readonly name:string
}
interface Name extends User { } //인터페이스는 클래스와 닮았다.
const seonghwan : Name = {
    name : "name"
}
// seonghwan.name = "xx"; //not work!

//이름이 같은 인터페이스는 ts가 알아서 합쳐준다.
interface Add {
    one : number
}
interface Add {
    two : string
}
interface Add {
    three : Array<number>
}
const Result : Add = {
    one : 1,
    two : "둘",
    three : [1,2,3]
}
```

## Static Members

클래스에는 static 멤버가 있을 수 있습니다. 이 멤버는 클래스의 특정 인스턴스와 연결되지 않습니다. 클래스 생성자 객체 자체를 통해 액세스할 수 있습니다. static 멤버는 동일한 public, protected 및 private 과 함께 사용할 수도 있습니다.

```tsx
class MyClass {
	static x = 0;
	static printX() {
		console.log(MyClass.x);
	}
}
console.log(MyClass.x);
MyClass.printX();
```

## Interfaces

객체의 모양을 특정해주기 위해 사용합니다. 여기서는 firstName 및 lastName 필드가 있는 객체를 설명하는 인터페이스를 사용합니다.

```tsx
interface Person {
	firstName: string;
	lastName: string;
}
```


# Class 복습!!!!!

추상클래스와 그 안에 추상 메소드 그리고 추상 클래스를 상속받는 클래스를 만들어보자.



```tsx
abstract class User {  // 추상클래스는 js에서는 일반 클래스로 만들어준다. 그렇다면 왜 추상클래스를 만드는 걸까? 표준화된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용한다.
    constructor(
        protected firstName : string,
        protected lastName : string
    ) {}
    abstract sayHi(name :String):string
    abstract fullName():string
}
class Player extends User {
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. my name is ${this.fullName()}`
    }
}

// 그렇다면 추상클래스를 사용하면 일반 클래스인 js가 남게 되는데 그건 불필요한 코드같은데 
// 그걸 없앨 순 없을 까? 이때, 인터페이스가 필요하다.
// 왜냐하면 인터페이스는 가볍기 때문에 컴파일하면 JS로 바뀌지 않고 사라진다. 
// 그렇다면 인터페이스가 상속할때 클래스를 강제할 수 있는 방법은 뭐가 있을까?
```

```tsx
interface User { //interface는 ts에만 존재한다.
    firstName : string,
    lastName : string,
    sayHi(name :String):string
    fullName():string
}
interface Human {
    health:number
}
class Player implements User, Human { //클래스가 원하는 대로 행동하고, 원하는 property들을 가지도록 강제.
    constructor(
        public firstName:string, //interface를 상속할때에는 public만 허용 가능하다.
        public lastName:string,
        public health:number
    ) {}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. my name is ${this.fullName()}`
    }
}

//결국에 interface는 js에 컴파일이 되지않았고, 코드도 줄이고 그로인해 파일사이즈도 감소하는 효과를 봤다. 그리고 클래스도 인터페이스에 의해 강제되게 행동하도록 만들었다.
//단점으로는 private property를 사용하지 못한다는 것이 있다.

//인터페이스는 어댑터 패턴과 같은 디자인 패턴을 사용하여 팀과 함께 일할 때, 인터페이스를 만들어두고 팀원이 원하는 각자의 방식으로 클래스를 상속하도록 하는 건 엄처안게 유용한 방법이다.
//모두가 같은 property와 method를 가지게 될것이다.

function makeUser(user : User){ // 추가로 인터페이스를 타입으로 쓸 수 있다. 마찬가지로 클래스도 타입으로 쓸 수 있다.
    return "hi"
}
makeUser({
    firstName : "zz",
    lastName : "gg",
    sayHi : (name)=>"z",
    fullName : ()=>"gg"
})
```

## implements

implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있습니다.

클래스를 올바르게 구현하지 못하면 오류가 발생합니다.

implements 절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것입니다. 클래스의 유형이나 메서드는 전혀 변경하지 않습니다.

또한 클래스는 여러 인터페이스를 구현할 수도 있습니다. 클래스 C는 A, B를 구현합니다.

ex) class C implements A, B { }

```tsx
interface Pingable {
	ping(): void;
}
// Sonar클래스는 Pingable인터페이스를 implement했기 때문에 Pingable가 가진 ping메서드를 구현해줘야 합니다.

class Sonar implements Pingable {
	ping() {
		console.log("ping!");
	}
}
```

https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses




# Recap!!
## Type Aliases VS interfaces

Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

결론: 대부분의 경우 개인 취향에 따라 선택 가능 (인터페이스 사용을 조금 더 추천)

```tsx
type PlayerA = {
    name : string
}
const playerA : PlayerA ={
    name : "A"
}
//// type과 interface는 같은 목표를 가지고 있기때문에 똑같이 사용가능하다. 목표란? 오브젝트의 모양과 타입을 알려주는 것.
interface PlayerB {
    name : string
}
const playerB : PlayerB ={
    name : "B"
}

//하지만 타입을 상속시키는 것에서 조금 다르다.
type PlayerAA = PlayerA & {
    lastName : string
}
const playerAA : PlayerAA ={
    name : "A",
    lastName : "AA"
}
////type과 다르게 interface에서는 PlayerBB가 정의 되어 있어도, 같은 이름으로 property를 정의가 가능하다.
interface PlayerBB extends PlayerB {
    lastName : string
}
interface PlayerBB {
    health : string
}
const playerBB : PlayerBB = {
    name : "B",
    lastName : "BB",
    health : "addBB"
}

//인터페이스와 타입 모두 추상 클래스로 대체해서 쓸 수 있다.
type PlayerC = {
    firstName : string
}
interface PlayerD {
    firstName : string
}
class UserC implements PlayerC{
    constructor(
        public firstName : string
    ) {}
}
class UserD implements PlayerD{
    constructor(
        public firstName : string
    ) {}
}
```