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



/*
  服务端同步数据 客户端异步数据 和 分页的解决
  async asyncData({ app, params,query,env,$config },callback) {
        console.log("::::::::: asyncData ::::::::");
        let _data = {
            title:'战队排行榜',
            name:app.head.title,
            empty:"暂无排行",
            total:0,
            pageSize:20,
            currentPage:(query.page || 1)*1,
            theGameID:query.game || 'LOL',
            tableData:[],
            regionFilter: {
                value:(query.zone || 0)*1 ,
                options: [
                    {
                        label: "热门地区",
                        options: [
                            {
                                value: 0,
                                label: "所有地区"
                            },
                            {
                                value: 8,
                                label: "中国"
                            },
                            {
                                value: 1,
                                label: "韩国"
                            }
                        ]
                    },
                    {
                        label: "其它赛区",
                        options: [
                            
                            {
                                value: 2,
                                label: "北美"
                            },
                            {
                                value: 3,
                                label: "南美洲"
                            },
                            {
                                value: 4,
                                label: "巴西"
                            },
                            {
                                value: 5,
                                label: "欧洲"
                            },
                            {
                                value: 6,
                                label: "独联体"
                            },
                            {
                                value: 7,
                                label: "土耳其"
                            },
                            {
                                value: 9,
                                label: "中国台湾"
                            },
                            {
                                value: 10,
                                label: "日本"
                            },
                            {
                                value: 11,
                                label: "越南"
                            },
                            {
                                value: 12,
                                label: "东南亚"
                            },
                            {
                                value: 13,
                                label: "大洋洲"
                            },
                            {
                                value: 14,
                                label: "拉美"
                            },
                            {
                                value: 15,
                                label: "亚太"
                            }
                        ]
                    }
                ]
            }
        };

        if(process.client){
            console.log("客户端异步加载数据")
            api.getTeamList({
                game_id:_data.theGameID,
                page_status:_data.regionFilter.value *1,
                page_size:_data.pageSize,
                page:_data.currentPage
            },function(_list){
                if(_list.count)_data.total=_list.count *1;
                if(_list.list)_data.tableData=api.formatTeamList(_list.list);
                callback(null,_data); // 再填充数据
            }); 
            callback(null,_data); // 先渲染
        }else{
            console.log("服务端同步加载数据")
            let _list = await api.getTeamList({
                game_id:_data.theGameID,
                page_status:_data.regionFilter.value *1,
                page_size:_data.pageSize,
                page:_data.currentPage
            });
            if(_list){
                if(_list.count)_data.total=_list.count *1;
                if(_list.list)_data.tableData=api.formatTeamList(_list.list);
            }
            console.log("fanhui2121212");
            callback(null,_data);
            return _data;
        }
    },
    data(){
        // console.log(this);
        return {
            title:'战队排行榜',
            // name:app.head.title,
            empty:"暂无排行",
            total:0,
            pageSize:20,
            currentPage:1,
            theGameID:'LOL',
            tableData:[],
            regionFilter: {
                value:0 ,
                options: [
                    {
                        label: "热门地区",
                        options: [
                            {
                                value: 0,
                                label: "所有地区"
                            },
                            {
                                value: 8,
                                label: "中国"
                            },
                            {
                                value: 1,
                                label: "韩国"
                            }
                        ]
                    },
                    {
                        label: "其它赛区",
                        options: [
                            
                            {
                                value: 2,
                                label: "北美"
                            },
                            {
                                value: 3,
                                label: "南美洲"
                            },
                            {
                                value: 4,
                                label: "巴西"
                            },
                            {
                                value: 5,
                                label: "欧洲"
                            },
                            {
                                value: 6,
                                label: "独联体"
                            },
                            {
                                value: 7,
                                label: "土耳其"
                            },
                            {
                                value: 9,
                                label: "中国台湾"
                            },
                            {
                                value: 10,
                                label: "日本"
                            },
                            {
                                value: 11,
                                label: "越南"
                            },
                            {
                                value: 12,
                                label: "东南亚"
                            },
                            {
                                value: 13,
                                label: "大洋洲"
                            },
                            {
                                value: 14,
                                label: "拉美"
                            },
                            {
                                value: 15,
                                label: "亚太"
                            }
                        ]
                    }
                ]
            }
        };
    },
    methods: {
        getTeamListData(){
            console.log('--------------currentChange------------',this.theGameID)
            var _this = this;
            this.empty ="正在加载数据...";
            this.tableData = [];
            
            api.getTeamList({
                game_id:this.theGameID,
                page_status:this.regionFilter.value *1,
                page_size:this.pageSize,
                page:this.currentPage
            },function(_list){
                if(_list && _list.count){
                    if(_list.count)_this.total=_list.count *1;
                    if(_list.list)_this.tableData=api.formatTeamList(_list.list);
                }else{
                    _this.empty ="暂无排行";
                }
            });
        },
        zoneChange(val){
            this.currentPage = 1;
            this.page_status = val;
            this.$router.push({ query: {zone: val}});
            this.getTeamListData();
        },
        currentChange(page){
            this.currentPage = page;
            let query = {page: page};
            if(this.regionFilter.value) query.zone = this.regionFilter.value;
            this.$router.push({query });
            this.getTeamListData();
        },
        rowClick(row, column, event) {
            // console.log(event);
            // console.log("row", row);
            // console.log("column", column);
            this.$router.push(`/team/${row.id}/`);
        },
        renderHeader(h, { column, $index }) {
            // console.log("column",column);
            // console.log("$index",$index);
            var _dom = [];
            if (column.columnKey)
                _dom.push(
                    h("i", {
                        class: column.columnKey,
                        style: "color:rgba(255, 255, 255,0.5);margin-right:5px;"
                    })
                );
            _dom.push(h("em", column.label));
            return h("span", _dom, { style: "height:40px" });
        },
        formatter(row, column, cellValue, index) {
            return cellValue;
        }
    }


    */


};
</script>

<style></style>
