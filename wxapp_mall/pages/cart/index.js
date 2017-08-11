Page({
  data: {
    hasList: false, // 列表是否有数据
    carts: [], // 购物车列表
    totalPrice: 0, // 总价，初始为0
    totalNum: 0, // 总数量，初始为0
    selectAllStatus: true, // 全选状态，默认全选
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
  },
  // 选择事件
  selectList: function (e) {
    const index = e.currentTarget.dataset.index; // 获取data- 传进来的index
    let carts = this.data.carts; // 获取购物车列表
    const selected = carts[index].selected; // 获取当前商品的选中状态
    carts[index].selected = !selected; // 改变状态
    this.setData({
      carts: carts,
      selectAllStatus: false
    });
    this.getTotalPrice();
    this.updataCache();
  },
  // 全选事件
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus; // 是否全选状态
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus; // 改变所有商品状态
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
    this.updataCache();
  },
  // 增加数量
  addCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
    this.updataCache();
  },
  // 减少数量
  minusCount: function (e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
    this.updataCache();
  },
  //判断购物车有没有产品
  cartLength: function () {
    let carts = this.data.carts;
    if (!carts.length) {
      this.setData({
        hasList: false // 修改标识为false，显示购物车为空页面
      });
    }
  },
  // 删除商品
  deleteList: function (e) {
    let that = this;
    let carts = this.data.carts;
    const index = e.currentTarget.dataset.index;
    wx.showModal({
      title: '提示',
      content: '确定是删除选中商品？',
      success: function (res) {
        if (res.confirm) {
          carts.splice(index, 1);
        }
        that.setData({
          carts: carts
        });
        that.getTotalPrice();
        that.cartLength();
        that.updataCache();
      }
    })
  },
  // 计算总价
  getTotalPrice: function () {
    let carts = this.data.carts; // 获取购物车列表
    let total = 0;
    let num = 0;
    for (let i = 0; i < carts.length; i++) { // 循环列表得到每个数据
      if (carts[i].selected) { // 判断选中才会计算价格
        total += carts[i].num * carts[i].price; // 所有价格加起来
        num += carts[i].num; //所有商品加起来
      }
    }
    this.setData({ // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2),
      totalNum: num
    });
  },
  // 更新缓存
  updataCache: function () {
    let carts = this.data.carts; //获取购物车列表
    let crtList = wx.getStorageSync('proIntro');
    if (crtList) {
      wx.setStorage({
        key: "proIntro",
        data: carts
      });
    }
  },
  // 结算跳转
  mallsure: function () {
    wx.navigateTo({
      url: '/pages/order/order_pay/index'
    })
  }
})