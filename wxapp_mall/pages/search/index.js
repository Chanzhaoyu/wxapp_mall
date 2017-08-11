Page({
  data: {
    keyWord: ''
  },
  bindCon(e) {
    this.setData({
      keyWord: e.detail.value
    })
  },
  search(e) {
    var keyword = e.currentTarget.dataset.key;
    if (keyword == '') {
      wx.showModal({
        title: '提示',
        content: '请输入内容',
        showCancel: false
      })
    } else {
      console.log(`关键词：${e.currentTarget.dataset.key}`);
    }
  }
})