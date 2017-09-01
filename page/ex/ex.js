// page/ex/ex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  // a:100
     b:1
  },
  change: function() {
    console.log("点击了！");
    this.setData({
      b:2
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
 onLoad: function (options) {
       var a = 100; 
   console.log(a<100 ? "小呆呆" : "不存在的");
   }
})