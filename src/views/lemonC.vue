<template>
    <div>
        <text>数据驱动，是不是也很优雅</text>
    </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        components:{
        },
        computed:{
            lemonWidth(){   //屏幕宽度
                return this.$store.state.appState.deviceWidth/this.$store.state.appState.deviceWidth *750  + 'px'
            },
            lemonHight(){   //屏幕高度
                return this.$store.state.appState.edeviceHeight/this.$store.state.appState.deviceWidth *750 + 'px'
            }
        },
    }
</script>
<style scoped>

</style>