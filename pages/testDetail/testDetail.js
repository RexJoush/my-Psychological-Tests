/*
 * @Author: bonny
 * @Date: 2020-07-02 21:26:38
 * @LastEditTime: 2020-07-02 22:31:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\pages\testDetail\testDetail.js
 */ 
// pages/testDetail/testDetail.js
import { TestDetail } from 'testDetail-model.js';
var testDetail=new TestDetail();  //实例化 home 的推荐页面
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
    testDetail.getTestDetail(options.test_id, (data) => {
      this.setData({
        detailImg: data.details_img_url,
      });
      console.log('res',data.details_img_url)
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