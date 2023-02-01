import { init, exit } from "myPackage";
import { push, pull } from "./myFile";
const hello = () => "hi";
class Block {
    constructor(data) {
        this.data = data;
    }
    static hello() {
        return "hi";
    }
}
init({
    url: "true"
});
exit(1);
/* js파일을 불러오기 위해서는 tsconfig.json 파일에 allowJs:true 설정을 더해줘야 한다.*/
push({
    url: "string"
});
pull(1);
