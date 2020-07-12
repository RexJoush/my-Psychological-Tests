/*
 * @Author: bonny
 * @Date: 2020-07-12 21:30:04
 * @LastEditTime: 2020-07-12 14:28:42
 * @LastEditors: Bonny.meng
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\testDetail\testDetail-model.js
 */ 
import { Base } from '../../utils/base.js';

class TestDetail extends Base {
  constructor() {
    super();
  }

  gotoConList(id, callback) {
    var that = this;
    let param = {
      url: `home/getConsultantDetails?consultant_id=${id}`,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export { TestDetail };