package com.Units;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 判斷登錄工具
 */
public class JudgeLogin {
    public static String judge(HttpServletRequest request,String successPage,String failPage){
        HttpSession session = request.getSession();
        Object flag=session.getAttribute("isLogin");
        if (flag==null){
            return failPage;
        }else if (!(boolean)flag){
            return failPage;
        }else{
            return successPage;
        }
    }

    public static boolean judge(HttpSession session){
        Object flag=session.getAttribute("isLogin");
        if (flag==null){
            return false;
        }else if (!(boolean)flag){
            return false;
        }else{
            return true;
        }
    }
}
