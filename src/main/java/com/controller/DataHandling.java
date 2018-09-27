package com.controller;

import com.DataEntity.DataTableRequest;
import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Controller
@RequestMapping("/data")
public class DataHandling {

    @RequestMapping(value = "/require/header",method = RequestMethod.POST)
    @ResponseBody
    public Map requireHeader(@RequestBody DataTableRequest dbr){
        System.out.println(JSON.toJSONString(dbr));
        return null;
    }
}
