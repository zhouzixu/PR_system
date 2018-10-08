package com.controller;

import com.Units.DateUtil;
import com.Units.JudgeLogin;
import com.Units.ReadIniInfo;
import com.Units.WordUtils;
import com.alibaba.fastjson.JSON;
import com.model.Pr01;
import com.service.DepGroupService;
import com.service.DepService;
import com.service.Pr01Service;
import com.service.ProJTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.text.ParseException;
import java.util.*;

@Controller
@RequestMapping("/require")
public class Require {

    @Autowired
    private DepService depService;

    @Autowired
    private DepGroupService depGroupService;

    @Autowired
    private ProJTypeService proJTypeService;

    @Autowired
    private Pr01Service pr01Service;

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
        return list;
    }

    @RequestMapping("/header/projtype")
    @ResponseBody
    public List<String> projtype(){
        return proJTypeService.findProJType();
    }

    @RequestMapping(value = "/header/addAndUpdate",method =RequestMethod.POST)
    @ResponseBody
    public Map pr01_header_add_and_update(HttpServletRequest request) throws ParseException {
        HttpSession session = request.getSession();
        Map info = new HashMap();

        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String prsno = request.getParameter("prsno");
        String issuename = request.getParameter("issuename");
        String prdate = request.getParameter("prdate");
        String statusmsg = request.getParameter("statusmsg");
        String fromdep = request.getParameter("fromDep");
        String fromgroup = request.getParameter("fromGroup");
        String todep = request.getParameter("toDep");
        String togroup = request.getParameter("toGroup");
        String ecomdate = request.getParameter("ecomdate");
//        String acomdate = request.getParameter("acomdate");
        String msglevel = request.getParameter("msglevel");
        String remark = request.getParameter("remark");
        String projtype = request.getParameter("projtype");
        String operation = request.getParameter("operation");
        String uid = (String)session.getAttribute("uid");
        String isDepAdmin = (String)session.getAttribute("isDepAdmin");
        String depCode = (String)session.getAttribute("depCode");
        Pr01 pr01 = new Pr01();
        pr01.setPrno(prno);
        pr01.setRevision(revision);
        pr01.setPrsno(prsno!=""?prsno:null);
        pr01.setIssue(issuename);
        pr01.setFromdep(fromdep);
        pr01.setFromgroup(fromgroup!=""?fromgroup:null);
        pr01.setTodep(todep!=""?todep:null);
        pr01.setTogroup(togroup!=""?togroup:null);
        pr01.setEcomdate((ecomdate!=""||ecomdate!=null)?DateUtil.StringToDate(ecomdate+" "+"00:00:00"):null);
        pr01.setMsglevel(msglevel!=""?msglevel:null);
        pr01.setProjtype(projtype!=""?projtype:null);
        pr01.setRemark(remark!=""?remark:null);
        if (JudgeLogin.judge(session)) {
            Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
            List<String> rights = authority.get("01");
            if (operation.equals("update")) {
                String username = (String) session.getAttribute("uid");
                if ((rights.contains("ALL") || rights.contains("WRITE"))) {
                    if (!statusmsg.equals("N")){
                        info.put("canOperation","no");
                    }else if (isDepAdmin.equals("N")&&!uid.equals(issuename)){
                        info.put("canOperation","no");
                    }else if (isDepAdmin.equals("Y")&&!fromdep.equals(depCode)){
                        info.put("canOperation","no");
                    }else {
                        info.put("operation", "update");
                        int num = pr01Service.updateOfChose(pr01);
                        if (num == 1) {
                            info.put("result", "success");
                        } else {
                            info.put("result", "fail");
                        }
                        info.put("canOperation", "yes");
                    }
                } else {
                    info.put("canOperation", "no");
                }
            } else if (operation.equals("add")) {
                if (rights.contains("ALL") || rights.contains("ADD")) {
                    info.put("operation", "add");
                    pr01.setPrdate(new Date());
                    int num = pr01Service.insertOfChose(pr01);
                    if (num == 1) {
                        info.put("result", "success");
                    } else {
                        info.put("result", "fail");
                    }
                    info.put("canOperation", "yes");
                } else {
                    info.put("canOperation", "no");
                }
            }
            info.put("isLogin","yes");
        }else{
            info.put("isLogin","no");
        }
        return info;
    }

    @RequestMapping("/header/delete")
    @ResponseBody
    public String pr01_header_del(HttpServletRequest request) {
        HttpSession session = request.getSession();
        String section = request.getParameter("num");
        String auth = request.getParameter("authority");
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String issue = request.getParameter("issue");
        String statusmsg = request.getParameter("status");
        String fromdep = request.getParameter("fromdep");
        String uid = (String)session.getAttribute("uid");
        String isDepAdmin = (String)session.getAttribute("isDepAdmin");
        String depCode = (String)session.getAttribute("depCode");
        if (JudgeLogin.judge(session)) {
            Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
            List<String> rights = authority.get(section);
            if (rights.contains("ALL") || rights.contains(auth)) {
                if (!statusmsg.equals("N")){
                    return "noDelete";
                }else if (isDepAdmin.equals("N")&&!uid.equals(issue)){
                    return "noAuthority";
                }else if (isDepAdmin.equals("Y")&&!fromdep.equals(depCode)){
                    return "noAuthority";
                }else{
                    int result = pr01Service.delData(prno, revision);
                    if (result == 1) {
                        return "success";
                    } else {
                        return "fail";
                    }
                }
            } else {
                return "noAuthority";
            }
        }else {
            return "nologin";
        }
    }

    @RequestMapping(value = "/header/addPrnoNumber",method = RequestMethod.POST)
    @ResponseBody
    public Map addPrnoNumber(HttpServletRequest request){
        HttpSession session = request.getSession();
        Map<String,String> data = new HashMap<String,String>();
        data.put("prno",pr01Service.getNewPrno());
        data.put("revision","0");
        data.put("issue", (String) session.getAttribute("uid"));
        data.put("fromdep", (String) session.getAttribute("depCode"));
        data.put("fromgroup", (String) session.getAttribute("depGroup"));
        data.put("prdate",DateUtil.timeStampToDate(new Date()));
        return data;
    }

    @RequestMapping(value = "/header/uploadFile",method = RequestMethod.POST)
    public String requireFileUpload(@RequestParam("file")CommonsMultipartFile file,HttpServletRequest request)throws Exception,IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()));
        String line=null;
        StringBuilder temp = new StringBuilder();
        while((line=br.readLine())!=null){
            temp.append(line+"\r\n");
        }
        String info = temp.toString();
        System.out.println(JSON.toJSONString(ReadIniInfo.readIniFile(info)));
        return "redirect:/require/header";
    }

    //测试导出word
    @RequestMapping(value = "/test")
    public void test(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Map<String,Object> dataMap = new HashMap<String,Object>();
        List<Map<String,Object>> list = new ArrayList<>();
        for(int i=0;i<15;i++){
            Map<String,Object> map = new HashMap<String,Object>();
            map.put("name","zzx");
            map.put("sex","man");
            map.put("phone","guangdong");
            list.add(map);
        }
        dataMap.put("info",list);
        WordUtils wordUtils = new WordUtils();
        wordUtils.createWord(dataMap,request,response);
    }
}
