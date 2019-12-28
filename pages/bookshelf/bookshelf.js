// pages/bookshelf/bookshelf.js
const app = getApp();
Page({

  data: {
    book1: [],
    book2: [],
  },
  bookDetail: function (e) {
    app.globalData.currentBookDetail = e.currentTarget.dataset.num;
    wx.navigateTo({
      url: '/pages/bookdetail/bookdetail',
    })
  },
  bookDetail1: function (e) {
    app.globalData.currentBookDetail = e.currentTarget.dataset.num+3;
    wx.navigateTo({
      url: '/pages/bookdetail/bookdetail',
    })
  },
  /* 生命周期函数--监听页面加载*/
  onLoad: function (options) {
    const _this = this;
    app.getBooks().then(res => {
      _this.setData({
        book1: app.globalData.bookarr.slice(0, 3),
        book2: app.globalData.bookarr.slice(3),
      })
    })
  },

  /*生命周期函数--监听页面初次渲染完成*/
  onReady: function () {},

  /* 生命周期函数--监听页面显示*/
  onShow: function () {},

  /* 生命周期函数--监听页面隐藏*/
  onHide: function () {},

  /* 生命周期函数--监听页面卸载*/
  onUnload: function () { },

  /*页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {},

  /* 页面上拉触底事件的处理函数*/
  onReachBottom: function () { },

  /* 用户点击右上角分享*/
  onShareAppMessage: function () {}
})