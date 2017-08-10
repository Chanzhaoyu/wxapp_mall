Page({
  data: {
    user: {
      thumb: '',
      name: '',
      phone: ''
    }
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
    } else {
      
      // 获取个人信息
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            'user.name': res.userInfo.nickName,
            'user.thumb': res.userInfo.avatarUrl
          })
        }
      })
    }
  },
  formSubmit: function () {
    var self = this;
    if (self.data.user.name && self.data.user.phone) {
      wx.setStorage({
        key: 'user',
        data: self.data.user,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
  bindPhoto(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'], // 指定原图或者压缩图
      sourceType: ['album'], // 指定图片来源
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          'user.thumb': tempFilePaths
        });
      }
    })
  },
  bindName(e) {
    this.setData({
      'user.name': e.detail.value
    })
  },
  bindPhone(e) {
    this.setData({
      'user.phone': e.detail.value
    })
  }
})