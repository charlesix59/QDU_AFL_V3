// pages/setPersonalInfo/setPersonalInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    days:[
      "周一",
      "周二",
      "周三",
      "周四",
      "周五",
      "周六",
      "周日"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  submit(e){
    var info={};
    var days=this.data.days;
    info.name=e.detail.value.name;
    info.sclass=e.detail.value.class;
    info.tname=e.detail.value.tname;
    info.tel=e.detail.value.tel;
    info.address=e.detail.value.address;
    info.beginDate=e.detail.value.beginDate;
    info.beginTime=e.detail.value.beginTime;
    info.beginDay=days[e.detail.value.beginDay];
    info.endDate=e.detail.value.endDate;
    info.endTime=e.detail.value.endTime;
    info.endDay=days[e.detail.value.endDay];
    console.log(info);
    wx.setStorageSync('info', info);
  }
})