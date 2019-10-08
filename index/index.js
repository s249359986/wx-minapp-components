const app = getApp()

Page({
  data: {
    headers: [{ text: 'one', display: '第一列' }, { text: 'two', display: '第二列' }, { text: 'three', display: '第三列' }, { text: 'four', display: '第四列' }, { text: 'five', display: '第五列' }],
    row:[]

  },
  onLoad: function () {
    let tempData = []
    for(let i=1;i<10;i++){
      let tempObj={}
      for(let j=0;j<this.data.headers.length;j++){
        tempObj[this.data.headers[j]['text']] = "第" + i+"行"
      }
      tempData.push(tempObj)        
    }
    this.setData({
      row:tempData
    })
  },
})
