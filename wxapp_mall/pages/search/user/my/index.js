Page({
  data: {
    personImg: '../../../images/my.jpg'
  },
  onLoad: function (options) {
    //Do some initialize when page load.
    this.getImg();
  },
  onReady: function () {
    //Do some when page ready.
  },
  onShow: function () {
    // 获取头像缓存
    this.getImg();
  },
  // 个人设置
  personaSettings: function () {
    wx.navigateTo({
      url: '/pages/user/user_info/index'
    })
  },
  getImg: function () {
    let that = this;
    var value = wx.getStorageSync('personImg');
    if (value) {
      wx.getStorage({
        key: 'personImg',
        success: function (res) {
          that.setData({
            personImg: res.data
          })
        }
      })
    }
  }
})