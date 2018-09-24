package com.test;

import com.alibaba.fastjson.JSON;
import com.service.Impl.UserInfoService;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/spring/spring-mybatis.xml"})
public class Test {

    private static Logger logger=Logger.getLogger(Test.class);

    @Autowired
    private UserInfoService userInfoService;

    @org.junit.Test
    public void test(){
        logger.info(JSON.toJSONString(userInfoService.getAllInfo("ADMIN")));
        System.out.println(JSON.toJSONString(userInfoService.getAllInfo("ADMIN")));
    }

}
