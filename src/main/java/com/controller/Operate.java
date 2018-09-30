package com.controller;

import com.Units.JudgeLogin;
import com.service.Pr01Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class Operate {


    @Autowired
    private Pr01Service pr01Service;

    @RequestMapping("/delete/require/header")
    @ResponseBody
    public String pr01_header_del(HttpServletRequest request){
        HttpSession session = request.getSession();
        String section = request.getParameter("num");
        String auth = request.getParameter("authority");
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        System.out.println(section+" "+auth+" "+prno+" "+revision);
        if (JudgeLogin.judge(session)){
            Map<String,List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
            List<String> rights = authority.get(section);
            if (rights.contains("ALL")||rights.contains(auth)){
                int result = pr01Service.delData(prno,revision);
                if (result==1){
                    return "success";
                }else{
                    return "fail";
                }
            }else{
                return "noAuthority";
            }
        }
        return "noLogin";
    }
}
