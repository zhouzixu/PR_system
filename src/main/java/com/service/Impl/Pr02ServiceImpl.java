package com.service.Impl;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableResponse;
import com.Units.DateUtil;
import com.alibaba.fastjson.JSON;
import com.dao.Pr02Mapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.model.Pr02;
import com.model.Pr02WithBLOBs;
import com.service.Pr02Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class Pr02ServiceImpl implements Pr02Service {

    @Autowired
    Pr02Mapper pr02Mapper;


    @Override
    public int updateOfChose(String prno, String revision, String prsno, String projtype, Date time) {
        Pr02WithBLOBs pr02WithBLOBs = new Pr02WithBLOBs();
        pr02WithBLOBs.setPrno(prno);
        pr02WithBLOBs.setRevision(revision);
        pr02WithBLOBs.setPrsno(prsno);
        pr02WithBLOBs.setProjtype(projtype);
        pr02WithBLOBs.setDeliverdate(time);
        return pr02Mapper.updateByPrimaryKeySelective(pr02WithBLOBs);
    }

    @Override
    public int getDataNum(String prno,String revision) {
        Pr02 pr02 = new Pr02();
        pr02.setPrno(prno);
        pr02.setRevision(revision);
        return pr02Mapper.getDataNum(pr02);
    }

    @Override
    public DataTableResponse dtSelect(DataTableRequest_require_detail dataTableRequest,List<String> auth) {

        int start = dataTableRequest.getStart();
        int length = dataTableRequest.getLength();

        PageHelper.startPage((start/length)+1,length);
        List<Pr02WithBLOBs> pr02s = pr02Mapper.dataTableSelect(dataTableRequest);
        if (pr02s==null){
            System.out.println("null");
            return null;
        }

        PageInfo<Pr02WithBLOBs> pageInfo = new PageInfo<>(pr02s);
        Map<String,Object>obj;
        List<Object> list = new ArrayList<>();

        for (Pr02WithBLOBs pr02:pageInfo.getList()){
            obj = new HashMap<>();
            obj.put("SEQNO",pr02.getSeqno());
            obj.put("ITEMNO",pr02.getItemno());
            obj.put("DESC1",pr02.getDesc1());
            obj.put("DESC2",pr02.getDesc2());
            obj.put("RQTY",pr02.getRqty());
            obj.put("UNIT",pr02.getUnit());
            obj.put("ISSUETRUE",pr02.getIssuetrue());
            obj.put("USEDINFO1",pr02.getUsedinfo1());
            obj.put("USEDINFO2",pr02.getUsedinfo2());
            obj.put("USEDINFO3",pr02.getUsedinfo3());
            obj.put("COMPANYNO",pr02.getCompanyno());
            obj.put("SUPPNO",pr02.getSuppno());
            obj.put("CUR",pr02.getCur());
            obj.put("COST",pr02.getCost());
            obj.put("ITEMREMARK",pr02.getItemremark());
            obj.put("MONTHREQ",pr02.getMonthreq());
            obj.put("STATUS",pr02.getStatus());
            obj.put("MARKBACK",pr02.getMarkback());
            obj.put("AQTY",pr02.getAqty());
            obj.put("APPROVED",pr02.getApproved());
            obj.put("APPROVEDDATE",DateUtil.timeStampToDate(pr02.getApproveddate()));
            obj.put("PURDATE",DateUtil.timeStampToDate(pr02.getPurdate()));
            obj.put("PONO",pr02.getPono());
            obj.put("DELIVERDATE",DateUtil.timeStampToDate(pr02.getDeliverdate()));
            obj.put("REPTDATE",DateUtil.timeStampToDate(pr02.getReptdate()));
            obj.put("PUROS",pr02.getPuros());
            obj.put("REPTOS",pr02.getReptos());
            obj.put("ITOS",pr02.getItos());
            obj.put("PROJTYPE",pr02.getProjtype());
            obj.put("PRICESURE",pr02.getPricesure());
            obj.put("ACNO",pr02.getAcno());
            obj.put("INVOICE",pr02.getInvoice());
            obj.put("PAYFOR",pr02.getPayfor());
            obj.put("PAYDATE",DateUtil.timeStampToDate(pr02.getPaydate()));
            obj.put("AUTH",auth);
            list.add(obj);
            System.out.println(JSON.toJSONString(pr02));
        }

        DataTableResponse dataTableResponse = new DataTableResponse();
        dataTableResponse.setData(list);
        dataTableResponse.setDraw(dataTableRequest.getDraw());
        dataTableResponse.setRecordsFiltered(pageInfo.getTotal());
        dataTableResponse.setRecordsTotal(pageInfo.getTotal());

        return dataTableResponse;
    }

}
