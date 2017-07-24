<template>
    <div>
        <image  resize="cover" class="image" :src="img1"></image>
        <text>bug</text>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                img1:'http://img.hb.aicdn.com/027c9d7f752e8f7ffb2883b5c505bfb80b359e9124a48-JIfsfW_fw658'
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
    .image{
        fill: 1;
        height: 360px;
        /*border-bottom-right-radius: 15px;*/
        /*border-bottom-left-radius: 15px;*/
    }
</style>