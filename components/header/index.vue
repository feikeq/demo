<!--  -->
<template>
  <header alt="头部">
    <dd class="logo fleft">logo</dd>
    <nav>
      <AMenu v-model="current" mode="horizontal" theme="dark">
        <AMenuItem key="live">
          <NLink to="/"> <img src="/menu/live.png" /> 直播 </NLink>
        </AMenuItem>
        <AMenuItem key="match"><img src="/menu/match.png" /> 赛事</AMenuItem>
        <AMenuItem key="data"><img src="/menu/data.png" /> 数据</AMenuItem>
        <ASubMenu>
          <span slot="title" class="submenu-title-wrapper">
            <img src="/menu/serve.png" /> 服务
          </span>
          <AMenuItemGroup title="Item 1">
            <AMenuItem key="setting:1"> Option 1 </AMenuItem>
            <AMenuItem key="setting:2"> Option 2 </AMenuItem>
          </AMenuItemGroup>
          <AMenuItem-group title="Item 2">
            <AMenuItem key="setting:3"> Option 3 </AMenuItem>
            <AMenuItem key="setting:4"> Option 4 </AMenuItem>
          </AMenuItem-group>
        </ASubMenu>
        <AMenuItem key="info">
          <a href="/users/" rel="noopener noreferrer"
            ><img src="/menu/info.png" /> 资讯</a
          >
        </AMenuItem>
      </AMenu>
    </nav>
    <dd class="user fright">USER</dd>
  </header>
</template>

<script>
export default {
  components: {},
  name: "header-box",
  data() {
    return {
      current: ["live"],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="scss" scoped>
header {
  background: red;
  display: flex;
  .logo {
    height: 100px;
    background: blue;
    margin: 0;
  }
  .user {
    background: green;
    margin: 0;
  }
  nav {
    flex: 1;
    background: yellow;
  }
}

// 菜单图标设置
.ant-menu-item img,
.ant-menu-submenu img {
  width: 15px;
  margin-top: -4px;
  vertical-align: middle;
}
// 子菜单主项设置
.ant-menu-horizontal > .ant-menu-submenu,
.ant-menu-dark .ant-menu-item,
.ant-menu-dark .ant-menu-item-group-title,
.ant-menu-dark .ant-menu-item > a {
  color: #fff;
  opacity: 0.35;
}

.ant-menu-dark .ant-menu-item > a {
  opacity: 1;
}

//菜单选中状态
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: transparent;
  opacity: 1;
  border-color: #1b72da !important;
}

//底部线条
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item,
.ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
  border-bottom: 4px solid transparent;
}

//hove
.ant-menu-dark .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover {
  opacity: 0.8;
}
</style>
