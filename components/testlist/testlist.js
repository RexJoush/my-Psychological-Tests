/*
 * @Author: bonny
 * @Date: 2020-07-02 20:15:54
 * @LastEditTime: 2020-07-12 13:12:17
 * @LastEditors: Bonny.meng
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\components\testlist\testlist.js
 */ 
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      testlist: {
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
      gotoConList() {
        wx.navigateTo({
          url: `../../pages/conDetail/conDetail?consultant_id=${this.properties.testlist.consultant_id}`,
        })
      },
    }
  })