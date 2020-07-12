/*
 * @Author: your name
 * @Date: 2020-06-20 16:23:01
 * @LastEditTime: 2020-07-12 18:49:20
 * @LastEditors: Bonny.meng
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\home\home.js
 */ 
import { Discover } from 'discover-model.js';
var discover = new Discover(); 
Page({
  data: {
    active: 0,
    tabidx: 0,
    loadingHidden: true,
    allData: [],
    testData: [],
    cateData:[],
  },
  onLoad: function () {
    this._loadData();
  },
  onClick(e) {
    this.getByCategory(e.detail.name)
  },
  
  getByCategory:function(id,callback){
    var that = this
    discover.getByCategory(id,(data)=> {
      that.setData({
        cateData: data.data
      });
      callback&&callback(data);
      console.log('allData', data.data)
    });
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;

    // 获得分类
    discover.getCategoryList((data) => {
      that.setData({
        testData: data.data,
      });
      // 按分类获得测试
      that.getByCategory('all',(data)=>{
        that.setData({
          allData: data.data
        });
        callback&& callback();
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


