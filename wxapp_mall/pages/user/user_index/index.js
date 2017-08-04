Page({
  data: {
    user: {}
  },
  onLoad: function () {
    let that = this;
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
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'user',
      success: function (res) {
        that.setData({
          user: res.data
        })
      }
    })
  },
  personaSettings() {
    wx.navigateTo({
      url: '/pages/user/user_info/index'
    })
  }
})