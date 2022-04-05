console.log("test");
import { Reviews } from "./reviews.js";

document.addEventListener("contextmenu", function(event){
    console.log(event.target);
    clickedEl = event.target;
}, true);

// const res = axios.get("http://httpbin.org/ip")
//     .then(() => {
//         console.log("succeed");
//     })
//     .catch(err => {
//         console.log("err : " , err);
//     });

// console.log(res);


const res = Reviews.testHttp();
console.log(res);



let headlines = document.getElementsByClassName('yuRUbf');
console.log(headlines);
console.log(typeof(headlines[0]))
const links = Array.prototype.map.call(headlines, function(headline){return headline.firstChild.href});
console.log(links);

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // 保存しておいた要素情報をレスポンスに設定して返却
    if(request == "getClickedEl") {
        process.stdin.resume();
        process.stdin.setEncoding('utf8');

        var lines = []; ; //標準入力から受け取ったデータを格納する配列
        var reader = require('readline').createInterface({//readlineという機能を用いて標準入力からデータを受け取る
        input: process.stdin,
        output: process.stdout
        });
        reader.on('line', (lines) => {//line変数には標準入力から渡された一行のデータが格納されている
        lines.push(lines);//ここで、lines配列に、標準入力から渡されたデータが入る
        });
        reader.on('close', () => {//受け取ったデータを用いて処理を行う
        console.log(lines)//helloが出力される
        });
        return lines;
    }
});
