// pages/about/about.js
var util = require('../../utils/util.js');
Page({
  data: {
    cinfo: [],
    cinfos: [],
    color: ''
  },
  onLoad: function (options) {
    // 公司资料
    var that = this
    util.getExtConfigs(function (extConfig) {
      if (extConfig == null || extConfig.length <= 0) {
        return;
      }
      that.setData({
        color: extConfig.colorID
      });
      var url = "https://xcx.mf1288.com/handler.aspx?opt=getAbout&wxID=" + extConfig.wxid + "&appID=" + extConfig.appid + "&cpID=" + extConfig.cpid;
      util.getCommand(url, function (res) {
        that.setData({
          cinfo: res.success
        });
        if (res.success[0].atTitle != "" && res.success[0].atTitle != null) {
          /* 设置标题 */
          wx.setNavigationBarTitle({
            title: res.success[0].atTitle
          })
        }
      });

      //获取联系人
      var url = "https://xcx.mf1288.com/handler.aspx?opt=getContact&wxID=" + extConfig.wxid + "&appID=" + extConfig.appid + "&cpID=" + extConfig.cpid;
      util.getCommand(url, function (res) {
        that.setData({
          cinfos: res.success
        });
      });
    });

  },

  // 拨打电话
  makePhone: function (options) {
    wx.makePhoneCall({
      phoneNumber: options.target.dataset.phone,
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },

  //打开地图
  viewPostion: function(){
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude
        })
      },
    })
  }
})