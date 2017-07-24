<template>
    <div>
        <div >
            <start v-if="this.$store.state.startTitle"></start>
            <text>UI</text>
        </div>
    </div>
</template>

<script>
    import start from './start.vue'
    export default {
        data(){
          return {
              img:'http://img.hb.aicdn.com/25ffa74fddd78f05cdc2bc5716723972b6e2f1cc6f6bc-JiUcKo_fw658'
          }
        },
        components:{
            start
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