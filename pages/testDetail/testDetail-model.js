/*
 * @Author: bonny
 * @Date: 2020-07-02 21:30:04
 * @LastEditTime: 2020-07-02 22:17:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\testDetail\testDetail-model.js
 */ 
import { Base } from '../../utils/base.js';

class TestDetail extends Base {
  constructor() {
    super();
  }

  getTestDetail(id, callback) {
    var that = this;
    let param = {
      url: `home/getPsyTestDetails?test_id=${id}`,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export { TestDetail };