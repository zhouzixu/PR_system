package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Map;

@Controller
@RequestMapping("/data")
public class DataHandling {

    @RequestMapping("/require/header")
    @ResponseBody
    public Map requireHeader(){
        return null;
    }
}
