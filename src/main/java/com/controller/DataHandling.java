package com.controller;

import com.DataEntity.DataTableRequest;
import com.Units.DataTableUnits;
import com.alibaba.fastjson.JSON;
import com.model.Pr01;
import com.service.Pr01Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/data")
public class DataHandling {

    @Autowired
    private Pr01Service pr01Service;

    @RequestMapping(value = "/require/header",method = RequestMethod.POST)
    @ResponseBody
    public Map requireHeader(@RequestBody DataTableRequest dbr){
        System.out.println(JSON.toJSONString(dbr));
        DataTableUnits.orderChange(dbr);
        System.out.println(JSON.toJSONString(dbr));
        List<Pr01> pr01 = pr01Service.dtSelect(dbr);
        for (Pr01 pr:pr01){
            System.out.println(JSON.toJSONString(pr));
        }
        System.out.println(22222);
        System.out.println(1111);
        return null;
    }
}
