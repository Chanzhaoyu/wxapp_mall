function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function splitParams(str) {
  return str[0];
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//网络请求
function request(parameters = "", success, method = "GET", header = {}) {
  wx.request({
    url: config.BaseURL + (method == "GET" ? "?" : "") + parameters,
    data: {},
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: header ? header : "application/json", // 设置请求的 header
    success: function (res) {
      console.log(res);
      success(res);
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}

//成功提示
function showSuccess(title = "成功啦", duration = 2500) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: (duration <= 0) ? 2500 : duration
  });
}
//loading提示
function showLoading(title = "请稍后", duration = 5000) {
  wx.showToast({
    title: title,
    icon: 'loading',
    duration: (duration <= 0) ? 5000 : duration
  });
}
//隐藏提示框
function hideToast() {
  wx.hideToast();
}

function getExtConfigs(cb) {
  wx.getExtConfig({
    success: function (res) {
      cb(res.extConfig);
    }
  })
}
//显示带取消按钮的消息提示框
function alertViewWithCancel(title = "提示", content = "消息提示", confirm, showCancel = "true") {
  wx.showModal({
    title: title,
    content: content,
    showCancel: showCancel,
    success: function (res) {
      if (res.confirm) {
        confirm();
      }
    }
  });
}
//显示不取消按钮的消息提示框
function alertView(title = "提示", content = "消息提示", confirm) {
  alertViewWithCancel(title, content, confirm, false);
}

//拨打电话
function makePhone(num) {
  wx.makePhoneCall({
    phoneNumber: num,
    success: function (res) {
      console.log('电话拨打成功');
    },
    fail: function (res) {
      console.log('电话拨打失败');
    }
  })
}

function getCommand(BaseURL, success) {
  wx.request({
    url: BaseURL,
    data: {},
    method: "GET", // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: {
      'content-Type': 'application/json'
    }, // 设置请求的 header
    success: function (res) {
      if (res.statusCode == 200 && res.data != "") {
        success(res.data);
      }
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}
//查看位置
function viewMap(lat, lon, scale = '28') {
  wx.openLocation({
    latitude: lat,
    longitude: lon,
    scale: scale
  })
}

// 获取缓存
function getCache(key, success) {
  let value = wx.getStorageSync(key);
  if (value) {
    wx.getStorage({
      key: key,
      success: function (res) {
        success(res.data);
      }
    })
  }
}

module.exports = {
  formatTime: formatTime,
  request: request,
  showSuccess: showSuccess,
  showLoading: showLoading,
  hideToast: hideToast,
  alertViewWithCancel: alertViewWithCancel,
  alertView: alertView,
  makePhone: makePhone,
  viewMap: viewMap,
  splitParams: splitParams,
  getExtConfigs: getExtConfigs,
  getCommand: getCommand,
  getCache: getCache
}