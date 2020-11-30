<template>
  <div class="html5">
    <Header />
    <section class="main">
      <Nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { UAParser } from "ua-parser-js";

export default {
  asyncData({ req, res, params }) {
    // layouts 好像没有asyncData这个方法
    return { name: "路由地址fullPath", ua_name: "aaaaa" };
  },
  methods: {
    ...mapMutations({
      add: "todos/add",
    }),
  },
  data() {
    //如果组件的数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据。
    console.log("------layouts------");

    var LUA = new UAParser().getBrowser();
    console.log("default.vue [data] ua_parser", LUA);

    // console.log("data访问不了asyncData的值呀", this.name);
    return { foo: "bar", LUA };
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
  },
  head() {
    // 为此页设置元标记
    return {
      title: "网站的标题(" + this.$route.params.id + ")",
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
};
</script>
<style lang="scss" scoped>
.html5 {
  margin: 0 auto;
  background: rgba(231, 229, 229, 0.6);
  max-width: 1024px;
  .fleft {
    width: 100px;
  }
  .fright {
    width: 100px;
  }

  section.main {
    background: aqua;
    display: flex;
    article {
      flex: 1;
    }
    aside.fleft {
      background: salmon;
    }
    aside.fright {
      background: sandybrown;
    }
  }
}
</style>
