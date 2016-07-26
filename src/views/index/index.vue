<template lang="jade">
div.vindex
    div.swiper-container
        div.swiper-wrapper
            a.swiper-slide(href="javascript:;")
                img(src="/static/images/banner.jpg")
            a.swiper-slide(href="javascript:;")
                img(src="/static/images/banner.jpg")
            a.swiper-slide(href="javascript:;")
                img(src="/static/images/banner.jpg")
            a.swiper-slide(href="javascript:;")
                img(src="/static/images/banner.jpg")
        div.pagination
    div.top-news
        div
            div.top-news-title 智能头条
            div.top-news-desc 预售手机支付100元定金，正式发售可...
    div.top-goods
        div.top-goods-item
            a(href="javascript:;")
                div.top-goods-title 免卡专区
                div.top-goods-desc 60分钟月月免费送
                img(src="/static/images/top-good.png")
        div.top-goods-item
            a(href="javascript:;")
                div.top-goods-title 免卡专区
                div.top-goods-desc 60分钟月月免费送
                img(src="/static/images/top-good.png")
        div.top-goods-item
            a(href="javascript:;")
                div.top-goods-title 免卡专区
                div.top-goods-desc 60分钟月月免费送
                img(src="/static/images/top-good.png")
    a.top-gift(href="javascript:;")
        img(src="/static/images/gift.jpg")
    div.channels-title 九阴道具专区
    div.channels-box.clearfix
        div.channels-item(v-link="'/goods'")
            div.channels-icon 热卖
            img.channels-img(src="/static/images/channels-img.png")
            div.channels-item-title 60手机免卡
            div.channels-item-price ￥ 45
        div.channels-item(v-link="'/goods'")
            img.channels-img(src="/static/images/channels-img.png")
            div.channels-item-title 60手机免卡
            div.channels-item-price ￥ 45
        div.channels-item(v-link="'/goods'")
            img.channels-img(src="/static/images/channels-img.png")
            div.channels-item-title 60手机免卡
            div.channels-item-price ￥ 45
        div.channels-item(v-link="'/goods'")
            img.channels-img(src="/static/images/channels-img.png")
            div.channels-item-title 60手机免卡
            div.channels-item-price ￥ 45
    div.back-top.iconfont &#xe600;
    div.footer-margin
    footer.footer-nav
        div.footer-home.iconfont.sel &#xe603;
            div.footer-text 商城
            div.footer-num 1
        div.footer-channels.iconfont &#xe602;
            div.footer-text 分类
        div.footer-cart.iconfont &#xe601;
            div.footer-text 购物车
        div.footer-me.iconfont &#xe604;
            div.footer-text 我
</template>
<style lang="stylus">
@import 'index.styl'
</style>
<script>
    import $ from 'jquery'
    import S from 'swiper'
    var getPx = (px) => {
      return px * document.documentElement.clientWidth/750;
    };
    export default {
        methods: {
            /*this.$route.router.go({
                    'path': '/confirm'
                });*/
        },
        ready() {
            var sp = new S('.swiper-container', {
                pagination: '.pagination',
                loop: true,
                autoplay: 4000,
                calculateHeight: true,
                paginationClickable: true
            });
        },
        data() {
            return {}
        }
}
</script>