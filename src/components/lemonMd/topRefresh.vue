<template>
    <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="indicator">拼命加载中...</text>
    </refresh>
</template>

<script>
    const modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                refreshing: false
            }
        },
        methods: {
//            释放之后
            onrefresh (event) {
                console.log('is refreshing')
                modal.toast({ message: 'refresh', duration: 1 })
                this.refreshing = true
                setTimeout(() => {
                    this.refreshing = false
                }, 2000)
            },
//            向下滑动触发
            onpullingdown (event) {
                console.log('is onpulling down',event)
                modal.toast({ message: '滑动：pulling down'+event, duration: 1 })
            }
        }
    }
</script>
<style scoped>
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
</style>