let address = require('../../../utils/city.js');
let util = require('../../../utils/util.js');

Page({
  data: {
    addressMenuIsShow: false,
    value: [0, 0, 0],
    provinces: [],
    citys: [],
    areas: [],
    addressInfo: {}
  },
  onReady: function (options) {

  },
  onLoad: function (options) {
    let id = address.provinces[0].id;
    let that = this;
    let num = options.aId;
    util.getCache('addressValue', function (res) {
      console.log(res);
      that.setData({
        addressInfo: res
      })
    })
    this.setData({
      provinces: address.provinces,
      citys: address.citys[id],
      areas: address.areas[address.citys[id][0].id],
    })
  },
  selectArea: function (e) {
    this.setData({
      addressMenuIsShow: true
    })
  },
  // 点击地区选择取消按钮
  cityCancel: function (e) {
    this.setData({
      addressMenuIsShow: false
    })
  },
  // 点击地区选择确定按钮
  citySure: function (e) {
    var that = this
    var city = that.data.city
    var value = that.data.value
    // 将选择的城市信息显示到输入框
    var areaInfo = that.data.provinces[value[0]].name + that.data.citys[value[1]].name + that.data.areas[value[2]].name
    that.setData({
      areaInfo: areaInfo,
      addressMenuIsShow: false,
      'addressInfo.area': areaInfo
    })
  },
  // 处理省市县联动逻辑
  cityChange: function (e) {
    var value = e.detail.value
    var provinces = this.data.provinces
    var citys = this.data.citys
    var areas = this.data.areas
    var provinceNum = value[0]
    var cityNum = value[1]
    var countyNum = value[2]
    // 如果省份选择项和之前不一样，表示滑动了省份，此时市默认是省的第一组数据，
    if (this.data.value[0] != provinceNum) {
      var id = provinces[provinceNum].id
      this.setData({
        value: [provinceNum, 0, 0],
        citys: address.citys[id],
        areas: address.areas[address.citys[id][0].id],
      })
    } else if (this.data.value[1] != cityNum) {
      // 滑动选择了第二项数据，即市，此时区显示省市对应的第一组数据
      var id = citys[cityNum].id
      this.setData({
        value: [provinceNum, cityNum, 0],
        areas: address.areas[citys[cityNum].id],
      })
    } else {
      // 滑动选择了区
      this.setData({
        value: [provinceNum, cityNum, countyNum]
      })
    }
  },
  bindName: function (e) {
    this.setData({
      'addressInfo.name': e.detail.value
    })
  },
  bindTel: function (e) {
    this.setData({
      'addressInfo.tel': e.detail.value
    })
  },
  bindIntro: function (e) {
    this.setData({
      'addressInfo.addre': e.detail.value
    });
  },
  formSubmit: function (e) {
    let that = this;
    let wran = '';
    let flag = false;
    if (!that.data.addressInfo.name) {
      wran = '请填写联系人';
    } else if (!that.data.addressInfo.tel) {
      wran = '请填写手机号码';
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(that.data.addressInfo.tel))) {
      wran = '手机号码格式不正确';
    } else if (!that.data.addressInfo.area) {
      wran = '请选择地区';
    } else if (!that.data.addressInfo.addre) {
      wran = '请填写详细地址';
    } else {
      flag = true;
      wx.setStorage({
        key: 'addressValue',
        data: that.data.addressInfo,
        success() {
          wx.showLoading({
            title: '保存中...',
          })
          setTimeout(function () {
            wx.hideLoading();
            wx.navigateBack();
          }, 2000)
        }
      })
    }
    if (flag == false) {
      wx.showModal({
        title: '提示',
        content: wran,
        showCancel: false
      })
    }
  }
})