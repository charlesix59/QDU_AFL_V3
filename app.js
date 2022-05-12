// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    wx.cloud.init({
      //云环境id
      env:'cloud-learning'
    })
  },
  globalData: {
    userInfo: null
  }
})
