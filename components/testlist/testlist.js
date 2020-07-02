/*
 * @Author: bonny
 * @Date: 2020-07-02 20:15:54
 * @LastEditTime: 2020-07-02 22:11:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\components\testlist\testlist.js
 */ 
// components/playlist/playlist.js
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
      gotoTestList() {
        wx.navigateTo({
          url: `../../pages/musiclist/musiclist?testId=${this.properties.testlist.test_id}`,
        })
      },
    }
  })