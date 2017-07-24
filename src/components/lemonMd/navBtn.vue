<template>
    <div class="navBtn">
        <div class="tba1" v-for="int in navBab1" asd ='123'  @click="tba(int.router,int.topBoolean,int.imgA,int.text1,int.text2)" >
            <div v-if="int.router ==  thisRouter">
                <image class="navBtnImg"  :src="int.img"></image>
                <text class="nav1" :style="{color: int.botColor}">{{int.text}}</text>
            </div>
            <div v-else="">
                <image class="navBtnImg"  :src="int.img1"></image>
                <text class="nav2" :style="{color:int.botColor1}">{{int.text}}</text>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props:['navBot'],
        data(){
            return{
                tabT:"",
                tabT1:1,
//                导航栏字体颜色，1默认2 选中
                botColor:this.$store.state.navBotColorOn,
                botColor1:this.$store.state.navBotColorTn
            }
        },
        methods:{
            tba:function (a,b,c,d,e) {
                this.$router.push(a)
                this.tabT = a;
                if (a == '/lemonD'){
                    this.$store.state.navTop = false
                }else{
                    this.$store.state.navTop = true
                }
                console.log('bug',a,b,c,d,e)
                this.$store.state.navTitle = {    //标题栏属性
                    boolean:b,
                    imgA:c,
                    text1:d,
                    text2:e
                }
            }
        },
        computed:{
            navBab1(){     //导航栏数据
                return this.$store.state.navBab
            },
            thisRouter(){
                return this.$store.state.thisRouter
            }
        },
        mounted(){
          console.log('sds',this.$store.state.navBab)
        },
        watch:{
            tabT1:function () {
              alert(1)
            },
            tabT:function () {
                this.$store.state.thisRouter = this.tabT
            }
        }
    }
</script>

<style scoped>
    .navBtn{
        height: 120px;
        background-color: #fff;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        box-shadow: -2px -2px 10px #bfbfbf;
    }
    .tba1{
        height: 120px;
        flex: 1;
        display: flex;
        flex-direction:row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color:#ffd72d;
        flex-direction: column;
    }
    .nav1{
        width: 60px;
        font-size: 25px;
        text-align: center;
        /*text-shadow: 3px 3px 10px #2c2c2c ;*/
    }
    .nav2{
        width: 60px;
        text-align: center;
        font-size: 25px;
        /*text-shadow: 3px 3px 10px #2c2c2c ;*/
    }
    .navBtnImg{
        margin-top: 5px;
        margin-bottom: 5px;
        width: 60px;
        height: 60px;
        /*background-color: #333333;*/
    }
</style>

