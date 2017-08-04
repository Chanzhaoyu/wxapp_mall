Page({
  data: {
    address: [{
      name: '赵小姐',
      phone: '15818350398',
      add: '东莞市莞城学院路48号'
    }, {
      name: '陈先生',
      phone: '13169579266',
      add: '深圳市罗湖区莲塘7巷903'
    }, {
      name: '左小姐',
      phone: '15012745480',
      add: '深圳市南山区西丽珠光村'
    }]
  },
  onLoad: function (options) {
    //Do some initialize when page load.

  },
  onReady: function () {
    //Do some when page ready.

  },
  onShow: function () {
    //Do some when page show.

  },
  onHide: function () {
    //Do some when page hide.

  },
  onUnload: function () {
    //Do some when page unload.

  },
  onPullDownRefresh: function () {
    //Do some when page pull down.

  },
  toAddressEdit: function () {
    wx.navigateTo({
      url: '/pages/order/address_edit/index'
    })
  }
})