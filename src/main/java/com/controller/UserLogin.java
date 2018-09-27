package com.controller;

import com.Units.JudgeLogin;
import com.Units.ReadIniInfo;
import com.model.GProfileWithBLOBs;
import com.model.UserProfileWithBLOBs;
import com.service.GroupInfoService;
import com.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserLogin {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private GroupInfoService groupInfoService;

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
    public Map login(@RequestParam("username") String username, @RequestParam("password") String password, @RequestParam("region") String region, HttpServletRequest request) {
        HttpSession session = request.getSession();

        UserProfileWithBLOBs user = userInfoService.getAllInfo(username.toUpperCase());
        GProfileWithBLOBs group=null;


        Map map = new HashMap();

        if (!password.equals(user.getPwd())){
            map.put("status","fail");
            map.put("info","密碼錯誤");
        }else if (user.getIsexpire().equals("Y")){
            map.put("status","fail");
            map.put("info","賬戶已失效，請聯繫管理員");
        }else if (user.getStatus().equals("N")){
            map.put("status","success");
            //獲取該用戶的所有權限
            group=groupInfoService.getAllInfo(user.getGid());
            Map<String,List<String>> ini = ReadIniInfo.getini(group.getIni());
            //將該用戶的所有信息和權限存放在session中
            session.setAttribute("isAdmin",user.getIsadmin());
            session.setAttribute("isDepAdmin",user.getIsdepadmin());
            session.setAttribute("uid",user.getUid());
            session.setAttribute("depCode",user.getDepcode());
            session.setAttribute("isViewPrice",user.getViewprice());
            session.setAttribute("money",user.getMoney());
            session.setAttribute("rights",ini);
            session.setAttribute("name",user.getName());
            session.setAttribute("isLogin",true);
        }
        return map;
    }

    @RequestMapping(value = "/index")
    public String index(HttpServletRequest request){
        return JudgeLogin.judge(request,"pur_index","login");
    }



}
