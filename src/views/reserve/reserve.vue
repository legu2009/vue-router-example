<template lang="jade">
div.vreserve
    header.header
        div.header-left
            a(v-touch:tap="history.go(-1)")
                img.ib(src="http://m.mall.snail.com/globalCard/images/head-left.png")
        div.header-title 预定信息
    top-step(:name="['选择行程', '实名认证', '订单确认']")
    group
        datetime(title="出国时间", confirm-text="确认", cancel-text="取消")
        datetime(title="回国时间", confirm-text="确认", cancel-text="取消")
    group
        x-number(title="设备数量", :value=0, :min=0, :max=10)
    group.airport-choose
        popup-picker(title="选择机场", :value="playList")
        a.weui_cell(href="javascript:")
            div.weui_cell_bd.weui_cell_primary.airport-info
                p T1航站楼3楼G岛岛尾
                p 联系人：陈小姐
                p 联系电话：17091257222
                p 营业时间：08:00 — 21:00
    div.footer-margin.footer-btn
    footer.footer-btn
        a(v-link="'/auth'") 下一步
</template>
<script>
    import S from 'swiper'
    import $ from 'jquery'
    import Group from 'VUX/group/index.vue'
    import Datetime from 'VUX/datetime/index.vue'
    import XNumber from 'VUX/x-number/index.vue'
    import PopupPicker from 'VUX/popup-picker/index.vue'
    import TopStep from 'COMPONENT/top-step.vue'
    import Vue from 'vue'
    Vue.use(require('vue-touch'));
    export default {
        components: {
            Group,
            Datetime,
            XNumber,
            PopupPicker,
            TopStep
        },
        route: {
            waitForData: true,
            data: (transition) => {
                transition.next({
                    "goodsId": "742579"
                });
            }
        },
        ready() {
            
        },
        data() {
            return {
                goodsId: ""
            }
        }
    } 
</script>
