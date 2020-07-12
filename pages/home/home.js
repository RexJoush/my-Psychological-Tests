/*
 * @Author: your name
 * @Date: 2020-06-20 16:23:01
 * @LastEditTime: 2020-07-12 12:27:14
 * @LastEditors: Bonny.meng
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\home\home.js
 */ 
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
    ]
  },

  toggle(e) { 
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
        bannerArr: data.data,
      });
    });

    //获得心理测评数据
    home.getPsyTestData((data) => {
      that.setData({
        psyTestData: data.data,
      });
    })

    //获得心理咨询数据
    home.getPsyCounseling((data) => {
      that.setData({
        psyCounseling: data.data,
      });
    })

    //获得线上课程数据
    home.getCourseData((data) => {
      that.setData({
        courseData: data.data,
      });
    })

    //获得EAP数据
    home.getEap((data) => {
      that.setData({
        eapData: data.data,
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


