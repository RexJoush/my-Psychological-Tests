import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, WebView } from "@tarojs/components"
// import { AtList, AtListItem, AtDivider  }from 'taro-ui'
import './index.scss'

// https://www.xinlitongji.com/api/appLogin?authCode=RYRtTMIbPqS9nnHP2y8qnF9x
// &userName=Bonny&sex=%E7%94%B7&country=Switzerland&province=Zurich&userId=oddSY5Jqvc67xP2gBVuJQVASn4JA



const threeurl = 'https://www.xinlitongji.com/api/appLogin'
export default class TestIndex extends Component {
  constructor () {
    super(...arguments)
    this.state ={
      htmlUrl: 'https://www.xinlitongji.com/api/appLogin',
      src: ''
    }
  }

  render() {
    const { src } = this.state
    return(
      <View>
        <WebView src={src} onMessage={this.handleMessage} />
      </View>
    )
  }
  componentWillMount () {
    this.getTestHtml()
  }
  getTestHtml()  {
    const openId = Taro.getStorageSync('openId')
    let userInfo = Taro.getStorageSync('userInfo')
    let authcode = 'RYRtTMIbPqS9nnHP2y8qnF9x'
    let sexName = '未知'
    if(userInfo.gender == 1) {
      sexName = '男'
    }else if(userInfo.gender == 2) {
      sexName = '女'
    }
    this.setState({
      src:`${this.state.htmlUrl}?authCode=${authcode}&userId=${openId}&userName=${userInfo.nickName}&sex=${sexName}&country=${userInfo.country}&province=${userInfo.province}`
    },()=> {
      console.log('src',this.state.src)
    })
    console.log('PARAMS',userInfo, authcode, openId)
    wx.cloud.callFunction({
      name: 'threeurl',
      data: {
        url: '/appLogin',
        'authCode': authcode,
        'userId': openId,
        'userName': userInfo.nickName,
        'sex': sexName,
        'country': userInfo.country,
        'province': userInfo.province
      },
      success: (res) => {
        console.log('html', res)
      }
    })
  // Taro.request({
  //   url: threeurl,
  //   data: {
  //     'authCode': authcode,
  //     'uId': openId,
  //     'userName': userInfo.nickName,
  //     'sex': sexName,
  //     'country': userInfo.country,
  //     'province': userInfo.province
  //   }
  // }).then((res) => {
  //   console.log('html', res)
  // })
  }
}