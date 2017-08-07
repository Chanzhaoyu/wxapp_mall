let util = require('../../../utils/util.js');

Page({
  data: {
    orderStatus: '未付款',
    orderNum: '987159125472387',
    hasAddress: true,
    address: {}
  },
  onLoad: function () {
    this.getAddress();
  },
  onShow: function(){
    this.getAddress();
  },
  editAddress: function () {
    wx.navigateTo({
      url: '/pages/order/address_edit/index'
    })
  },
  getAddress: function () {
    let that = this;
    util.getCache('addressValue', function (res) {
      that.setData({
        hasAddress: false,
        address: res
      })
    })
  }
})