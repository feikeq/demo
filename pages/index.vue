<template>
  <div class="container">
    <div>
      <Logo />

      <div class="links">
        <NLink to="./users/">🚀🚀🚀 进入users路由节点 🚀🚀</NLink>
      </div>

      <h3 class="title">
        {{
          FKasyncData +
          "-" +
          "asyncData()" +
          (UA && UA.browser ? UA.browser.name : "UA")
        }}
        <pre>
            {{ UA }}
        </pre>
        <br />
        <br />
        {{
          FKdata +
          "-" +
          "data()" +
          (LUA && LUA.browser ? LUA.browser.name : "LUA")
        }}
        <pre>
            {{ LUA }}
        </pre>
        <b>{{ ccav }}</b> <button @click="changeccav">改变ccav值</button>
      </h3>
      
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
      "使用公共函数库 __ $utils2",
      app.$utils.addQueryString("http://www.t.cn/?c=2", "a=1")
    );
    var UA = {};

    // 请检查您是否在服务器端
    if (process.server) {
      // 如果不加这一层判断，当你在开发状态时动态保存代码刷新页面就会报错 headers 没有定义
      // 使用 req 和 res
      //   console.log("+++req.headers++", req.headers);
      let user_agent = req.headers["user-agent"];
      //   console.log('req.headers["user-agent"]', user_agent);
      UA = UAParser(user_agent);
      console.log("index.vue [asyncData] ua_parser", UA.browser);
    }

    return {
        head:app.head,  // nuxt.config.js 里的head配置
        FKasyncData: "肥客FK项目", UA };
  },
  methods: {
    ...mapMutations({
      add: "todos/add",
    }),
    changeccav() {
      this.ccav = !this.ccav;
      console.log("ccav", this.ccav);
    },
  },
  data() {
    //如果组件的数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据。
    console.log("------pages------");
    // console.log("server:" + process.server, "client:" + process.client);

    var LUA = {};

    // 请检查您是否在客户端
    if (process.client) {
      var parser = new UAParser();
      LUA = parser.getResult();
      console.log("index.vue [data] ua_parser", LUA.browser);
      console.log("data访问不了asyncData的值呀", this.FKasyncData);
    }

    var ccav = "假的false";
    if (LUA.browser) {
      ccav = true;
      console.log("");
      console.log("");
      console.log("");
      console.log("");
      console.log("         LUA.browser ", LUA.browser);
      console.log("ccav:", ccav);
      console.log("这里明明把CCAV置成了true为什么creat里还是false");
      console.log("");
      console.log("");
    }

    return { FKdata: "测试数据bar", LUA, ccav };
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
  },
  head() {
    // 为此页设置元标记
    return {
      title: "网站的标题2(" + this.$route.params.id + ") - " + this.head.title ,
      meta: [
        { name: "keywords",hid: "keywords", content: "HTML,CSS,XML,JavaScript," + this.head.meta[2].content },
        { name: "author",hid: "author", content: "FK68.net" },
        {
          hid: "description", //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。
          name: "description",
          content: "网站的描述2...",
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
    console.log("server:" + process.server, "client:" + process.client);
    console.log("==this==", this.ccav); //这里都还是 true
    console.log("==this==", this); // 展开后变成 false
    console.log("created访问asyncData的值", this.FKasyncData, this.UA);
    console.log("created访问data的值", this.FKdata, this.LUA);
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
