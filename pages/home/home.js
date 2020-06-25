import { Home } from 'home-model.js';
var home = new Home(); 
Page({
  data: {
    active: 0,
    loadingHidden: true,
    menus:[
      {
        "name":"心理测评",
        "url":'../../imgs/index_icon/health.png'
      },
      {
        "name":"心理咨询",
        "url":'../../imgs/index_icon/consult.png'
      },
      {
        "name":"线上课程",
        "url":'../../imgs/index_icon/online_course.png'
      },
      {
        "name":"EAP",
        "url":'../../imgs/index_icon/eap.png'
      }
    ],
    cons: [
      [
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
      [
        {
          person_imgurl: '',
          expert: '抑郁症',
          desc: '抑郁症抑郁症',
          price: '200/h',
          form: '电话'
        },
        {
          person_imgurl: '',
          expert: '抑郁222症',
          desc: '抑郁症抑郁症',
          price: '100/h',
          form: '面谈'
        },
        {
          person_imgurl: '',
          expert: '1111',
          desc: '抑郁症抑郁症',
          price: '300/h',
          form: '网络'
        }
      ],
      [
        {
          intro: '治好你的抑郁症',
          course_imgurl: '',
          title: '心灵导师课程',
          subtitle: '学会微表情心灵管理'
        },
        {
          intro: '只要998',
          course_imgurl: '',
          title: '抑郁症',
          subtitle: '微表情心灵管理'
        }
      ],
      [
        {
          intro: 'EAP',
          course_imgurl: '',
          title: 'EAPEAPEAP',
          subtitle: '微表情EAP心灵管理'
        }
      ]
    ]
  },

  toggle:function(e){ 
    console.log('点击',e.currentTarget.dataset.index)
    this.setData({
      active:e.currentTarget.dataset.index,
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
  },

  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  }
})


