Page({
  data: {
    hasPro: true,
    cart_list: [],
    all_g_number: 0,
    all_g_price: 0,
    all_g_yunfei: 0,
    this_check_val: [],
    all_is_checked: false,
    btn_mall_sure_disabled: false,
    glo_is_load: true
  },
  //减少数量
  bind_cart_number_jian: function (e) {
    var that = this
    var this_cart_id = e.currentTarget.id
    var datas = that.data.cart_list
    for (var i = 0; i < datas.length; i++) {
      if (datas[i].id == this_cart_id) {
        if (datas[i].goods_number > 1) {
          datas[i].goods_number = parseInt(datas[i].goods_number) - 1
        } else {
          datas[i].goods_number = 1
        }
        //更新购物车数量
        
      }
    }
  },
  //增加数量
  bind_cart_number_jia: function (e) {
    var that = this
    var this_cart_id = e.currentTarget.id
    var datas = that.data.cart_list
    for (var i = 0; i < datas.length; i++) {
      if (datas[i].id == this_cart_id) {
        datas[i].goods_number = parseInt(datas[i].goods_number) + 1
        //更新购物车数量

      }
    }
  },
  //删除购物车
  bind_delete_cart: function () {
    var that = this
    if (that.data.this_check_val.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请选择要删除的商品',
        showCancel: false,
      })
      return false;
    }

    wx.showModal({
      title: '提示',
      content: "确认要删除已购商品吗?",
      success: function (res) {
        if (res.confirm == true) {
          //删除产品操作
        }
      }
    })
  },
  mallsure: function () {
    wx.navigateTo({
      url: '/pages/order/order_pay/index'
    })
  }
})