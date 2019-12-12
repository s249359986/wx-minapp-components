// components/wheel/index.js
let runDeg = 0
let chance = true
let _list = []
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: { //列表
      type: Array,
      value: [],
    },
    runNum:{ //旋转圈数
      type: Number,
      value: 3
    },
    duration:{ //旋转时长
      type: Number,
      value: 4000
    }
  },
  externalClasses: ['s-class-content','s-class-font'],

  /**
   * 组件的初始数据
   */
  data: {    
    awardsList: [],
    animationData: {},
    btnDisabled: ''
  },
  lifetimes: {
    attached: function () {
      this.initReward()
      
      // 在组件实例进入页面节点树时执行
    },
    ready:function(){
      
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    }
  },  
  /**
   * 组件的方法列表
   */
  methods: {
    getRandom(m,n){
      return Math.floor(Math.random() * (n - m + 1)) + m
    },
    initReward() {
      _list = []      
      var awards = this.properties.list;
      var awardsList = [];
      var turnNum = 1 / awards.length; // 文字旋转 turn 值
      // 奖项列表
      for (var i = 0; i < awards.length; i++) {
        awardsList.push({
          turn: i * turnNum + 'turn',
          lineTurn: i * turnNum + turnNum / 2 + 'turn',
          award: awards[i].name
        });
        _list.push(awards[i])
      }
      this.setData({
        btnDisabled: chance ? '' : 'disabled',
        awardsList: awardsList
      });
    },
    playReward() {      
      let awards = this.properties.list;
      let len = awards.length
      //随机指定
      let awardIndex = this.getRandom(0, len - 1); //包括领和1
      console.log('awardIndex', awardIndex)
      let duration = this.properties.duration; //时长
      // 旋转角度    
      runDeg = runDeg || 0
      runDeg = runDeg + (360 - runDeg % 360) + (360 * this.properties.runNum - awardIndex * (360 / len))
      //创建动画
      let animationRun = wx.createAnimation({
        duration: duration,
        timingFunction: 'ease'
      })
      animationRun.rotate(runDeg).step();
      this.setData({
        animationData: animationRun.export(),
        btnDisabled: 'disabled'
      });

      // 选择中指定内容     
      setTimeout(()=> {             
        let myEventDetail = { content: _list[awardIndex], index: awardIndex} // detail对象，提供给事件监听函数
        let myEventOption = {} // 触发事件的选项
        this.triggerEvent('reward', myEventDetail)
        this.setData({
          btnDisabled: ''
        });
      }, duration);//
    }

  }
})