// pages/contact/contact.js
Page({
  data: {
    companyInfo: {
      info: '深圳市天助人和信息技术有限公司',
      person: '陈先生',
      tell: '020-00000000',
      mobile: '13169579266',
      email: '790348264@qq.com',
      address: '深圳市南山区深圳湾生态科技园5栋C座10F'
    },
    lon: 113.952510,
    lat: 22.527310,
    markers: [{
      id: 0,
      iconPath: '/static/mark.png',
      latitude: 22.527310,
      longitude: 113.952510,
      width: 48,
      height: 48,
      callout: {
        content: '深圳市天助人和信息技术有限公司',
        borderRadius: 3,
        padding: 4,
        boxShadow: '0 0 12px rgba(0,0,0,.2)'
      }
    }]
  },
  makePhone: function (e) {
    let nun = e.currentTarget.dataset.tell;
    wx.makePhoneCall({
      phoneNumber: nun
    })
  }
})