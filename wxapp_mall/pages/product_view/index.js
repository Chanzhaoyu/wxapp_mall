const util = "../../utils/util.js";
Page({
  data: {
    pro: {},
    default_number: 1,
    toggle: false,
    colorValue: '#e64340',
  },
  onLoad: function () {
    this.setData({
      pro: {
        id: 1,
        title: '宏辉果蔬 苹果 烟台红富士 12个 单果约75mm 总重约2.1kg 新鲜水果',
        image: '../../images/pr1.jpg',
        num: 1,
        price: '36',
        oldPrice: '68',
        selected: true,
        repertory: 9,
        sales: 36,
        slideshow: [
          '../../images/pr1.jpg',
          '../../images/pr2.jpg',
          '../../images/pr3.jpg'
        ]
      }
    });
  },
  //添加数量
  addCount: function () {
    let num = this.data.default_number; //商品数
    let repertory = this.data.pro.repertory; // 库存
    num++;
    if (num > repertory) {
      num = readonly;
    }
    this.setData({
      default_number: num
    })
  },
  //减少数量
  reduceCount: function () {
    let num = this.data.default_number; //商品数
    num--;
    if (num <= 1) {
      num = 1;
    }
    this.setData({
      default_number: num
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
  // 前往购物车
  bindGoCart: function (event) {
    wx.switchTab({
      url: '/pages/cart/index'
    })
  },
  // 前往首页
  bindGoIndex: function (event) {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  // 返回顶部
  bindGoTop: function (event) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  // 添加商品到缓存
  goods_add_cart: function () {
    let proIntro = wx.getStorageSync('proIntro');
    let that = this;
    let total = that.data.default_number;
    let intro = that.data.pro;
    let cache = {
      id: intro.id,
      title: intro.title,
      image: intro.image,
      price: intro.price,
      num: total,
      selected: true
    };

    proIntro ? proIntro = proIntro : proIntro = [];
    proIntro.push(cache);

    wx.setStorage({
      key: "proIntro",
      data: proIntro
    });

    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        that.setData({
          toggle: false
        })
      }
    })
  }
})