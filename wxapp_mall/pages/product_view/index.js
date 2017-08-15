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
    let that = this;
    let proIntro = wx.getStorageSync('proIntro'); //缓存
    let total = that.data.default_number; //选取的个数
    let intro = that.data.pro; //产品信息
    let cache = {}; //单个产品对象

    // 填充对象
    cache = {
      id: intro.id,
      title: intro.title,
      image: intro.image,
      price: intro.price,
      num: total,
      selected: true
    }

    // 判断有没有缓存
    if (proIntro) {
      let isExits = false;
      proIntro.forEach(function (element, index, arr) {
        //判断当前产品页产品 ID 是否存在于缓存中
        if (arr[index].id === cache.id) {
          isExits = true;
          arr[index].num = arr[index].num + cache.num;
          that.setCache('proIntro', proIntro);
        }
      })
      if (!isExits) {
        // 如果不存在相同产品，则直接在后面添加
        proIntro.push(cache);
        that.setCache('proIntro', proIntro);
      }
    } else {
      // 如果不存在缓存，则新建一个缓存
      proIntro = [];
      proIntro.push(cache);
      that.setCache('proIntro', proIntro);
    }

  },
  setCache: function (key, value) {
    let that = this;
    wx.setStorage({
      key: key,
      data: value,
      success: function () {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
        that.setData({
          toggle: false
        })
      }
    })
  }
})