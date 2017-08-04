// product.js
Page({
  data: {
    cateItems: [{
        cate_id: 1,
        cate_name: "小吃",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '奥尔良烤翅',
            image: "../../images/p1.png"
          },
          {
            child_id: 2,
            name: '奥尔良烤翅',
            image: "../../images/p1.png"
          },
          {
            child_id: 3,
            name: '奥尔良烤翅',
            image: "../../images/p1.png"
          },
          {
            child_id: 4,
            name: '奥尔良烤翅',
            image: "../../images/p1.png"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "水果",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 2,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 3,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 4,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 5,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 6,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 7,
            name: '西红柿',
            image: "../../images/p2.png"
          },
          {
            child_id: 8,
            name: '西红柿',
            image: "../../images/p2.png"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "早餐",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '豆腐块',
            image: "../../images/p3.png"
          },
          {
            child_id: 2,
            name: '豆腐块',
            image: "../../images/p3.png"
          },
          {
            child_id: 3,
            name: '豆腐块',
            image: "../../images/p3.png"
          },
          {
            child_id: 4,
            name: '豆腐块',
            image: "../../images/p3.png"
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: "甜品",
        ishaveChild: true,
        children: [{
            child_id: 1,
            name: '草莓冰淇淋',
            image: "../../images/p4.png"
          },
          {
            child_id: 2,
            name: '草莓冰淇淋',
            image: "../../images/p4.png"
          },
          {
            child_id: 3,
            name: '草莓冰淇淋',
            image: "../../images/p4.png"
          },
          {
            child_id: 4,
            name: '草莓冰淇淋',
            image: "../../images/p4.png"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "晚餐",
        ishaveChild: false,
        children: []
      }
    ],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {
    /* 设置标题 */
    wx.setNavigationBarTitle({
      title: '产品分类'
    })
  },
  switchRightTab: function (e) {
    // 获取 item 项的 id 和数组的下标值
    let id = e.currentTarget.dataset.id;
    let index = parseInt(e.currentTarget.dataset.index);
    // 把点击到的某一项，设为当前 index
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})