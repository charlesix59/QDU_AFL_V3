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
  openSetDatetime(){
    wx.navigateTo({
      url: '../setDatetime/setDatetime',
    })
  },
  openMakePic(){
    wx.navigateTo({
      url: '../makePic/makePic',
    })
  },
  openReadme(){
    wx.navigateTo({
      url: '../readme/readme',
    })
  },
  openLicense(){
    wx.navigateTo({
      url: '../license/license',
    })
  }
})
