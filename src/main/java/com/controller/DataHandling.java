package com.controller;

import com.DataEntity.DataTableRequest;
import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableResponse;
import com.Units.DataTableUnits;
import com.alibaba.fastjson.JSON;
import com.service.Pr01Service;
import com.service.Pr02Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;


@Controller
@RequestMapping("/data")
public class DataHandling {

    @Autowired
    private Pr01Service pr01Service;

    @Autowired
    private Pr02Service pr02Service;

    @RequestMapping(value = "/require/header",method = RequestMethod.POST)
    @ResponseBody
    public DataTableResponse requireHeader(@RequestBody DataTableRequest dbr){
        DataTableUnits.orderChange(dbr);
        DataTableResponse dtResponse = pr01Service.dtSelect(dbr);
        return dtResponse;
    }

    @RequestMapping(value = "/require/detail",method = RequestMethod.POST)
    @ResponseBody
    public DataTableResponse requireDetail(@RequestBody DataTableRequest_require_detail dbr, HttpServletRequest request){
        HttpSession session = request.getSession();
        Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
        List<String> auth = authority.get("01");
        DataTableUnits.orderChange(dbr);
        DataTableResponse dtResponse = pr02Service.dtSelect(dbr,auth);
        return dtResponse;
    }
}
