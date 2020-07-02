import { Base } from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  /*banner图片*/
  getBannerData(callback) {
    var that = this;
    var param = {
      url: 'home/getBannerData',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  getPsyTestData(callback) {
    var that = this;
    var param = {
      url: 'home/getPsyTestData',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  getPsyCounseling(callback) {
    var that = this;
    var param = {
      url: 'home/getPsyCounseling',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }


  getCourseData(callback) {
    var that = this;
    var param = {
      url: 'home/getCourseData',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  getEap(callback) {
    var that = this;
    var param = {
      url: 'home/getEap',

      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  
};

export { Home };