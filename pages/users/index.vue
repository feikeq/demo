<template>
  <div>
    <aside class="fleft">左侧边栏目</aside>

    <article>
      主内容区 users

      <NLink to="./99199"> 跳到99199的URL去玩玩🚀 </NLink>
    </article>
    <aside class="fright">右侧边栏目</aside>
  </div>
</template>

<script>
export default {
  //   asyncData() {
  //     // 数组解构获得对应请求的数据
  //     let [indexData, recommendAuthors, recommendBooks] = await Promise.all([
  //       // 文章列表
  //       app.$api.getIndexList({
  //         first: 20,
  //         order: 'POPULAR',
  //         category: 1
  //       }).then(res => res.s == 1 ? res.d : {}),
  //       // 推荐作者
  //       app.$api.getRecommendAuthor({
  //         limit: 5
  //       }).then(res => res.s == 1 ? res.d : []),
  //       // 推荐小册
  //       app.$api.getRecommendBook().then(res => res.s === 1 ? res.d.data : []),
  //     ])
  //     return {
  //       indexData,
  //       recommendAuthors,
  //       recommendBooks
  //     }
  //   }
};
</script>

<style></style>
