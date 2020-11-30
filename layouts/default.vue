<template>
  <div class="html5">
    <!-- {{ asyncDataName + "|" + dataName }} -->
    <Header />
    <section class="main">
      <Nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>
//需要注意的是在默认布局里不要加入头部信息，只是关于<template>标签下的内容统一订制。
export default {
  asyncData({ req, res, params }) {
    // layouts 好像没有asyncData这个方法
    return { asyncDataName: "这是asyncData()的Name" };
  },
  data() {
    return {
      dataName: "这是Data()的Name",
    };
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
