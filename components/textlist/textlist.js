/*
 * @Author: bonny
 * @Date: 2020-07-02 20:15:54
 * @LastEditTime: 2020-07-02 21:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\components\testlist\testlist.js
 */ 
// components/textlist/textlist.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      textlist: {
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
      gotoTextList() {
        wx.navigateTo({
          url: `../../pages/testDetail/testDetail?test_id=${this.properties.textlist.test_id}`,
        })
      },
    }
  })