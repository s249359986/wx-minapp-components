## 快速上手
引入dist中的table文件夹
在*.json中引入组件

```
{
  "usingComponents": {
    "s-table": "@/table/index"
  }
}

````

### 参数说明
 #### 表头
 headers 类型  Array
 
 表头内的数据对象
 属性 | 说明 | 类型
---|--- | --- 
text | 对应列内容的字段名 | String
display | 列头显示文字	|  String

#### 内容
list 类型 Array

 属性 | 说明 | 类型 | 值 | 默认
---|--- | --- | --- | ---
hasBorder | 是否添加表格的边框线 | String | no,yes | no
list | 内容 | Array | [{}] | 

#### 自定义样式

 属性 | 说明 | 类型 | 值 | 默认
---|--- | --- | --- | ---
s-class-header | 替换表头样式 | class |  | 
s-class-row | 替换行样式 | class | [{}] | 


### 代码示例参考 index文件夹

### 合作案例扫码查看

#### 经典案例1

![计分助理](./qdFromGithub.jpeg)

#### 经典案例2

![薪资计算器](./xzjsq.jpeg)