// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  openPersonalInfo(){
    wx.navigateTo({
      url: '../setPersonalInfo/setPersonalInfo',
    })
  },
  openMakePic(){
    wx.navigateTo({
      url: '../makePic/makePic',
    })
  }
})
