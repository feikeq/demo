<template>
  <div>
    🚀
    {{ name }}：：{{ $route.fullPath }}
    <p>_id:{{ $route.params }}</p>
    <p>{{ todos }}</p>
    <p>{{ foo }}</p>
    <p>当前时间：{{ $utils.formatime(Date.now(), "yyyy-MM-dd hh:mm:ss") }}</p>
    <div>
      <AButton type="primary" @click="add('hahahahah')">添加数据ADD</AButton>
      <AButton>Default AButton</AButton>
      <AButton type="dashed">Dashed AButton</AButton>
      <br />
      <a-icon type="step-forward" />
      <AButton type="text">Text AButton</AButton>
      <AButton type="link">Link AButton</AButton>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
// import axios from 'axios';

export default {
  asyncData({ app, query, params, req, res, error }) {
    // 每次加载组件前调用 https://www.nuxtjs.cn/api/context
    // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象会提示undefined。
    console.log(
      ".......asyncData......",
      app.$utils.formatime(1606722602362, "yyyy-MM-dd hh:mm:ss")
    ); //
    // console.log('request:',req);
    // console.log('response:',res);
    console.log("params:", params);
    // console.log('req.headers.host:',req.headers);
    console.log("aaaaapppp app axios", app.$axios);
    console.log("query", query);
    return { name: "路由地址 fullPath" };
  },
  methods: {
    ...mapMutations({
      add: "todos/add",
    }),
  },
  data() {
    //如果组件的数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据。
    console.log("------data------", this);
    // console.log('data访问不了asyncData的值呀',this.name);
    return { foo: "bar", current: null };
  },
  fetch(store, params) {
    // fetch方法用于在呈现页面之前填充存储
    // 与 asyncData 方法类似，用于在渲染页面之前获取数据填充应用的状态树（store）。
    // 不同的是 fetch 方法不会设置组件的数据。
    // 如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。
    // 警告: 您无法在内部使用this获取组件实例，fetch是在组件初始化之前被调用
    // fetch 方法会在渲染页面前被调用，作用是填充状态树 (store) 数据，与 asyncData 方法类似，不同的是它不会设置组件的数据。

    console.log("----fetch----", this);
  },

  head() {
    // 你也可以在页面组件中使用 head 配置并通过 this 关键字来获取组件的数据
    // 配置当前页面的 Meta 标签 ,为此页设置元标记
    return {
      title: "网站的标题(" + this.$route.params.id + ")🚀",
      meta: [
        { name: "keywords", content: "HTML,CSS,XML,JavaScript" },
        { name: "author", content: "FK68.net" },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "掘金,稀土,Vue.js,微信小程序,Kotlin,RxJava,React Native,Wireshark,敏捷开发,Bootstrap,OKHttp,正则表达式,WebGL,Webpack,Docker,MVVM",
        },
        {
          hid: "description", //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。
          name: "description",
          content: "网站的描述...",
        },
      ],
    };
  },
  layout(context) {
    // 指定当前页面使用的布局（layouts 根目录下的布局文件）。
    // layouts 根目录下的所有文件都属于个性化布局文件，可以在页面组件中利用 layout 属性来引用。
    //   return 'blog'
  },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
};
</script>

<style></style>
