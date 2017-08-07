Page({
  data: {
    user: {}
  },
  onLoad: function () {
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
    } else {
      // 获取个人信息
      wx.getUserInfo({
        success: function (res) {
          // success
          that.setData({
            'user.name': res.userInfo.nickName,
            'user.thumb': res.userInfo.avatarUrl
          })
        },
        fail: function () {
          // fail
          console.log("获取失败！")
        },
        complete: function () {
          // complete
          console.log("获取用户信息完成！")
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