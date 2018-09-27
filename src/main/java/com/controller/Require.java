package com.controller;

import com.Units.JudgeLogin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/require")
public class Require {

    @RequestMapping("/header")
    public String requireHeader(HttpServletRequest request){
        return JudgeLogin.judge(request,"pur_require_header","login");
    }
}
