package com.controller;

import com.DataEntity.DataTableRequest;
import com.DataEntity.DataTableResponse;
import com.Units.DataTableUnits;
import com.service.Pr01Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/data")
public class DataHandling {

    @Autowired
    private Pr01Service pr01Service;

    @RequestMapping(value = "/require/header",method = RequestMethod.POST)
    @ResponseBody
    public DataTableResponse requireHeader(@RequestBody DataTableRequest dbr){
        DataTableUnits.orderChange(dbr);
        DataTableResponse dtResponse = pr01Service.dtSelect(dbr);
        System.out.println(dtResponse);
        return dtResponse;
    }
}
