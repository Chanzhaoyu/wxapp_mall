var util = require('../../utils/util.js');
Page({
  data: {
    slider: [
      '../../images/b1.png',
      '../../images/b2.png',
      '../../images/b3.png'
    ],
    color: '16',
    colorValue: '#e64340'
  },
  onLoad: function (options) {

  },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/index'
    })
  }
})