package com.test;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;

public class Test {
    public static void main(String args[]){
        PropertyConfigurator.configure("log4j.properties");
        Logger logger=Logger.getLogger(Test.class);
        logger.debug("debug");
        logger.info("info");
        logger.warn("warn");
        logger.error("error");
        System.out.println("print");
    }
}
