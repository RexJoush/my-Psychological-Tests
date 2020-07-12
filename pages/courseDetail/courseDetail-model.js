/*
 * @Author: bonny
 * @Date: 2020-07-02 21:30:04
 * @LastEditTime: 2020-07-12 12:55:00
 * @LastEditors: Bonny.meng
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\testDetail\testDetail-model.js
 */ 
import { Base } from '../../utils/base.js';

class CourseDetail extends Base {
  constructor() {
    super();
  }

  getCourseData(id, callback) {
    var that = this;
    let param = {
      url: `home/getCourseData?test_id=${id}`,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
}

export { CourseDetail };