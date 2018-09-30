package com.controller;

import com.Units.JudgeLogin;
import com.alibaba.fastjson.JSON;
import com.service.DepGroupService;
import com.service.DepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("/require")
public class Require {

    @Autowired
    private DepService depService;

    @Autowired
    private DepGroupService depGroupService;

    @RequestMapping("/header")
    public String requireHeader(HttpServletRequest request){
        return JudgeLogin.judge(request,"pur_require_header","login");
    }

    @RequestMapping(value = "/header/dep")
    @ResponseBody
    public List<String> depCode(){
        List<String> list=depService.findAllDepCode();
        return list;
    }

    @RequestMapping("/header/group")
    @ResponseBody
    public List<String> depGroup(@RequestParam("dep")String dep){
        List<String> list =depGroupService.findAllGroup(dep);
        System.out.println(JSON.toJSONString(list));
        return list;
    }
}
