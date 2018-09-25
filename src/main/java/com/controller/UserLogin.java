package com.controller;

import com.model.UserProfileWithBLOBs;
import com.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserLogin {

    @Autowired
    private UserInfoService userInfoService;

    @RequestMapping("/")
    public String welcome(){
        return "login";
    }

    @RequestMapping("/login")
    public String welcome1(){
        return "login";
    }

    @RequestMapping(value = "/identify",method = RequestMethod.POST)
    @ResponseBody
    public Map login(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("region") String region) {
        UserProfileWithBLOBs user = userInfoService.getAllInfo(username.toUpperCase());
        System.out.println(password);
        System.out.println(user.getPwd());
        Map map = new HashMap();
        if (!password.equals(user.getPwd())){
            map.put("status","fail");
            map.put("info","密碼錯誤");
        }else if (user.getIsexpire().equals("Y")){
            map.put("status","fail");
            map.put("info","賬戶已失效，請聯繫管理員");
        }else if (user.getStatus().equals("N")){
            map.put("status","success");
        }
        return map;
    }

    @RequestMapping(value = "/index")
    public String index(){
        return "pur_index";
    }



}
