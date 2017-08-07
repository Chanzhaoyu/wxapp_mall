let li = [{
  index: '0',
  name: '赵小姐',
  tel: '15818350398',
  addre: '东莞市莞城学院路48号'
}, {
  index: '1',
  name: '陈先生',
  tel: '13169579266',
  addre: '深圳市罗湖区莲塘7巷903'
}, {
  index: '2',
  name: '左小姐',
  tel: '15012745480',
  addre: '深圳市南山区西丽珠光村'
}];

Page({
  data: {
    address: li
  },
  onload: function (options) {
    let flag = false;
    flag = options.flag;
    if (flag) {
      li.push({
        'index': index++,
        'name': options.name,
        'tel': options.tel,
        'addre': options.addrevalue
      })
      this.setData({
        address: li
      })
    }
  },
  toAddressEdit: function () {
    wx.navigateTo({
      url: '/pages/order/address_edit/index'
    })
  }
})