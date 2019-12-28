// pages/bookall/bookall.js
const app = getApp()
Page({
  data: {
    books: [],
    moneyAll:""
  },

  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    const _this = this;
    const currentClass = app.globalData.bookarr.slice(0,3)
    this.setData({
      books: currentClass,
      moneyAll: parseInt(currentClass[0].money) + parseInt(currentClass[1].money) + parseInt(currentClass[2].money)
    })
    console.log(currentClass)
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

  }
})