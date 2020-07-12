/*
 * @Description: 
 * @Autor: Bonny.meng
 * @Date: 2020-07-09 07:14:22
 * @LastEditors: Bonny.meng
 * @LastEditTime: 2020-07-12 13:23:46
 */ 

import { ConDetail } from 'conDetail-model.js';
var conDetail=new ConDetail();  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    console.log('options',options)
    conDetail.gotoConList(options.consultant_id, (res) => {
      this.setData({
        conData: res.data[0],
      });
      console.log('res',res.data[0])
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