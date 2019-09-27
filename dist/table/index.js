// components/table/index.js
Component({
  options: {
    styleIsolation: "isolated"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    headers: {
      type: Array,
      value: []
    },
    hasBorder: {
      type: String,
      value: "no"
    }

  },
  externalClasses: ['s-class-header', 's-class-row'],

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
