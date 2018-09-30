package com.controller;

import com.Units.JudgeLogin;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class Authority_Judge {

    @RequestMapping("/judgeAuthority")
    @ResponseBody
    public String haveAuthority(@RequestParam("num")String num,@RequestParam("authority")String auth, HttpServletRequest request){
        HttpSession session = request.getSession();
        System.out.println(auth);

        return "no";
    }
}
