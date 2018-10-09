package com.test;

import com.DataEntity.*;
import com.Units.DataTableUnits;
import com.Units.DateUtil;
import com.Units.ReadIniInfo;
import com.alibaba.fastjson.JSON;
import com.dao.Pr01Mapper;
import com.dao.UserProfileMapper;
import com.model.Pr01;
import com.model.Pr01Key;
import com.model.UserProfileWithBLOBs;
import com.service.*;
import com.service.UserInfoService;
import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
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

    @Autowired
    private Pr01Service pr01Service;

    @Autowired
    private Pr02Service pr02Service;

    @org.junit.Test
    public void test() throws ParseException {
        Pr01 pr01 = new Pr01();
        pr01.setPrno(pr01Service.getNewPrno());
        pr01.setRevision("0");
        pr01.setIssue("ADMIN");
        pr01.setFromdep("經理部");
        pr01.setTodep("R&D");
        pr01.setTogroup("N/A");
        pr01.setEcomdate(DateUtil.StringToDate("2018-10-05"+" "+"00:00:00"));
        pr01.setProjtype("HAR");
        pr01.setMsglevel("0");
        int num=pr01Service.insertOfChose(pr01);
        System.out.println(num);
        System.out.println(DateUtil.StringToDate("2018-10-05"+" "+"00:00:00"));
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

    @org.junit.Test
    public void test2(){

        DataTableRequest_require_detail dt = new DataTableRequest_require_detail();
        Order order = new Order();
        order.setDir("asc");
        order.setColumn(0);
        order.setRealColumn("SEQNO");
        List<Order> list = new ArrayList<>();
        list.add(order);
        Search search = new Search();
        search.setRegex(false);
        search.setValue("");
        dt.setDraw(1);
        dt.setOrders(list);
        dt.setPrno("PR00036624");
        dt.setRevision("0");
        dt.setStart(0);
        dt.setLength(10);
//        System.out.println(JSON.toJSONString(pr02Service.dtSelect(dt)));
    }

}
