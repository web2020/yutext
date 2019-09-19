// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{
      id: 1,
      img: ("../../images/hao1.jpeg"),
      title: "可爱三只小狗，好吃又好玩",
      n: "可爱三只小狗，好吃又好玩可爱三只小狗，好吃又好玩"
    }, {
      id: 2,
      title: "培根玉米色拉面包，咸味的更喜欢",
      img: ("../../images/hao2.jpeg"),
      n: "去皮紫薯 去皮山药 牛奶 蜂蜜 "
    }, {
      id: 3,
      title: "#秋天怎么吃# 川贝雪梨猪骨汤",
      img: ("../../images/hao3.jpeg"),
      n: "梭子蟹 蒜 姜片 小葱 黄豆酱"
    }, {
      id: 4,
      title: "蒜子豆酱焗鱼",
      img: ("../../images/hao4.jpeg"),
      n: "梭子蟹 蒜 姜片 小葱 黄豆酱 "
    }, {
      id: 5,
      title: "香煎土豆小饼",
      img: ("../../images/hao5.jpeg"),
      n: "土豆 面粉 鸡蛋 绿尖椒圈 红椒圈 香菜叶 盐 黑胡椒粉 "
    }, {
      id: 6,
      title: "蒜子豆酱焗蟹",
      img: ("../../images/hao6.jpg"),
      n: "梭子蟹 蒜 姜片 小葱 黄豆酱"
    }],
    
   
  },
  jump: function (event) {
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: '/pages/fen/fen?id=' + id,
    })
  },
  vip: function (event) {
    var id = event.target.dataset.id;
    wx.navigateTo({
      url: '/pages/vip/vip?id=' + id,
    })
  },
  /* 页面跳转 wx.navigateTo({
    url: 'page/home/home?user_id=111'
  })*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})