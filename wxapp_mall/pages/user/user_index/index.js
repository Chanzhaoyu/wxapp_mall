Page({
  data: {
    user: {}
  },
  onShow: function () {
    let that = this;
    // 如果有缓存则获取缓存
    var value = wx.getStorageSync('user');
    if (value) {
      wx.getStorage({
        key: 'user',
        success: function (res) {
          that.setData({
            user: res.data
          })
        }
      })
    }
  },
  personaSettings() {
    wx.navigateTo({
      url: '/pages/user/user_info/index'
    })
  }
})