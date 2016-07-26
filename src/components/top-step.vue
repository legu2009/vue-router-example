<template lang="jade">
div.top-step-box
    div.top-step-item(v-for="n in len", :class="{'top-step-active': n <= active}")
        span.top-step-circular {{n+1}}
        div.top-step-title(v-if="name[n]") {{name[n]}}
</template>
<script>
    export default {
        props: {
            active: {
                type: Number,
                default() {
                    return 0;
                }
            },
            len: {
                type: Number,
                default() {
                    return 3;
                }
            },
            name: {
                type: Array,
                default () {
                    return []
                }
            }
        }
    }
</script>
<style lang="stylus">
@import "../variables.styl"
.top-step-box
    display flex
    height (120rem/$fz)
    padding-bottom (40rem/$fz)
    background-color #fff
    .top-step-item
        color #979797
        flex 1 0 0
        text-align center
        position relative
        &:before
            display block
            height (4rem/$fz)
            margin-top (-2rem/$fz)
            width 100%
            background #f2f2f2
            content ''
            top 50%
            position absolute
        .top-step-circular
            color #fff
            border-radius 50%
            display block
            width (42rem/$fz)
            height (42rem/$fz)
            line-height (42rem/$fz)
            color #fff
            background-color #f2f2f2
            left 50%
            top 50%
            margin-left (-21rem/$fz)
            margin-top (-21rem/$fz)
            position absolute
            font-size (24rem/$fz)
        .top-step-title
            font-weight 700
            margin-top (90rem/$fz)
            font-size (22rem/$fz)
        &.top-step-active
            color #eb413d
            &:before,.top-step-circular
                background-color #eb413d

</style>