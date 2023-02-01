/*
    우리가 자주 맞닥뜨릴 수 있는 경우는 프로젝트 안에 자바스크립트 파일과 타입스크립트 파일이 같이 들어있는 경우다.
    자바스크립트에서 타입스크립트로 이전하는 경우가 특히 더 많다.
    해당 js파일을 ts파일에서 사용하려면 컴파일옵션에 "allowJs" : true 해당 명령어 추가!
*/

/*
    JSDoc?
    쉽게 말해서 코멘트로 이루어진 문법이다.
    함수위에 코멘트와 함께 해당 문법을 제대로 작성하면, 타입스크립트가 이 코멘트를 읽을 수 있다.
*/
// @ts-check 해당 JSDoc 문법을 작성해주면 ts의 보호장치를 js파일에 걸 수있다!
/**
 * "프로젝트를 초기화한다"
 * @param {object} commit //이 함수는 입력값을 받고
 * @param {boolean} commit.debug  //그리고 commit 객체 안에 boolean을 지정해주고,
 * @param {string} commit.url
 * @returns {boolean}//입력값의 데이터 타입은 객체가 될 것이다.
 *
 *
 */


export function push(commit){
    return false;
}
export function pull(repo){
    return repo + 1;
}
