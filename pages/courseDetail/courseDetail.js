/*
 * @Description: 
 * @Autor: Bonny.meng
 * @Date: 2020-07-09 07:14:22
 * @LastEditors: Bonny.meng
 * @LastEditTime: 2020-07-12 12:51:36
 */ 

import { courseDetail } from 'courseDetail-model.js';
var courseDetail=new CourseDetail();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailImg: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    console.log('options',options)
    testDetail.getTestDetail(options.test_id, (res) => {
      this.setData({
        detailImg: res.data[0].details_img_url,
      });
      console.log('res',res.data[0].details_img_url)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})