<template>
    <div class="html5">

        <header alt="头部">
            <dd class="logo fleft">LOGO</dd>
            <nav>
                <AMenu v-model="current" mode="horizontal" theme='dark'>
                    <AMenuItem key="live">
                        <NLink to="/">
                        <img src="/menu/live.png" /> 直播
                        </NLink>
                    </AMenuItem>
                    <AMenuItem key="match"><img src="/menu/match.png" /> 赛事</AMenuItem>
                    <AMenuItem key="data"><img src="/menu/data.png" /> 数据</AMenuItem>
                    <ASubMenu>
                        <span slot="title" class="submenu-title-wrapper">
                            <img src="/menu/serve.png" /> 服务
                        </span>
                        <AMenuItemGroup title="Item 1">
                        <AMenuItem key="setting:1">
                            Option 1
                        </AMenuItem>
                        <AMenuItem key="setting:2">
                            Option 2
                        </AMenuItem>
                        </AMenuItemGroup>
                        <AMenuItem-group title="Item 2">
                        <AMenuItem key="setting:3">
                            Option 3
                        </AMenuItem>
                        <AMenuItem key="setting:4">
                            Option 4
                        </AMenuItem>
                        </AMenuItem-group>
                    </ASubMenu>
                    <AMenuItem key="info">
                        <a href="/users/" rel="noopener noreferrer"><img src="/menu/info.png" /> 资讯</a>
                    </AMenuItem>
                    </AMenu>
            </nav>
            <dd class="user fright">USER</dd>
        </header>
        
        <section class="main">
            <Nuxt />
        </section>

        <footer>
            页脚
        </footer>
    
  </div>
</template>


<script>
import { mapMutations } from 'vuex';
export default {
  asyncData({ req, res,params }) {
    // 每次加载组件前调用 
    // 由于asyncData方法是在组件 初始化 前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象会提示undefined。
    console.log('.......asyncData......'); //
    // console.log('request:',req);
    // console.log('response:',res);
    console.log('params:',params);
    // console.log('req.headers.host:',req.headers);
    return { name: '路由地址fullPath' }
  },
  methods:{
      ...mapMutations({
      add: 'todos/add'
    })
  },
  data() {
      //如果组件的数据不需要异步获取或处理，可以直接返回指定的字面对象作为组件的数据。
    console.log("------data------");
    console.log('data访问不了asyncData的值呀',this.name);
    return { foo: 'bar',current:['live'] }
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
  },
  head() {
    // 为此页设置元标记
    return {
      title: '网站的标题('+this.$route.params.id +')',
      meta: [
        { name: 'keywords', content: 'HTML,CSS,XML,JavaScript' },
        { name: 'author', content: 'FK68.net' },
        {
          hid: 'description', //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号。
          name: 'description',
          content: '网站的描述...',
        },
      ],
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
}
</script>
<style lang="scss" scoped>

.html5{
    margin: 0 auto;
    background: rgba(231, 229, 229,0.6);
    max-width: 1024px;
    .fleft{
        width: 100px;
    }
    .fright{
        width: 100px;
    }
    header{
        background: red;
        display: flex;
        .logo{
            height: 100px;
            background: blue;
            margin: 0;
        }   
        .user {
            background: green;
            margin: 0;
        }
        nav{
            flex: 1;
            background: yellow;
        }
        
    }
    section.main{
        background: aqua;
        display: flex;
        article{
            flex: 1;
        }
        aside.fleft{
            background: salmon;
        }
        aside.fright{
            background: sandybrown
        }

    }
    footer{
        background:cadetblue;
        height: 100px;
    }
}



// 菜单图标设置
.ant-menu-item img,.ant-menu-submenu img{
    width:15px;
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
.ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent;
    opacity: 1;
    border-color:#1B72DA !important;
}

//底部线条
.ant-menu-dark.ant-menu-horizontal > .ant-menu-item, .ant-menu-dark.ant-menu-horizontal > .ant-menu-submenu {
    border-bottom: 4px solid transparent;
}

//hove
.ant-menu-dark .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu:hover {
    opacity: 0.8;
}



 
</style> 