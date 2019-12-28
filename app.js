//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.getUserInfo({
      success: function(res) {
        wx.request({
          url: 'https://wujunhui.xyz/personimages',
          method: "get",
          data: {
            'name': res.userInfo.nickName,
            'theurl': res.userInfo.avatarUrl,
            'city': res.userInfo.city,
            'country': res.userInfo.country,
            'gender': res.userInfo.gender,
            "yourtelphone": '15037510203'
          },
          success: function(res) {
            console.log(res.data);
          }
        })
      }
    })
  },
  getBooks() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getbooks',
        success: function (res) {
          that.globalData.bookarr = res.data
          resolve(res.data)
          // console.log(res.data)
        }
      })
    })
  },
  getNames() {
    let that = this;
    return new Promise((resolve, reject) => {   
      wx.request({
        url: 'https://wujunhui.xyz/getfenleilist',
        success: function (res) {
          that.globalData.namearr = res.data
          resolve(res.data)
        }
      })
    })
  },
  getWriters() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getwriters',
        success: function (res) {
          that.globalData.writerarr = res.data
          resolve(res.data)
        }
      })
    })
  },
  getHosters() {
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/gethostser',
        success: function (res) {
          that.globalData.hosterarr = res.data
          resolve(res.data)
        }
      })
    })
  },
  getUser(){
    let that = this;
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/personimages',
        data:{
          "yourtelphone": '15037510203'
        },
        success: function (res) {
          that.globalData.users = res.data
          resolve(res.data)
        } 
      })
    })
  },
  globalData: {
    bookarr: [],
    writerarr:[],
    namearr:[],
    hosterarr:[],
    currentBook:"",
    currentBookDetail:"",
    currentClass:"",
    authorDetail:""
  }
})