// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad(){
    const updateManager=wx.getUpdateManager();
    updateManager.onCheckForUpdate(function(res){
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function(){
      wx.showModal({
        content: '新版本已准备好，是否重启应用？',
        showCancel: true,
        title: '版本更新',
        success: (result) => {
          if(result.confirm){
            updateManager.applyUpdate();
          }
        },
      })
    })
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
