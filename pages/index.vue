<template>
  <div class="container">
    <div>
      <Logo />

      <h1 class="title">
        {{ fkname + "-" + "UA:" + UA.name }}
      </h1>
      <div class="links">
        <NLink to="./users/">users</NLink>
      </div>
    </div>
  </div>
</template>

<script>
import { UAParser } from "ua-parser-js";
export default {
  asyncData({ app, query, params, req, res, error }) {
    // 每次加载组件前调用
    // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象会提示undefined。
    console.log(".......asyncData......");
    console.log(
      "asyncData __ $utils2",
      app.$utils.addQueryString("http://www.t.cn/?c=2", "a=1")
    );
    var UA = new UAParser().getBrowser();
    console.log("index.vue [asyncData] ua_parser", UA);

    return { fkname: "FK", UA };
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
