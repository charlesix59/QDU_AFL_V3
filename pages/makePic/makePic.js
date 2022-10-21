// pages/makePic/makePic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '请假',
    })
    wx.loadFontFace({
      family: 'handwrite',
      // source: 'https://636c-cloud-learning-4gj0t42b077a1542-1311865279.tcb.qcloud.la/handwrite.ttf?sign=00162f81d951257bd36544c5345487b3&t=1652280764',
      source: 'https://www.charlespro.xyz/static/resource/handwrite.ttf',
      success:(res)=>{
        console.log("success");
      },
      fail(err){
        console.log(err);
      },
    });
    this.setInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  setInfo(){
    this.setData({
      info:wx.getStorageSync('info')
    })
  }
})