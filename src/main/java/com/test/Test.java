package com.test;

import com.DataEntity.Column;
import com.DataEntity.DataTableRequest;
import com.DataEntity.Order;
import com.DataEntity.Search;
import com.Units.DataTableUnits;
import com.Units.ReadIniInfo;
import com.alibaba.fastjson.JSON;
import com.dao.Pr01Mapper;
import com.dao.UserProfileMapper;
import com.model.Pr01;
import com.model.Pr01Key;
import com.model.UserProfileWithBLOBs;
import com.service.GroupInfoService;
import com.service.UserInfoService;
import com.service.UserInfoService;
import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:config/spring/spring-mybatis.xml"})
public class Test {

    private static Logger logger=Logger.getLogger(Test.class);

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private GroupInfoService groupInfoService;

    @Autowired
    private UserProfileMapper userProfileMapper;

    @Autowired
    private Pr01Mapper pr01Mapper;

    @org.junit.Test
    public void test(){
//        logger.info(JSON.toJSONString(userInfoService.getAllInfo("ADMIN")));
//        System.out.println(JSON.toJSONString(userInfoService.getAllInfo("ADMIN")));
        String temp=groupInfoService.getAllInfo("QA部").getIni();
        System.out.println(JSON.toJSONString(ReadIniInfo.getini(temp)));
//        String[] arrays=temp.split("\r\n");
//        for (String str:arrays){
//            if (str.trim().matches("^\\S+=.*$")){
//                int i = str.indexOf("=");
//                String key = str.substring(0,i).trim();
//                String value=str.substring(i+1).trim();
//                System.out.println(key+","+value);
//            }
//        }
    }

    @org.junit.Test
    public void test1() throws UnsupportedEncodingException {
//        List<UserProfileWithBLOBs> list = userProfileMapper.findAll();
//        for (UserProfileWithBLOBs userProfileWithBLOBs:list){
//            System.out.println(JSON.toJSONString(userProfileWithBLOBs));
//        }
        Pr01Key key = new Pr01Key();
        key.setPrno("PR00002085");
        key.setRevision("0");
        System.out.println(pr01Mapper.deleteByPrimaryKey(key));
    }



}
