import axios from "axios";

export class Reviews{

    static async testHttp(){
        const url = "http://httpbin.org/ip";

        console.log("test");
    
        axios.defaults.baseURL = "http://localhost:3000";
        axios.defaults.headers.post["Content-Type"] =
          "application/json;charset=utf-8";
        axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
        return await axios
          .get(url)
          .then(({ data }) => {
            console.log("succeed!");
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
}
