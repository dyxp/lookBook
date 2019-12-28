// pages/bookdetail/bookdetail.js
const app = getApp()
// const util = require('../../utils/util.js');
Page({

  data: {
    black: false,
    book: {},
    bookshelf: false,
    starNum: 4,
    listnum: "5",
    shareShow: false,
    shareImage: ["/images/friend.png", "/images/qqhome.png", "/images/wb.png", "/images/qq.png"],
    options: [{
        id: "0",
        path: "/images/blackheart.png",
        word: "收藏"
      },
      {
        id: "1",
        path: "/images/linkto.png",
        word: "分享"
      },
      {
        id: "2",
        path: "/images/bookin.png",
        word: "放入书架"
      }
    ],
    src: "/images/redheart.png"
  },
  buy(){
    wx.navigateTo({
      url: '/pages/shop/shop',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    const _this = this;
    app.getBooks().then(res => {
      _this.setData({
        book: app.globalData.bookarr[app.globalData.currentBookDetail],
        starNum: parseInt(app.globalData.bookarr[app.globalData.currentBookDetail].star),
      })
    })
  },

  changered(e) {
    const _this = this
    const linshi = this.data.options[0].path
    let a = e.currentTarget.dataset.num
    if (a == 0) {
      if (_this.data.black == true) {
        _this.setData({
          black: false,
        })
      } else {
        _this.setData({
          black: true,
        })
      }
    }
    if (a == 1) {
      _this.setData({
        shareShow: true,
      })
    } else if(a == 2) {
      _this.setData({
        shareShow: false,
        bookshelf: true,
      })
    }
  },
  close() {
    this.setData({
      shareShow: false,
    })
  },
  bookshelfok() {
    this.setData({
      bookshelf: false,
    })

},



/* 生命周期函数--监听页面初次渲染完成*/
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