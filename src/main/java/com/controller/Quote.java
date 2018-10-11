package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/quote")
public class Quote {

    @RequestMapping("/index")
    public String quote_index(){
        return "pur_quote";
    }
}
