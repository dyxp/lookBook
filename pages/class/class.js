// pages/bookall/bookall.js
const app = getApp()
Page({
  data: {
    books: [],
    currentclass: ""
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function(options) {
    const _this = this;
    const currentClass = app.globalData.bookarr.filter(function(item) {
      return item.type == app.globalData.currentClass;
    })
    app.getNames().then(res => {
      _this.setData({
        arr: app.globalData.namearr,
      })
    })
    this.setData({
      books: currentClass,
      currentclass: app.globalData.currentClass
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})