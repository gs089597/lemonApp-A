package com.example.weex.hackernews;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

/**
 * Created by admin on 2017/7/19.
 */

public class BarUtils {
    public static void setStatusBar(Activity activity) {
        Window window = activity.getWindow();
        //清除系统提供的默认保护色
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);//状态栏
//        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);//导航栏

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            //设置系统UI的显示方式
            window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
//                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION//导航栏
//                    | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR//浅色状态栏标志位API 23
                    | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
            //添加属性可以自定义设置系统工具栏颜色
            window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
//            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);//导航栏
            window.setStatusBarColor(Color.TRANSPARENT);
//            window.setNavigationBarColor(Color.TRANSPARENT);//导航栏
        } else {
            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
//            window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);//导航栏
        }
    }

    public static int getStatusBarHeight(Context context) {
        int resourceId = context.getResources().getIdentifier("status_bar_height", "dimen", "android");
        return context.getResources().getDimensionPixelSize(resourceId);
    }
}
