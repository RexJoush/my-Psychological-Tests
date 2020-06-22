let http = require("http");
let express = require("express");
let app = express();

http.createServer(app).listen(3000,function(){

});

app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Hello</h1>");
});

/*
    wxapp
 */
    // 获取轮播图
    app.get("/test",(req,res)=>{
        console.log(req.query);
        let arr = [];
        for (let i = 0; i < 6; i++){
            let imgUrl = "http://www.rexjoush.com:3000/wxapp/image/banner/"+ i +".jpg";
            arr.push(imgUrl);
        }

        res.end(JSON.stringify(arr));

    })
    app.get("/getBannerData",(req,res)=>{
        let arr = [];
        for (let i = 0; i < 6; i++){
            let imgUrl = "http://www.rexjoush.com:3000/wxapp/image/banner/"+ i +".jpg";
            arr.push(imgUrl);
        }

        res.end(JSON.stringify(arr));

    })
