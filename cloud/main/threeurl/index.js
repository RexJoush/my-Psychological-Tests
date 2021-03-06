// 云函数入口文件

const cloud = require('wx-server-sdk');
let got = require("got");
// let host = "http://81.68.85.184:39000";
let host = "https://www.xinliceliang.com:39666/api" 

cloud.init();

// 云函数入口函数
exports.main = async (event, context) => {
  let url = host + "" + event.url;

  const response = await got(url, {
    method: 'GET',
    searchParams:{
      event: JSON.stringify(event),
    },
  });
  return response.body;
}