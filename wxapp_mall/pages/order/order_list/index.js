Page({
  data: {
    wHeight: '',
    currentTab: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wHeight: res.windowHeight
        })
      }
    })
  },
  /*** 滑动切换tab */
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  /*** 点击tab切换 */
  swichNav: function (e) {
    var that = this;
    if (that.data.currentTab != e.target.dataset.current) {
      that.setData({
        currentTab: e.target.dataset.current
      })
    } else {
      return false;
    }
  }
})