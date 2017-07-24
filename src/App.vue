<template>
  <div @androidback="back">
    <navTop v-if="navTitle.boolean" :tetle="navTitle"></navTop>
    <router-view  style="flex:1"></router-view>
    <navBat v-if="navBboolean" :navBot="navBab1"></navBat>
  </div>
</template>

<script>
  import navTop from './components/lemonMd/navTop.vue'
  import navBat from './components/lemonMd/navBtn.vue'
  const modal = weex.requireModule('modal')
  export default {
    components:{
        navTop,
        navBat
    },
    computed:{
        startT(){     //导航栏状态
            return  this.$store.state.startT
        },
        navTitle(){    //标题栏数据
            return this.$store.state.navTitle
        },
        navBab1(){     //导航栏数据
            return this.$store.state.navBab
        },
        navBboolean(){  //导航栏状态
            return this.$store.state.navBabboolean
        }

    },
    methods: {
      back: function () {
        this.$router.back()
      }
    },
    created(){

//        获取设备属性
        this.$store.state.appState.weexVersion = this.$getConfig().env.weexVersion,
        this.$store.state.appState.appName = this.$getConfig().env.appName
        this.$store.state.appState.appVersion = this.$getConfig().env.appVersion
        this.$store.state.appState.platform = this.$getConfig().env.platform
        this.$store.state.appState.osVersion = this.$getConfig().env.osVersion
        this.$store.state.appState.deviceModel = this.$getConfig().deviceModel
        this.$store.state.appState.deviceWidth = this.$getConfig().env.deviceWidth
        this.$store.state.appState.edeviceHeight = this.$getConfig().env.deviceHeight


    },
    mounted(){
        console.log('设备状态',this.$store.state.appState)
    },


  }
</script>
