Page({
  data: {
    this_g_nav: 0
  },
  swichNav: function (e) {
    let that = this;
    var this_target = e.currentTarget.dataset.current;
    that.setData({
      this_g_nav: this_target
    })
  }
})