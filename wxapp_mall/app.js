App({
  onLaunch: function () {
    let voucher = {};
    let userInfo = wx.getStorageSync('user');
    // wx.getExtConfig({
    //   success: function (res) {
    //     voucher = {
    //       wxID: res.extConfig.wxid,
    //       appId: res.extConfig.appid,
    //       cpID: res.extConfig.cpid,
    //       appSecret: res.extConfig.appSecret
    //     }
    //   }
    // });
    // // 微信登录
    // wx.login({
    //   success: function (res) {
    //     if (res.code) {
    //       wx.request({
    //         url: 'https://xcx.mf1288.com/PayFor.ashx?opt=getopenid&code=' + res.code + "&wxID=" + voucher.wxID + '&appID=' + voucher.appId + "&cpID=" + voucher.cpID + '&AppSecret=' + voucher.appSecret,
    //         method: 'POST',
    //         success: function (res) {
    //           wx.setStorage({
    //             key: 'openId',
    //             data: res.data.error[0].openid
    //           })
    //         }
    //       })
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // });
    // 获取个人信息
    if (!userInfo) {
      wx.getUserInfo({
        success: function (res) {
          let user = {};
          user = {
            thumb: res.userInfo.avatarUrl,
            name: res.userInfo.nickName,
            phone: ''
          }
          wx.setStorage({
            key: 'user',
            data: user
          })
        }
      })
    }
  },
  globalData: {}
})