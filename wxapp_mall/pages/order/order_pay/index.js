let util = require('../../../utils/util.js');

Page({
  data: {
    orderStatus: '未付款',
    orderNum: '987159125472387',
    hasAddress: true,
    address: {}, //地址列表
    carts: [], // 购物车列表
    totalPrice: 0, // 总价，初始为0
    dateNow: ''
  },
  onShow: function () {
    let that = this;
    let value = wx.getStorageSync('proIntro');
    if (value) {
      wx.getStorage({
        key: 'proIntro',
        success: function (res) {
          that.setData({
            hasList: true,
            carts: res.data
          })
          that.getTotalPrice();
        }
      })
    }
    that.getDate();
    that.getAddress();
  },
  //当前时间
  getDate: function () {
    var now = new Date();

    var year = now.getFullYear(); //年
    var month = now.getMonth() + 1; //月
    var day = now.getDate(); //日

    var hh = now.getHours(); //时
    var mm = now.getMinutes(); //分
    var ss = now.getSeconds(); //秒

    var clock = year + "-";

    if (month < 10)
      clock += "0";

    clock += month + "-";

    if (day < 10)
      clock += "0";

    clock += day + " ";

    if (hh < 10)
      clock += "0";

    clock += hh + ":";
    if (mm < 10) clock += '0';
    clock += mm + ":";

    if (ss < 10) clock += '0';
    clock += ss;

    this.setData({
      dateNow: clock
    })
  },
  // 计算总价
  getTotalPrice: function () {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        total += carts[i].num * carts[i].price; // 所有价格加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
    });
  },
  // 编辑地址页
  editAddress: function () {
    wx.navigateTo({
      url: '/pages/order/address_edit/index'
    })
  },
  // 获取地址缓存
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