<!--
 * @Author: FeikeQ
 * @Date: 2020-12-07 13:45:42
 * @LastEditors: FeikeQ
 * @LastEditTime: 2020-12-10 09:25:30
 * @FilePath: /demo/components/appTitle/index.vue
 * @Description: 标题组件
 * 使用方法
 * <app-title title="战队排行" icon="/images/xxx.png">[插槽]</app-title>
-->
<template>
  <h3 :style="{fontSize:size+'px',lineHeight:size*1.4+'px',color:color}">
      <img v-if="icon" :style="{width:(size +12)+'px',maxHeight:(size +12)+'px'}" :src="icon" :alt="title" > <span>{{title}}</span>
      <slot></slot>
  </h3>
</template>

<script>
export default {
    name:'appTitle',
    props:{
        "size":{
            type:Number,
            default:18
        },
        "color":{
            type:String,
            default:"#5C79BA"
        },
        "title":{
            type:String,
            default:""
        },
        "icon":{
            type:String,
            default:""
        }
    }
}
</script>

<style lang="less" scoped>

h3{
    font-weight: bold;
    display:flex;
    align-items: center;
    vertical-align: middle;
    img{
        vertical-align:middle;
        margin-right:6px;
    }
}


</style>