<template>
    <div>
        <image class="img1" :style="{height:lemonHight,width:lemonWidth}" :src="img"></image>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                img:'http://img.hb.aicdn.com/91ca9b9b6df59ef9cf8332b805585902ae5b907e2b6a5-hAwgIj_fw658'
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