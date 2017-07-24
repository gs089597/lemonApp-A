<template>
    <loading class="loading" @loading="onloading" :display="showLoading">
        <text class="indicator">Loading ...</text>
    </loading>
</template>

<script>
    const modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                showLoading: 'hide'
            }
        },
        methods: {
            onloading (event) {
                modal.toast({ message: 'loading', duration: 1 })
                this.showLoading = 'show'
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 1500)
            }
        }
    }
</script >
<style scoped>
    .indicator {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
</style>