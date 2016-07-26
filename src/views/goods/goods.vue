<template lang="jade">
div.vgoods
    header.header
        div.header-left
            a(v-touch:tap="history.go(-1)")
                img.ib(src="http://m.mall.snail.com/globalCard/images/head-left.png")
        div.header-title 商品详情
    div.swiper-container
        div.swiper-wrapper
            div.swiper-slide(v-for="img in lists.info.img",track-by="$index")
                img(:src="img")
        div.pagination
    div.card-text
        p.card-title {{lists.info.name}}
        p.card-desc {{lists.info.goods_description}}
        p.card-price ￥{{price}}
    div.card-choose
        dl.clearfix
            dt 选择套餐
            dd(v-for="item in lists.spec_list[0].list")
                a(href="javascript:;", :class="{'sel': item.real_id == realId}",
                    :data-id="item.real_id", :data-price="item.s_price", v-touch:tap="changeCombo(item.real_id, item.s_price)")
                    i
                    span  {{item.name}}
    div.card-detail
        div.card-detail-head
            div.sel 图文详情
            div 规格参数
        div.card-detail-content {{{lists.info.mobile_goods_details}}}
    div.footer-margin.footer-btn
    footer.footer-btn
        a(v-link="'/reserve'") 立即预定
</template>
<style lang="stylus">
@import "goods.styl"
</style>
<script>
    import S from 'swiper'
    import $ from 'jquery'
    import Vue from 'vue'
    Vue.use(require('vue-touch'));
    export default {
        route: {
            waitForData: true,
            data: (transition) => {
                transition.next({
                    "lists":{"spec_list":[{"name":"选择套餐","list":{"164":{"name":"看这个商品在显示几个","goods_id":"742579","mix_id":"0","real_id":"164","package_image":"http://10.17.0.49:90/home/webftp/goods/20150422165815285.jpg","mobile_package_details":"","current":true,"disable":false,"s_price":101,"m_price":1},"191":{"name":"测试第二笔套餐","goods_id":"742579","mix_id":"0","real_id":"191","package_image":"http://10.17.0.49:90/home/webftp/goods/20160615160302535.jpg","mobile_package_details":"<p style=\"color:#333333;font-family:细明体, 新细明体;font-size:13px;background-color:#FFFFFF;\">\r\n\t<span style=\"line-height:1.5;\">百度目前是全球最大的中文搜索引擎，2000年1月创立于北京中关村。百度的使命是让人们最便捷地获取信息，找到所求。百度的核心价值观是“简单可依赖”</span> \r\n</p>","current":false,"disable":false,"s_price":299,"m_price":250}}}],"spec_sort":[0],"max_amount":5,"max":"5","price":{"s":101,"m":1},"info":{"name":"畅玩卡12版","defaultImg":"http://10.17.0.49:90/home/webftp/goods/20160503110356972.jpg","img":["http://10.17.0.49:90/home/webftp/goods/20160503110356972.jpg","http://10.17.0.49:90/home/webftp/goods/20160503110356972.jpg"],"goods_description":"","mobile_goods_details":"<img src=\"http://10.17.0.49:90/home/webftp/goods/20160606095247_68100.jpg\" alt=\"\" />","packagename":"看这个商品在显示几个"},"goodsid":"742579","mixid":"0","realid":"164","stock":"1000","spec_img":""},
                    "goodsId": "742579",
                    "realId": "164",
                    "price": 101
                });
            }
        },
        ready() {
            Vue.nextTick(() => {
                new S('.swiper-container', {
                    pagination: '.pagination',
                    loop: true,
                    autoplay: 4000,
                    calculateHeight: true,
                    paginationClickable: true
                });
            });
        },
        data() {
            return {
                lists: {
                    info: {
                        img: []
                    },
                    spec_list: [
                        {list: []}
                    ]
                },
                price: "",
                goodsId: "",
                realId: 164
            }
        },
        methods:{
            changeCombo(rId, price) {
                if (this.realId == rId) {
                    return ;
                }
                this.realId = rId;
                this.price = price;
            }
        }
    }
</script>
