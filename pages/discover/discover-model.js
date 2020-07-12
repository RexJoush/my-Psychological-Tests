/*
 * @Description: 
 * @Autor: Bonny.meng
 * @Date: 2020-07-12 14:35:50
 * @LastEditors: Bonny.meng
 * @LastEditTime: 2020-07-12 18:39:47
 */ 
import { Base } from '../../utils/base.js';

class Discover extends Base {
  constructor() {
    super();
  }
  //获取所有心理测试
  getPsyTestList(callback) {
    var that = this;
    var param = {
      url: 'discover/getPsyTestList?all',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  //获取全部分类列表
  getCategoryList(callback) {
    var that = this;
    var param = {
      url: 'discover/getCategoryList',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  //按分类获取心理测试
  getByCategory(id,callback) {
    var that = this;
    var param = {
      url: 'discover/getPsyTestByCategory?category_id=' + id,

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  //获取全部咨询师
  getConsultantList(callback) {
    var that = this;
    var param = {
      url: 'discover/getConsultantList',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  //按标签获取心理咨询师
  getConsultantByCategory(callback) {
    var that = this;
    var param = {
      url: 'discover/getConsultantByCategory',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  //获取全部线上课程
  getCourseList(callback) {
    var that = this;
    var param = {
      url: 'discover/getCourseList',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  // 获取全部心理成长活动
  getPsyGrowList(callback) {
    var that = this;
    var param = {
      url: 'discover/getPsyGrowList',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  
  
};

export { Discover };