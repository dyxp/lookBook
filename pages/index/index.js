//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hasUserInfo: false,
    arr: [],
    article: [],
    books: [],
    hotSearch: [],
    colors: ['#f54d82', '#59b080', '#ec575e', '#9060e8', '#ded658']
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  authorAll() {
    wx.navigateTo({
      url: "/pages/authorAll/authorAll",
    })
  },
  author(e) {
    // authorDetail
    wx.navigateTo({
      url: "/pages/author/author",
    })
    app.globalData.authorDetail = e.currentTarget.dataset.name
  },
  lookBookclass: function(e) {
    app.globalData.currentClass = e.currentTarget.dataset.class
    wx.navigateTo({
      url: '/pages/class/class',
    })
  },

  bookDetail: function(e) {
    app.globalData.currentBookDetail = e.currentTarget.dataset.num;
    wx.navigateTo({
      url: '/pages/bookdetail/bookdetail',
    })
  },
  search() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  calssAll(){
    wx.navigateTo({
      url: "/pages/classAll/classAll",
    })
  },
  onLoad: function() {
    const _this = this;
    app.getBooks().then(res => {
      _this.setData({
        books: app.globalData.bookarr.slice(0, 6),
      })
    })
    app.getNames().then(res => {
      _this.setData({
        arr: app.globalData.namearr,
      })
    })
    app.getWriters().then(res => {
      _this.setData({
        article: app.globalData.writerarr,
      })
    })
    app.getHosters().then(res => {
      _this.setData({
        hotSearch: app.globalData.hosterarr,
      })
    })
    app.getUser().then(res => {
      _this.setData({
        person: app.globalData.users,
      })
    })

  }

})