const app = getApp()

Page({
  data: {
    headers: [{ text: 'one', display: '第一列' }, { text: 'two', display: '第二列' }, { text: 'three', display: '第三列' }, { text: 'four', display: '第四列' }],
    row:[]

  },
  onLoad: function () {
    let tempData = []
    for(let i=1;i<10;i++){
      tempData.push({ one: "第" + i + "行", two: "第" + i + "行", three: "第" + i + "行", four: "第" + i + "行"})            
    }
    this.setData({
      row:tempData
    })
  },
})
