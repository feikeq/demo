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
    



/*
  服务端同步数据 客户端异步数据 和 分页的解决 使用 进行双端渲染 
  async asyncData({ app, params,query,env,$config }) {
        console.log("::::::::: asyncData ::::::::");
        if(!process.server) return;
        let _data = {
            title:'排行榜',
            name:app.head.title,
            empty:"无排行",
            total:0,
            pageSize:20,
            currentPage:(query.page || 1)*1,
            tableData:[],
            regionFilter: {
                value:(query.zone || 0)*1 ,
            },
            ServerRenderDataTag:true // 服务端加载数据标识
            
        };
        console.log("服务端同步加载数据")
        let _list = await api.getMyList({
            page_status:_data.regionFilter.value *1,
            page_size:_data.pageSize,
            page:_data.currentPage
        });
        if(_list){
            if(_list.count)_data.total=_list.count *1;
            if(_list.list)_data.tableData=api.formatTeamList(_list.list);
        }
        return _data;
    },
    data(){
        // console.log(this);
        return {
            title:'排行榜',
            empty:"无排行",
            total:0,
            pageSize:20,
            currentPage:1,
            tableData:[],
            ServerRenderDataTag:false // 服务端加载数据标识
        };
    },
    methods: {
        getListData(){
            var _this = this;
            this.empty ="加载...";
            this.tableData = [];
            
            api.getMyList({
                page_status:this.regionFilter.value *1,
                page_size:this.pageSize,
                page:this.currentPage
            },function(_list){
                if(_list && _list.count){
                    if(_list.count)_this.total=_list.count *1;
                    if(_list.list)_this.tableData=api.formatTeamList(_list.list);
                }else{
                    _this.empty ="无排行";
                }
            });
        },
        zoneChange(val){
            // 条件筛选
            this.currentPage = 1;
            this.page_status = val;
            this.$router.push({ query: {zone: val}});
            this.getListData();
        },
        currentChange(page){
            //分页
            this.currentPage = page;
            let query = {page: page};
            if(this.regionFilter.value) query.zone = this.regionFilter.value;
            this.$router.push({query });
            this.getListData();
        }
    },
    created() {
        // 判断是否是客户端 并且 服务端没有渲染数据标识
        if(process.client && !this.ServerRenderDataTag){
            this.getListData(); // 客户端异步加载数据
        }
    },


    */




/*
    asyncData() {
      // 数组解构获得对应请求的数据
      let [indexData, recommendAuthors, recommendBooks] = await Promise.all([
        // 文章列表
        app.$api.getIndexList({
          first: 20,
          order: 'POPULAR',
          category: 1
        }).then(res => res.s == 1 ? res.d : {}),
        // 推荐作者
        app.$api.getRecommendAuthor({
          limit: 5
        }).then(res => res.s == 1 ? res.d : []),
        // 推荐小册
        app.$api.getRecommendBook().then(res => res.s === 1 ? res.d.data : []),
      ])
      return {
        indexData,
        recommendAuthors,
        recommendBooks
      }
    }

    */


   
/*
应用到的特性主要包括asyncData异步获取数据、mounted不支持服务端渲染、no-ssr组件不在服务端渲染中呈现；
通过相关特性做到API数据和页面结构合理拆分，首屏所需数据和结构通过服务端获取并渲染，非首屏数据和结构通过客户端获取并渲染。

no-ssr结构拆分
<template>
 <div>
 <!-- 顶部banner -->
 <banner :banner="banner" />
 <!-- 非首屏所需结构，通过no-ssr组件达到不在服务端渲染目的-->
 <no-ssr>
 <!-- 商品列表 -->
 <prod-list :listData="listData"/>
 </no-ssr>
 </div>
</template>



API数据拆分
export default {
    async asyncData({ app, query }) {
        try {
            // 获取页面顶部轮播图信息
            const getBanner = () => {
                return app.$axios.$get("zz/zy/banner");
            };
            // 获取底部配置信息
            const getFooter = () => {
                return app.$axios.$get("zz/zy/footer", {
                    params: {
                        smark: query.smark,
                    },
                });
            };
            // 并发获取首屏数据，服务端获取
            const [banner, footer] = await Promise.all([
                getBanner(),
                getFooter(),
            ]);
            return { banner: banner, footer: footer };
        } catch (e) {
            console.log("interface timeout or format error => ", e);
            return {};
        }
    },
    mounted() {
        // 非首屏使用的数据, 客户端获取
        this.loadListData();
    },
    methods: {
        loadListData() {
            this.$axios.$get("zz/zy/list").then(() => {
                // 数据处理逻辑
            });
        },
    },
};

*/
};
</script>

<style></style>
