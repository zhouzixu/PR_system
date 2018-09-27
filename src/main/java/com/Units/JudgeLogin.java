package com.Units;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

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
}
