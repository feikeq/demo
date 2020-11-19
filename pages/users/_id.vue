<template>
  <div>

      

      
      🚀
    {{ name }}：：{{ $route.fullPath }}
    <p>_id:{{ $route.params }}</p>
    <p>{{todos}}</p>
    <p>{{foo}}</p>
    <p><a href="javascript:;" @click="add('hahahahah')">addddddd</a></p>
    <div>
        <AButton type="primary">Primary Button</AButton>
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
    return { foo: 'bar',current:null }
  },
  fetch() {
    // fetch方法用于在呈现页面之前填充存储
  },
  head() {
    // 为此页设置元标记
    return {
      title: '🚀网站的标题('+this.$route.params.id +')',
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

<style></style>
