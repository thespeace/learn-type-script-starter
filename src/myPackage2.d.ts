/*
    자! 우리가 자주 맞닥뜨릴 수 있는 경우는 프로젝트 안에 자바스크립트와 타입스크립트 파일이 같이 들어있는 경우,
    특히 자바스크립트에서 타입스크립트로 이전하는 경우를 자주 마주칠 수 있을 것이다..


*/

interface Config{ /*Config 인터페이스 선언 및 타입 설정, url을 보낼 것을 명시*/
    url : string;
}
declare module "myPackage2" { /* 모듈 선언! */
    function push(commit:Config):boolean; /*init는 config를 받을 것이고, 이건 Config 인터페이스가 될 것이다. init는 boolean을 반환한다는 것도 알려주기.*/
    function pull(repo:number):number; /*exit라는 함수가 number을 받아서 number을 반환하는 함수라는 것을 추론하게 명시해줘야(도와줘야) 한다.*/
}
