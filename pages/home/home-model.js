import { Base } from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  /*banner图片*/
  getBannerData(callback) {
    var that = this;
    var param = {
      url: 'pages/home/getBannerData',

      sCallback: function (data) {
        // data = data.items;
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Home };