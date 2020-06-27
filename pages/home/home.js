import { Home } from 'home-model.js';
var home = new Home(); 
Page({
  data: {
    active: 0,
    loadingHidden: true,
    menus:[
      {
        name:"心理测评",
        url:'../../imgs/index_icon/health.png',
        id: 0
      },
      {
        name:"心理咨询",
        url:'../../imgs/index_icon/consult.png',
        id: 1
      },
      {
        name:"线上课程",
        url:'../../imgs/index_icon/online_course.png',
        id: 2
      },
      {
        name:"EAP",
        url:'../../imgs/index_icon/eap.png',
        id: 3
      }
    ],
    psyTestData: [
      {
        name: '常用测试1',
        desc: '这是第一个常用测试'
      },
      {
        name: '常用测试2',
        desc: '这是第2个常用测试'
      },
      {
        name: '常用测试3',
        desc: '这是第3个常用测试'
      },
      {
        name: '常用测试4',
        desc: '这是第4个常用测试'
      },
      {
        name: '推广测试',
        desc: '这是推广测试'
      },
      {
        name: '低价测试',
        desc: '这是一个低价测试'
      },
    ],
    psyCounseling: [
      {
        imgurl: '../../imgs/home1.png',
        expert: '抑郁症',
        desc: '抑郁症抑郁症',
        price: '200/h',
        form: '电话'
      },
      {
        imgurl: '../../imgs/home2.png',
        expert: '抑郁222症',
        desc: '抑郁症抑郁症',
        price: '100/h',
        form: '面谈'
      },
      {
        imgurl: '../../imgs/home1.png',
        expert: '1111',
        desc: '抑郁症抑郁症',
        price: '300/h',
        form: '网络'
      }
    ],
    courseData:[
      {
        intro: '治好你的抑郁症',
        imgurl: '../../imgs/home1.png',
        title: '心灵导师课程',
        subtitle: '学会微表情心灵管理'
      },
      {
        intro: '只要998',
        imgurl: '../../imgs/home2.png',
        title: '抑郁症',
        subtitle: '微表情心灵管理'
      }
    ],
    eapData:[
      {
        intro: 'EAP',
        imgurl: '../../imgs/home3.jpg',
        title: '李老师的EAP',
        subtitle: '微表情EAP心灵管理'
      }
    ]
  },

  toggle(e) { 
    console.log('点击',e.currentTarget.dataset.index)
    this.setData({
      active:e.currentTarget.dataset.index,
    })
  },

  toDetail(e, id) {
    let testId = id
    wx.navigateTo({
      url: '../../pages/homeDetail/homeDetail?testId="123"&name="test"',
    })
  },
 
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;

    // 获得bannar信息
    home.getBannerData((data) => {
      that.setData({
        bannerArr: data,
      });
    });

    //
    home.getCourseData((data) => {
      that.setData({
        banneconsrArr: data,
      });
    })
  },

  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  }
})


