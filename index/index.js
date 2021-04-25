const app = getApp()

Page({
  data: {
    cutted:0
  },
  onLoad() {
    
  },
  upload:function(){
    wx.setNavigationBarTitle({
      title: '智能裁剪',
    })
    this.setData({
      cutted:1
    })
  }
})
