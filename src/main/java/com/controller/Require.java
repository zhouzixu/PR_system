package com.controller;

import com.Units.*;
import com.alibaba.fastjson.JSON;
import com.model.Pr01;
import com.model.Pr01Key;
import com.model.Pr04;
import com.model.Unit;
import com.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
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

    @Autowired
    private Pr02Service pr02Service;

    @RequestMapping("/header")
    public String requireHeader(HttpServletRequest request){
        return JudgeLogin.judge(request,"pur_require_header","login");
    }

    @RequestMapping(value = "/detail")
    public String requireDetail(HttpServletRequest request, Model model){
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String result = JudgeLogin.judge(request,"pur_require_detail","login");
        model.addAttribute("prno",prno);
        model.addAttribute("revision",revision);
        return result;
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

    //香港訂單導入
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

    @RequestMapping(value = "/header/completeRequire",method = RequestMethod.POST)
    @ResponseBody
    public String completeRequire(HttpServletRequest request){
        HttpSession session = request.getSession();
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String issue = request.getParameter("issue");
        String projtype = request.getParameter("projtype");
        String prsno = request.getParameter("prsno");
        String uid = (String) session.getAttribute("uid");
        Date now = new Date();
        if (issue.equals(uid)){
            Pr01 pr01 = new Pr01();
            pr01.setPrno(prno);
            pr01.setRevision(revision);
            pr01.setAcomdate(now);
            pr01.setStatus("O");
            pr01Service.updateOfChose(pr01);
            if (pr02Service.getDataNum(prno,revision)!=0){
                pr02Service.updateOfChose(prno,revision,prsno,projtype,now);
            }
            return "success";
        }else {
            return "fail";
        }
    }

    //獲得要求表的詳細信息頁的數據
    @RequestMapping(value = "/detail/getData")
    @ResponseBody
    public Pr01 require_detail_getData(HttpServletRequest request){
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        Pr01 pr01 = pr01Service.getDataByPrimaryKey(prno,revision);
        return pr01;
    }

    @RequestMapping(value = "/detail/getItemNo",method = RequestMethod.POST)
    @ResponseBody
    public List<String> getItemNo(){;
        return pr02Service.getItemNo();
    }

    @RequestMapping(value = "/detail/getUnit",method = RequestMethod.POST)
    @ResponseBody
    public List<String> getUnit(){
        return pr02Service.getUnit();
    }

    @RequestMapping(value = "/detail/getNewSeqNo",method = RequestMethod.POST)
    @ResponseBody
    public String getNewSeqno(HttpServletRequest request){
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        Pr01Key pr01Key = new Pr01Key();
        pr01Key.setPrno(prno);
        pr01Key.setRevision(revision);
        String num = pr02Service.getNewSeqNo(pr01Key);
        return num;
    }

    @RequestMapping(value = "/detail/getDesc1",method = RequestMethod.POST)
    @ResponseBody
    public String getDesc1(@RequestParam("itemNo") String itemNo){
        return pr02Service.getItemDesc1(itemNo);
    }

    @RequestMapping(value = "/detail/pr02/add",method = RequestMethod.POST)
    @ResponseBody
    public String pr02Add(HttpServletRequest request){
        return pr02Service.add(request);
    }

    @RequestMapping(value = "/detail/pr02/update",method = RequestMethod.POST)
    @ResponseBody
    public String pr02Update(HttpServletRequest request){
        return pr02Service.update(request);
    }

    @RequestMapping(value = "/detail/pr02/del",method = RequestMethod.POST)
    @ResponseBody
    public String pr02Del(HttpServletRequest request){

        return pr02Service.del(request);
    }

    @RequestMapping(value = "/pr04/getSeqnoAndItemNo",method = RequestMethod.POST)
    @ResponseBody
    public List<Map<String,String>> getSeqnoAndItemNo(@RequestParam("prno") String prno){
        return pr02Service.getAllByPrimaryKey(prno);
    }

    @RequestMapping(value = "/pr04/getPr04Seqno",method = RequestMethod.POST)
    @ResponseBody
    public String getNewPr04Seqno(@RequestParam("prno") String prno){
        return pr02Service.get_new_pr04_seqno(prno);
    }

    @RequestMapping(value = "/pr04/add",method = RequestMethod.POST)
    @ResponseBody
    public String pr04Add(HttpServletRequest request){
        int num = pr02Service.pr04Add(request);
        if (num==1){
            return "success";
        }else{
            return "fail";
        }
    }

    @RequestMapping(value = "/pr04/update",method = RequestMethod.POST)
    @ResponseBody
    public String pr04Update(HttpServletRequest request){
        int num = pr02Service.pr04Update(request);
        if (num==1){
            return "success";
        }else{
            return "fail";
        }
    }

    @RequestMapping(value = "/pr04/del",method = RequestMethod.POST)
    @ResponseBody
    public String pr04Delete(HttpServletRequest request){
        int num = pr02Service.pr04Delete(request);
        if (num == 1) {

            return "success";
        }else{
            return "fail";
        }
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
