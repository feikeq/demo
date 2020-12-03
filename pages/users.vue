<template>
  <div>
    <div style="background: #8bc34a; color: #630a7f">
      <b>pages/users.vue</b>
      <p>
        然后在一级页面中使用 nuxt-child 来显示子页面，就像使用 router-view 一样
        <br />
        但如果没有 pages/users.vue 这个页只有 pages/users/ 这个文件夹
        <br />那访问 /user/ 会直接到 pages/users/index.vue 里面的page页 <br />
        而不通过 router-view 去装载 子路由组件
      </p>
    </div>
    <!-- 也可以用 <router-view></router-view> -->

    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
