// pages/my/my.js
var httpsApi = "https://www.rexjoush.com";
var app = getApp();
Page({


  /**
   * 页面的初始数据
   */
  data: {
    unlogin: true,
    logined: false,
    // avatarUrl:
    // nickName:
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.checkSession({
      success () {
        //session_key 未过期，并且在本生命周期一直有效
        that.setData({
          unlogin: false,
          logined: true,
        })
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        console.log("fail");
        this.login() //重新登录
      }
    })
  },

  login: function () {
    console.log("aa");
    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: httpsApi,
          //   data: {
          //     code: res.code
          //   }
          // })
          console.log(res.code);
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
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