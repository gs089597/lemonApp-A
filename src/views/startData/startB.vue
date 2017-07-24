<template>
    <div>
        <image class="img1" :style="{height:lemonHight,width:lemonWidth}" :src="img"></image>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                img:'http://img.hb.aicdn.com/5a8aaa39b011a91269ad6c252fc76c95c8e96ded3c98e-cnvyyA_fw658'
            }
        },
        computed:{
            lemonWidth(){
                return this.$store.state.appState.deviceWidth/this.$store.state.appState.deviceWidth *750  + 'px'
            },
            lemonHight(){
                return this.$store.state.appState.edeviceHeight/this.$store.state.appState.deviceWidth *750 + 'px'
            }
        },
    }
</script>
<style scoped>

</style>