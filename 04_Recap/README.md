    다형성, 제네릭, 클래스, 그리고 콜 시그니처와 클래스, 인터페이스까지 모두 합쳐 복습해보자.

1. 다형성 : 다른 모양의 코드를 가질 수 있게 해준다.
2. 제네릭 : 이 다형성을 이룰 수 있는 방법은? 제네릭을 사용하는 것, 제네릭은 placeholder 타입을 쓸 수 있도록 해준다. ↔ concrete

* but! 때가 되면 타입스크립트가 placeholder타입을 concrete 타입으로 바꾸어준다.
이점으로는, 가독성 뿐아니라 재사용성까지 보장해준다.


## Goal : 브라우저에서 쓰는 로컬 스토리지 API와 비슷한 API를 만들어보자

```tsx
interface SStorage<T> { //js의 로컬 스토리지를 위한 인터페이스인 Storage가 있으니, override를 원치 않아 이름을 바꿨다. 그리고 클래스로부터 제네릭을 받고-
    [key:string] : T //key가 제한되지 않은 오브젝트를 정의하게 해준다. 이것은 제네릭을 사용하도록 받았다.
}

class LocalStorage <T>{ // 제네릭을 클래스로 보내고
    private storage : SStorage<T> = {} //클래스는 제네릭을 인터페이스로-
    set(key:string, value:T){
        this.storage[key] = value
    }
    remove(key:string){
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringStorage = new LocalStorage<string>() //localStorage of string type
                                                 //<string>을 바탕으로 call signature을 만들어준다.
stringStorage.get("key")
stringStorage.set("hello", "how are you");

const booleanStorage = new LocalStorage<boolean>(); //다형성이 구현되었다.
booleanStorage.get("xxx")
booleanStorage.set("bye", true)
```