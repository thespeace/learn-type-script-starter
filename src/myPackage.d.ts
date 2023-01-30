/*
    d.ts 파일이란?
    타입스크립트에게 타입에 대해 설명하는 파일,
    정의 파일로 호출 시그니처, 그러니까 module의 타입만 ts에게 알려주는 파일.


*/
interface Config { /*Config 인터페이스 선언 및 타입 설정, url을 보낼 것을 명시*/
    url : string;
}
declare module "myPackage" { /* 모듈 선언! */
    function init(config:Config):boolean; /*init는 config를 받을 것이고, 이건 Config 인터페이스가 될 것이다. init는 boolean을 반환한다는 것도 알려주기.*/
    function exit(code:number):number; /*exit라는 함수가 number을 받아서 number을 반환하는 함수라는 것을 추론하게 명시해줘야(도와줘야) 한다.*/
}
