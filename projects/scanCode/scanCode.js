// projects/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      pass:options.pass
    });
    var t = 7;
    var timer = setInterval(()=> {
      this.setData({
        time: t--
      })
      if(t == 0) {
        clearInterval(timer);
        wx.redirectTo({
          url: '../billing/billing?num=' + options.num,
        })
      }
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  

  onReady: function () {
  
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

  btap: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})