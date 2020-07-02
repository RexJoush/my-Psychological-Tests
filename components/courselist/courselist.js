/*
 * @Author: bonny
 * @Date: 2020-07-02 20:15:54
 * @LastEditTime: 2020-07-02 20:49:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-Psychological-Tests\components\testlist\testlist.js
 */ 
// components/courselist/courselist.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      courselist: {
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
      gotoCourseList() {
        wx.navigateTo({
          url: `../../pages/courselist/courselist?courselistId=${this.properties.courselist.consultant_id}`,
        })
      },
    }
  })