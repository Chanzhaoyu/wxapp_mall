Page({
  data: {
    array: ['男', '女'],
    img: '../../../images/my.jpg'
  },
  onLoad: function () {
    let that = this;
    // 获取头像缓存
    var value = wx.getStorageSync('personImg');
    if (value) {
      wx.getStorage({
        key: 'personImg',
        success: function (res) {
          that.setData({
            img: res.data
          })
        }
      })
    }
  },
  // 选取头像
  choosePic: function () {
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 指定原图或者压缩图
      sourceType: ['album'], // 指定图片来源
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.setStorage({
          key: "personImg",
          data: tempFilePaths
        });
        that.setData({
          img: tempFilePaths
        })
      }
    })
  },
  // 性别选取
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }
})