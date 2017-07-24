// import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

// Vuex is auto installed on the web
if (WXEnvironment.platform !== 'Web') {
  Vue.use(Vuex)
}

const store = new Vuex.Store({
    state:{
      appState:{     //设备属性
          weexVersion:"",  //weex版本
          appName:"",       //app名称
          appVersion:"",    //应用版本
          platform:"",      //平台信息，是 iOS、Android 还是 Web
          osVersion:"",     //系统版本
          deviceModel:"",   //设备型号
          deviceWidth:'',   //设备宽度
          deviceHeight:''   //设备高度
      },
      startTitle:true,     //启动页状态
      navTitle:{    //标题栏属性
          boolean:false,
          imgA:"http://img.hb.aicdn.com/f94325d0287bee9013951147cdda8eda76e0879031e5-zMnW7R_fw658",
          text1:"首页",
          text2:"关注"
      },
      navBabboolean:false,
      navBab:[    //导航栏属性
              {
                  router:"/lemonA",   //路由
                  img1:"http://img.hb.aicdn.com/654be5a097dba573e765a98ca7b82f9d8b6efb163137-D1kFrq_fw658",    //  未选中图片
                  img:"http://img.hb.aicdn.com/8fd749ca9d3d0032533506d8348ab66d16eb2b952baf-t6xxWv_fw658",      // 选中图片
                  text:'UI',    //    标题文字
                  topBoolean:true,  //   导航栏状态
                  imgA:"http://img.hb.aicdn.com/654be5a097dba573e765a98ca7b82f9d8b6efb163137-D1kFrq_fw658",   //  导航栏图标
                  text1:"首页",  //   导航栏标题
                  text2:"关注",  //   导航栏侧标题
                  botColor1:"#0e0c0d",   // 默认字体颜色
                  botColor:'#fdd72c'    // 选中后颜色
              },
              {
              router:"/lemonB",
              img1:"http://img.hb.aicdn.com/95e0bb6249100bd47daebcd930318582d4f4fc382d69-pY3fjr_fw658",
              img:"http://img.hb.aicdn.com/8fd749ca9d3d0032533506d8348ab66d16eb2b952baf-t6xxWv_fw658",
              text:'组件',
              topBoolean:true,
              imgA:"http://img.hb.aicdn.com/95e0bb6249100bd47daebcd930318582d4f4fc382d69-pY3fjr_fw658",
              text1:"乐高积木",
              text2:"开发",
              botColor1:"#0e0c0d",
              botColor:'#fdd72c'
          },
          {
              router:"/lemonC",
              img1:"http://img.hb.aicdn.com/59e060f8d6d20687a6f6fa21e995df2704c932192e0c-HoIsLD_fw658",
              img:"http://img.hb.aicdn.com/8fd749ca9d3d0032533506d8348ab66d16eb2b952baf-t6xxWv_fw658",
              text:'数据',
              topBoolean:true,
              imgA:"http://img.hb.aicdn.com/59e060f8d6d20687a6f6fa21e995df2704c932192e0c-HoIsLD_fw658",
              text1:"数据",
              text2:"data",
              botColor1:"#0e0c0d",
              botColor:'#fdd72c'
          },
          {
              router:"/lemonD",
              img1:"http://img.hb.aicdn.com/a856481e3cdffe5f9f679130e1a2b543527c9f663228-dClLez_fw658",
              img:"http://img.hb.aicdn.com/8fd749ca9d3d0032533506d8348ab66d16eb2b952baf-t6xxWv_fw658",
              text:'bug',
              topBoolean:false,
              imgA:"http://img.hb.aicdn.com/a856481e3cdffe5f9f679130e1a2b543527c9f663228-dClLez_fw658",
              text1:"bug",
              text2:"修改",
              botColor1:"#0e0c0d",
              botColor:'#fdd72c'
          }
      ],
      thisRouter:'/lemonApp'
    }
})

export default store
