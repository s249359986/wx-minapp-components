## 快速上手
引入dist中的table文件夹
在*.json中引入组件

```
{
  "usingComponents": {
    "s-table": "@/table/index",
    "s-wheel": "@/wheel/index" //转盘组件
  }
}

````

### 转盘组件
#### 参数说明

属性 | 类型 | 默认值 | 必填 | 说明
---|---|--- | --- | --- |
list | Array |[] | 是| 转盘条目
runNum | Number | 3 |否| 旋转圈数
duration | Number | 4000 |否| 旋转时长(毫秒)
s-class-content | String | - |否| 自定义转盘的背景颜色
s-class-font | String | - |否| 自定义转盘文字的颜色

list的合法值  
例子: list:[{name:"前端团队"}]

属性 | 类型 | 默认值 | 必填 | 说明
---|---|--- | --- | --- |
name | String |- | 是| 转盘条目名称

事件
名称 | 类型 | 默认值 | 必填 | 说明 | 回调参数 |
---|---|--- | --- | --- | --- | --- |
reward | Function |- | 否| 旋转结束后回调 | detai.content(选中项),detail.index（选中项索引）

方法  

名称   | 说明  | 使用
---|---|--- 
initReward  | 当异步设置数据时需要调用它初始化转盘 |  this.selectComponent("#wheelId").initReward()


#### 经典案例1

![先知魔轮](http://static.songdonghong.com/tempImg/xzmlGithub.jpg)



---


### table组件
#### 参数说明
 ##### 表头
 headers 类型  Array
 
 表头内的数据对象
 属性 | 说明 | 类型
---|--- | --- 
text | 对应列内容的字段名 | String
display | 列头显示文字	|  String

##### 其他属性
list 类型 Array

 属性 | 说明 | 类型 |  默认 | 值
---|--- | --- | --- | ---
hasBorder | 是否添加表格的边框线 | String | no | no，yes
list | 内容 | Array | [{}] | 
height | 固定表格高度（内容超过高度滚动展示） | Number | 内容高度 | 
width | 固定表格宽度（内容超过宽度滚动展示） | Number | 单元格宽度35*列数 |
tdWidth | 单元格宽度（内容超过宽度滚动展示） | Number | 35px |



#### 自定义样式

 属性 | 说明 | 类型 | 值 | 默认
---|--- | --- | --- | ---
s-class-header | 替换表头样式 | class |  | 
s-class-row | 替换行样式 | class | [{}] | 


### 代码示例参考 index文件夹

### 合作案例扫码查看

#### 经典案例1

![计分助理](http://static.songdonghong.com/github/img/qdFromGithub.jpeg)

#### 经典案例2

![薪资计算器](http://static.songdonghong.com/github/img/xzqdFromGithub.jpeg)
