import {init,exit} from "myPackage";
import {push,pull} from "./myPackage2";

const hello =()=> "hi";

/*class Block {
    constructor(private data:string){}
    static hello(){
        return "hi";
    }
}*/

console.log(hello);


/*init({
    url : "true"
})

exit(1)*/


/* js파일을 불러오기 위해서는 tsconfig.json 파일에 allowJs:true 설정을 더해줘야 한다.*/


/*push({
    debug : true,
    url : "true"
})

pull(1)*/
