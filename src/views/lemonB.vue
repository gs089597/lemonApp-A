<template>
    <div>
        <text>组件化的开发方式是很优雅的</text>
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