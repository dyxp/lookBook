// pages/explore/explore.js
const app = getApp();
Page({

  data: {
    arr: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const _this = this;
    app.getBooks().then(res => {
      _this.setData({
        arr: app.globalData.bookarr[app.globalData.currentBook],
      })
    })
    // app.globalData.currentBook 

    // wx.getUserInfo({
    //   success: function(res) {
    //     wx.request({
    //       url: 'https://wujunhui.xyz/landreg',
    //       method: "get",
    //       data: {
    //         'name': res.userInfo.nickName,
    //         'theurl': res.userInfo.avatarUrl,
    //         'city': res.userInfo.city,
    //         'country': res.userInfo.country,
    //         'gender': res.userInfo.gender,
    //         "yourtelphone": '15037510203'
    //       },
    //       success: function(res) {
    //         console.log(res.data);
    //       }
    //     })
    //   }
    // })
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
  onHide: function() {},
  /* 生命周期函数--监听页面卸载*/
  onUnload: function() {},
  /* 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function() {},
  /* 页面上拉触底事件的处理函数*/
  onReachBottom: function() {},
  /*分享*/
  onShareAppMessage: function() {}
})