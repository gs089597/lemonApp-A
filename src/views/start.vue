<template>
    <div class="start" >
        <slider class="slider">
            <pageA></pageA>
            <pageB></pageB>
            <pageC></pageC>
        </slider>
        <div class="btn" @click="onStart">
            <text class="btnText"   >跳过</text>
        </div>
    </div>
</template>
<style scoped>
    .start{
        flex: 1;
        position: relative;
    }
    .btn{
        width: 160px;
        height: 50px;
        line-height: 50px;
        /*background-color: black;*/
        border-width: 1px;
        border-style: solid;
        border-color: #333;
        border-radius: 10px;
        position: absolute;
            top: 80px;
            right: 60px;
        z-index: 10;
        float: left;

    }
    .btnText{
        color: #333;
        text-align: center;
        line-height: 50px;
    }
    .slider{
        position: relative;
            top: 1px;
       flex: 1;
       background-color: #fff;
    }
    .image1{
        width: 300px;
        height: 300px;
    }

</style>
<script>
    const modal = weex.requireModule('modal')
    import pageA from './startData/startA.vue'
    import pageB from './startData/startB.vue'
    import pageC from './startData/startC.vue'
    export default {
       data(){
           return{
               imgData:{
                   img1:"http://img.hb.aicdn.com/25ffa74fddd78f05cdc2bc5716723972b6e2f1cc6f6bc-JiUcKo_fw658",
                   img2:"http://img.hb.aicdn.com/5a8aaa39b011a91269ad6c252fc76c95c8e96ded3c98e-cnvyyA_fw658",
                   img3:'http://img.hb.aicdn.com/38d2f90126ff64b6f87b83d3910cca92a3c97949e890-d7wViH_fw658',
               }
           }
       },
       components:{
           pageA,
           pageB,
           pageC
       },
       computed:{
           lemonWidth(){
               return this.$store.state.appState.deviceWidth/this.$store.state.appState.deviceWidth *750  + 'px'
           },
           lemonHight(){
               return this.$store.state.appState.edeviceHeight/this.$store.state.appState.deviceWidth *750 + 'px'
           }
       },
       methods:{
           onStart:function () {
               this.$store.state.startTitle = false
               this.$store.state.navTitle.boolean = true
               this.$store.state.navBabboolean = true
               this.$router.push('/lemonA')
               modal.toast({ message: '跳出引导页面'  , duration: 1 });

           }

       },
        created(){

       }


    }
</script>