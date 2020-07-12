/*
 * @Description: 
 * @Autor: Bonny.meng
 * @Date: 2020-07-12 18:57:10
 * @LastEditors: Bonny.meng
 * @LastEditTime: 2020-07-12 18:58:36
 */ 
// components/findcard/findcard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    consultcard: {
      type: Object,
    }
  },

  observers: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    gotoFindList() {
      wx.navigateTo({
        url: `../../pages/musiclist/musiclist?playlistId=${this.properties.consultcard.test_id}`,
      })
    },
  }
})