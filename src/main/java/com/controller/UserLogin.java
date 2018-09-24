package com.controller;

import com.model.UserProfileWithBLOBs;
import com.service.Impl.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserLogin {

    @Autowired
    private UserInfoService userInfoService;

    @RequestMapping("/")
    public String index1(){
        return "login";
    }

    @RequestMapping("/login")
    public String index(){
        return "login";
    }

    @RequestMapping("/ideatify")
    @ResponseBody
    public UserProfileWithBLOBs login(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("region") String region) {
        System.out.println(username);
        System.out.println(password);
        System.out.println(region);
        UserProfileWithBLOBs user = userInfoService.getAllInfo(username);
        return user;
    }



}
