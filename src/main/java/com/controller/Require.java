package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/require")
public class Require {

    @RequestMapping("/header")
    public String requireHeader(){
        return "pur_require_header";
    }
}
