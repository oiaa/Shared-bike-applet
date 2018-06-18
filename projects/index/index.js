// projects/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // latitude: "45.75",
    // longitude: "126.63"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindcontroltap: function(e) {
    switch(e.controlId) {
      case 1 :
        this.map.moveToLocation()
      break;
      case 2:
        if(this.timer){
          wx.navigateBack({
            delta: 1
          })
        }else{
          wx.scanCode({
            success: (res) => {
              wx.showLoading({
                title: '正在获取僵尸大脑',
              });
              wx.request({
                url: 'https://easy-mock.com/mock/5b1f9fd046008562d45ecfae/test/password#!method=get',
                success: (res) => {
                  wx.hideLoading();
                  wx.redirectTo({
                    url: '../scanCode/scanCode?pass=' + res.data.data.password + '&num=' + res.data.data.number,
                  })
                }
              })
            }
          })  
        }
      break;
      case 3:
        wx.redirectTo({
          url: '../warn/warn',
        })

        
    }
  },

  onLoad: function (options) {
    this.timer = options.timer;
    this.map = wx.createMapContext("ofomap")
    //获取地理位置
    wx.getLocation({
      //箭头函数指向前作用域的this
      success: (res)=> {  
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
    }),
    //获取设备信息
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          controls: [{
            id: 1,
            iconPath: "/images/loaction.png",
            position:{
              width: "50",
              height: "50",
              left: "20",
              top: res.windowHeight-80
            },
            clickable: true
          },{
            id: 2,
            iconPath: "/images/use.png",
            position: {
              width: "90",
              height: "90",
              left: res.windowWidth/2 - 45,
              top: res.windowHeight - 100
            },
            clickable: true
            }, {
              id: 3,
              iconPath: "/images/warn.png",
              position: {
                width: "50",
                height: "50",
                left: res.windowWidth - 70,
                top: res.windowHeight - 80
              },
              clickable: true
          }, {
            id: 4,
            iconPath: "/images/avatar.png",
            position: {
              width: "50",
              height: "50",
              left: res.windowWidth - 70,
              top: res.windowHeight - 150
            },
            clickable: true
            }, {
              id: 5,
              iconPath: "/images/marker.png",
              position: {
                width: "35",
                height: "50",
                left: res.windowWidth/2 - 17,
                top: res.windowHeight/2 -50
              }
            }]
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.map.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})