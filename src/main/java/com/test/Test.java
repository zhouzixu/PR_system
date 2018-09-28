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
import com.model.UserProfileWithBLOBs;
import com.service.GroupInfoService;
import com.service.UserInfoService;
import com.service.UserInfoService;
import org.apache.log4j.Logger;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

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
    public void test1(){
//        List<UserProfileWithBLOBs> list = userProfileMapper.findAll();
//        for (UserProfileWithBLOBs userProfileWithBLOBs:list){
//            System.out.println(JSON.toJSONString(userProfileWithBLOBs));
//        }
        Search search = new Search();
        search.setValue("PR00002085");
        search.setRegex(false);

        Column column = new Column();
        column.setData("PRNO");
        column.setName("");
        column.setSearchable(true);
        column.setOrderable(true);
        column.setSearch(search);

        Column column1 = new Column();
        column1.setData("REVISION");
        column1.setName("");
        column1.setSearchable(true);
        column1.setOrderable(true);
        column1.setSearch(search);

        List<Column> list = new ArrayList<Column>();
        list.add(column);
        list.add(column1);

        Order order = new Order();
        order.setColumn(0);
        order.setDir("asc");

        Order order1 = new Order();
        order1.setColumn(1);
        order1.setDir("desc");
        List<Order> list1 = new ArrayList<Order>();
        list1.add(order);
        list1.add(order1);

        DataTableRequest da = new DataTableRequest();
        da.setDraw(1);
        da.setLength(100);
        da.setStart(0);
        da.setSearch(search);
        da.setColumns(list);
        da.setOrders(list1);
        da=DataTableUnits.orderChange(da);
        List<Pr01> list2 = pr01Mapper.dataTableSelect(da);
        int i=0;
        for (Pr01 pr01:list2){
            i++;
            System.out.println(JSON.toJSONString(pr01));
        }
        System.out.println("count:"+i);

    }

}
