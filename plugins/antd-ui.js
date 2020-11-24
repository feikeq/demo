import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import utils from '~/plugins/utils.js'
Vue.use(Antd)

/*
如何使Nuxt成为全局对象？
plugin 一般向外暴露一个函数，该函数接收两个参数分别是 context 和 inject
    context： 上下文对象，该对象存储很多有用的属性。比如常用的 app 属性，包含所有插件的 Vue 根实例。例如：在使用 axios 的时候，你想获取 $axios 可以直接通过 context.app.$axios 来获取。
    inject： 该方法可以将 plugin 同时注入到 context， Vue 实例， Vuex 中。
    例：


    import Api from './api' // 自定变量内容 其他自便
    // 这里是 为了在 asyncData 方法中使用
    export default ({ app }, inject) => {
        // Set the function directly on the context.app object
        app.$api = Api // 名称
    };

 */

// 注入对象。随处可见的通过前缀$访问插件。
export default function (context, inject) {
  inject('utils', utils) //NUXT 注册全局组件
}
