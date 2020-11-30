<template>
  <div class="container">
    <div>
      <Logo />

      <h1 class="title">
        {{ FKasyncData + "-" + "asyncData()" + UA.name }}
        <pre>
            {{ UA }}
        </pre>
        <br />
        {{ FKdata + "-" + "data()" + LUA.name }}
        <pre>
            {{ LUA }}
        </pre>
      </h1>
      <div class="links">
        <NLink to="./users/">users</NLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { UAParser } from "ua-parser-js";

export default {
  /*
    中间件：允许您定义一个自定义函数运行在一个页面或一组页面渲染之前。
    每一个中间件应放置在 middleware/ 目录。
    文件名的名称将成为中间件名称 (middleware/auth.js将成为 auth 中间件)。
    中间件执行流程顺序：
    1.nuxt.config.js
    2.匹配布局
    3.匹配页面
    中间件可以异步执行,只需要返回一个 Promise 或使用第 2 个 callback 作为第一个参数
    */
  middleware: "device", //中间件 可以在 pages 或者 layouts 或者 nuxt.config.js的路由router中 使用
  asyncData({ app, query, params, req, res, error }) {
    // layouts 好像没有asyncData这个方法

    // 每次加载组件前调用
    // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象会提示undefined。
    console.log(".......asyncData......");
    console.log(
      "asyncData __ $utils2",
      app.$utils.addQueryString("http://www.t.cn/?c=2", "a=1")
    );
    var UA = new UAParser().getBrowser();
    console.log("index.vue [asyncData] ua_parser", UA);

    return { FKasyncData: "肥客FK项目", UA };
  },
  methods: {
    ...mapMutations({
      add: "todos/add",
    }),
  },
  data() {
    //如果组件的数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据。
    console.log("------pages------");

    var LUA = new UAParser().getBrowser();
    console.log("default.vue [data] ua_parser", LUA);
    console.log("------------");
    console.log(LUA.name);
    console.log("------------");

    console.log("data访问不了asyncData的值呀", this.FKasyncData);
    return { FKdata: "测试数据bar", LUA };
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
  },
  head() {
    // 为此页设置元标记
    return {
      title: "网站的标题2(" + this.$route.params.id + ")",
      meta: [
        { name: "keywords", content: "HTML,CSS,XML,JavaScript" },
        { name: "author", content: "FK68.net" },
        {
          hid: "description", //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。
          name: "description",
          content: "网站的描述...",
        },
      ],
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
  },
  created() {
    console.log("created访问asyncData的值", this.FKasyncData, this.UA.name);
    console.log("created访问data的值", this.FKdata, this.LUA.name);
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-size: 12px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
