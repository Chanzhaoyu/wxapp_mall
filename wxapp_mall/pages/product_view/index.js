const util = "../../utils/util.js";
Page({
  data: {
    slider: [
      '../../images/pr1.jpg',
      '../../images/pr2.jpg',
      '../../images/pr3.jpg'
    ],
    phone: '',
    cart_default_number: 1,
    toggle: false,
    colorValue: '#e64340',
  },
  onReady: function () {
    let that = this;
    var value = wx.getStorageSync('user');
    if (value) {
      wx.getStorage({
        key: 'user',
        success: function (res) {
          that.setData({
            phone: res.data.phone
          })
        }
      })
    }
  },
  num: 1,
  makePhone: function (e) {
    var num = e.currentTarget.dataset.num;
    wx.makePhoneCall({
      phoneNumber: num,
      success: function (res) {
        console.log('电话拨打成功');
      },
      fail: function (res) {
        console.log('电话拨打失败');
      }
    })
  },
  //显示加入购物车
  showCartBox: function () {
    this.setData({
      toggle: true
    })
  },
  //隐藏加入购物车
  hideCartBox: function () {
    this.setData({
      toggle: false
    })
  },
  // 添加数目
  addCount: function () {
    var that = this
    var this_default_number = parseInt(that.data.cart_default_number)
    that.setData({
      cart_default_number: this_default_number + 1
    })
  },
  // 减少数目
  reduceCount: function () {
    var that = this
    var this_default_number = parseInt(that.data.cart_default_number)
    if (this_default_number > 1) {
      that.setData({
        cart_default_number: this_default_number - 1
      })
    } else {
      that.setData({
        cart_default_number: 1
      })
    }
  },
  //加入购物车
  goods_add_cart: function () {
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000,
      mask: true
    });
    that.setData({
      btn_add_cart_disabled: true
    });
  },
  bindGoCart: function (event) {
    wx.switchTab({
      url: '/pages/cart/index'
    })
  },
  bindGoIndex: function (event) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  bindGoTop: function (event) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  }
})