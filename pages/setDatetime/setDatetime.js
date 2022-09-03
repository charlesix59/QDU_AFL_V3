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
    info:{
    },
    dateInfo:{
      beginDate:'选择开始日期',
      beginTime:'选择开始时间',
      beginDay:'开始时是周几',
      endDate:'选择结束日期',
      endTime:'选择结束时间',
      endDay:'结束是周几',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(wx.getStorageSync('info')){
      this.setData({
        info:wx.getStorageSync('info')
      })
    }
    console.log(this.data.info);
  },

  submit(e){
    var info=wx.getStorageSync('info');
    var days=this.data.days;
    info.address=e.detail.value.address;
    info.beginDate=e.detail.value.beginDate;
    info.beginTime=e.detail.value.beginTime;
    info.beginDay=days[e.detail.value.beginDay];
    info.endDate=e.detail.value.endDate;
    info.endTime=e.detail.value.endTime;
    info.endDay=days[e.detail.value.endDay];
    console.log(info);
    wx.setStorageSync('info', info);
    this.setData({
      dateInfo:info
    });
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'提交成功',
    })
  }
})