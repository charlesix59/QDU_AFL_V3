const util = require('../../utils/util.js'); 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    days:[
      "周日",
      "周一",
      "周二",
      "周三",
      "周四",
      "周五",
      "周六"
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
    // console.log(this.data.info);
  },

  submit(e){
    var info=wx.getStorageSync('info');
    var days=this.data.days;
    //日期设置
    info.beginDate=e.detail.value.beginDate;
    info.beginTime=e.detail.value.beginTime;
    let beginDatetime=new Date(info.beginDate);
    info.beginDay=days[beginDatetime.getDay()];
    info.endDate=e.detail.value.endDate;
    info.endTime=e.detail.value.endTime;
    let endDatetime=new Date(info.endDate);
    info.endDay=days[endDatetime.getDay()];
    //信息储存
    console.log(info);
    wx.setStorageSync('info', info);
    this.setData({
      dateInfo:info
    });
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'提交成功',
    })
  },
  setDefaultDatetime(){
    let today = new Date();
    let info = wx.getStorageSync('info');
    let days=this.data.days;
    info.beginDate = info.endDate = util.formateDate(today);
    info.beginDay = info.endDay = days[today.getDay()];
    info.beginTime = "08:00";
    info.endTime = "22:00";
    wx.setStorageSync('info', info);
    this.setData({
      dateInfo:info
    });
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'提交成功',
    })
  },
  changeInfo(e){
    // console.log(e);
    const mkey = 'dateInfo.'+e.target.id;
    const mvalue = e.detail.value;
    this.setData({
      [mkey]:mvalue
    })
    console.log(this.data)
  }
})
