# shoppingCart
基于Vue2.0仿照慕课网教学视频实现购物车和地址选配功能的demo

## 学习心得：

1,v-bind:class="{red:isRed}" class的绑定情况比较特殊，里面是对象或者是数组 简写为:class="{red:isRed}"

2，Vue.set(target,key,value) or this.$set(target,key,value) 给vue中的对象添加新的变量。(在购物车选定商品的功能中使用到)

3,vue1.0中的ready被vue2.0中的mounted钩子函数替代

4，学习了如何使用vue-resource插件

5，v-bind:class="{'check':index==currentIndex}"  @click="currentIndex=index" v-for卡片的选定的思路(index为v-for的索引，currentIndex为定义在Vue实例中data中的数据)

6,vue实例中的computed代表实时计算(在v-for中添加了computed实时计算，可以动态地修改数组的长度)

7,v-bind:class="{'check':shippingMethod==1}". @click="shippingMethod=1"(若地址页有很多配送方式，需要选择一个，思路就是在vue实例中添加一个数据并赋值，在不同的配送方式被选定后此数据被赋一个不同的值，作为v-bind:class的条件，然后判断此class是否被添加)；

8,过滤器的使用
