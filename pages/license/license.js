const app = getApp()
const util = require('../../utils/util.js'); 

Page({
  data: {
    isPageOne:true,
    datetime:JSON.stringify(new Date()),
    info:{
      name:"某某某",
      number:"12345678",
      teacher:"勾勾苟",
      beginTime:"01-01 00:00",
      endTime:"02-02 02:02",
      collage:"文学与新闻传播学院",
      class:"20汉语言文学",
      dormitory:"浮山校区滢园11号楼4单元514"
    },
    startPoint : 0, //记录滑动的初始位置
    slipFlag : false, //定义 滑动事件 节流阀, 防止一次滑动触发多次滑动事件
  },
  onLoad(){
    let info = wx.getStorageSync('info');
    info.beginDate=info.beginDate.substr(5);
    info.endDate=info.endDate.substr(5);
    console.log(info)
    this.setData({
      info:info
    })
    this.notification();
  },
  openPersonalInfo(){
    wx.navigateTo({
      url: '../setPersonalInfo/setPersonalInfo',
    })
  },
  myTouchStart(e){
    //开启滑动事件
    this.data.slipFlag = true
    //记录触摸点的坐标信息
    this.data.startPoint = e.touches[0]
  },
  myTouchMove(e) {
    if (((this.data.startPoint.clientX - e.touches[e.touches.length - 1].clientX) > 80) && this.data.slipFlag) {
        this.setData({
          isPageOne:false
        })
        this.data.slipFlag = false
        return
    } else if (((this.data.startPoint.clientX - e.touches[e.touches.length - 1].clientX) < -80) && this.data.slipFlag) {
        // console.log("右滑事件");
        this.setData({
          isPageOne:true
        })
        this.data.slipFlag = false
        return
    }
  },
  notification: function () {
    let _this = this;
    let time = time;
    _this.data.setInter = setInterval(function () {
       _this.setData({
        datetime: util.formatTime(new Date())
      });    
    }, 1000); 
    // 一秒打印一次
    console.log(time);
  },
})
