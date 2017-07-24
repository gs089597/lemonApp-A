<template>
    <div>
        <!--<start v-if="this.$store.state.startTitle"></start>-->
        <start v-if="this.$store.state.startTitle"></start>
        <slider v-else="" style="flex:1">
            <lemonA></lemonA>
            <lemonB></lemonB>
            <lemonC></lemonC>
            <lemonD></lemonD>
        </slider>
    </div>
</template>

<script>
    import start from './start.vue'
    import lemonA from './lemonA.vue'
    import lemonB from './lemonB.vue'
    import lemonC from './lemonC.vue'
    import lemonD from './lemonD.vue'
    export default {
        data(){
            return {
            }
        },
        components:{
            lemonA,
            lemonB,
            lemonC,
            lemonD,
            start
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