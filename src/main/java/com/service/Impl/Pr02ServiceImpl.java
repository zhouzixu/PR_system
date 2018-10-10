package com.service.Impl;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableResponse;
import com.Units.DateUtil;
import com.Units.JudgeLogin;
import com.alibaba.fastjson.JSON;
import com.dao.Item01Mapper;
import com.dao.Pr01Mapper;
import com.dao.Pr02Mapper;
import com.dao.UnitMapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.model.Pr01;
import com.model.Pr01Key;
import com.model.Pr02;
import com.model.Pr02WithBLOBs;
import com.service.Pr02Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.math.BigDecimal;
import java.util.*;

@Service
public class Pr02ServiceImpl implements Pr02Service {

    @Autowired
    private Pr02Mapper pr02Mapper;

    @Autowired
    private UnitMapper unitMapper;

    @Autowired
    private Item01Mapper item01Mapper;

    @Autowired
    private Pr01Mapper pr01Mapper;



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
            return null;
        }

        PageInfo<Pr02WithBLOBs> pageInfo = new PageInfo<>(pr02s);
        Map<String,Object>obj;
        List<Object> list = new ArrayList<>();
        if (pageInfo.getList().size()!=0) {
            for (Pr02WithBLOBs pr02 : pageInfo.getList()) {
                obj = new HashMap<>();
                obj.put("SEQNO", pr02.getSeqno());
                obj.put("ITEMNO", pr02.getItemno());
                obj.put("DESC1", pr02.getDesc1());
                obj.put("DESC2", pr02.getDesc2());
                obj.put("RQTY", pr02.getRqty());
                obj.put("UNIT", pr02.getUnit());
                obj.put("ISSUENAME", pr02.getIssuename());
                obj.put("USEDINFO1", pr02.getUsedinfo1());
                obj.put("USEDINFO2", pr02.getUsedinfo2());
                obj.put("USEDINFO3", pr02.getUsedinfo3());
                obj.put("COMPANYNO", pr02.getCompanyno());
                obj.put("SUPPNO", pr02.getSuppno());
                obj.put("CUR", pr02.getCur());
                obj.put("COST", pr02.getCost());
                obj.put("ITEMREMARK", pr02.getItemremark());
                obj.put("MONTHREQ", pr02.getMonthreq());
                obj.put("STATUS", pr02.getStatus());
                obj.put("MARKBACK", pr02.getMarkback());
                obj.put("AQTY", pr02.getAqty());
                obj.put("APPROVED", pr02.getApproved());
                obj.put("APPROVEDDATE", DateUtil.timeStampToDate(pr02.getApproveddate()));
                obj.put("PURDATE", DateUtil.timeStampToDate(pr02.getPurdate()));
                obj.put("PONO", pr02.getPono());
                obj.put("DELIVERDATE", DateUtil.timeStampToDate(pr02.getDeliverdate()));
                obj.put("REPTDATE", DateUtil.timeStampToDate(pr02.getReptdate()));
                obj.put("PUROS", pr02.getPuros());
                obj.put("REPTOS", pr02.getReptos());
                obj.put("ITOS", pr02.getItos());
                obj.put("PROJTYPE", pr02.getProjtype());
                obj.put("PRICESURE", pr02.getPricesure());
                obj.put("ACNO", pr02.getAcno());
                obj.put("INVOICE", pr02.getInvoice());
                obj.put("PAYFOR", pr02.getPayfor());
                obj.put("PAYDATE", DateUtil.timeStampToDate(pr02.getPaydate()));
                obj.put("AUTH", auth);
                list.add(obj);
            }
        }else{
            obj = new HashMap<>();
            obj.put("AUTH",auth);
            list.add(obj);
        }

        DataTableResponse dataTableResponse = new DataTableResponse();
        dataTableResponse.setData(list);
        dataTableResponse.setDraw(dataTableRequest.getDraw());
        dataTableResponse.setRecordsFiltered(pageInfo.getTotal());
        dataTableResponse.setRecordsTotal(pageInfo.getTotal());

        return dataTableResponse;
    }

    @Override
    public List<String> getUnit() {
        return unitMapper.findAllUnit();
    }

    @Override
    public List<String> getItemNo() {
        return item01Mapper.findAllItemNo();
    }

    @Override
    public String getNewSeqNo(Pr01Key pr01Key) {
        String seqno= pr02Mapper.getSeqNoByPr01Key(pr01Key);
        System.out.println("seqno:"+seqno);
        if (seqno!=null) {
            System.out.println("se");
            return String.valueOf(Integer.valueOf(seqno) + 1);
        }else{
            return "1";
        }
    }

    @Override
    public String getItemDesc1(String itemNo) {
        return item01Mapper.findDesc1ByItemNo(itemNo);
    }

    @Override
    public String add(HttpServletRequest request) {
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String seqno = request.getParameter("seqno");
        String desc1 = request.getParameter("desc1");
        String desc2 = request.getParameter("desc2");
        String rqty = request.getParameter("rqty");
        String usedInfo1 = request.getParameter("usedInfo1");
        String usedInfo2 = request.getParameter("usedInfo2");
        String usedInfo3 = request.getParameter("usedInfo3");
        String itemNo = request.getParameter("itemNo");
        String unit = request.getParameter("unit");

        HttpSession session = request.getSession();
        String uid = (String)session.getAttribute("uid");
        Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
        List<String> rights = authority.get("01");
        String isDepAdmin = (String)session.getAttribute("isDepAdmin");
        String depCode = (String)session.getAttribute("depCode");
        String name = (String)session.getAttribute("name");

        Pr01Key pr01Key = new Pr01Key();
        pr01Key.setRevision(revision);
        pr01Key.setPrno(prno);

        Pr01 pr01 = pr01Mapper.selectByPrimaryKey(pr01Key);
        String status = pr01.getStatus();
        String issue = pr01.getIssue();
        String fromDep = pr01.getFromdep();
        Date ecomdate = pr01.getEcomdate();
        Date prdate = pr01.getPrdate();
        String projtype = pr01.getProjtype();

        System.out.println(seqno);
        if (JudgeLogin.judge(session)){
            if (!rights.contains("ALL")&&!rights.contains("ADD")){
                return "noAuthority";
            }else if (!status.equals("N")){
                return "noAdd";
            }else if (isDepAdmin.equals("N")&&!uid.equals(issue)){
                return "noAuthority";
            }else if (isDepAdmin.equals("Y")&&!fromDep.equals(depCode)){
                return "noAuthority";
            }else{
                Pr02WithBLOBs pr02WithBLOBs = new Pr02WithBLOBs();
                pr02WithBLOBs.setSeqno(seqno);
                pr02WithBLOBs.setPrno(prno);
                pr02WithBLOBs.setRevision(revision);
                pr02WithBLOBs.setDeliverdate(ecomdate);
                pr02WithBLOBs.setFromdep(fromDep);
                pr02WithBLOBs.setIssue(issue);
                pr02WithBLOBs.setPrdate(prdate);
                pr02WithBLOBs.setProjtype(projtype);
                pr02WithBLOBs.setIssuename(name);
                pr02WithBLOBs.setItemno(itemNo);
                pr02WithBLOBs.setDesc1(desc1);
                pr02WithBLOBs.setDesc2(desc2);
                pr02WithBLOBs.setRqty(new BigDecimal(Integer.valueOf(rqty)));
                pr02WithBLOBs.setUnit(unit);
                pr02WithBLOBs.setUsedinfo1(usedInfo1);
                pr02WithBLOBs.setUsedinfo2(usedInfo2);
                pr02WithBLOBs.setUsedinfo3(usedInfo3);
                pr02WithBLOBs.setPayfor(new BigDecimal(rqty));
                return pr02Mapper.insertSelective(pr02WithBLOBs)==1?"success":"fail";
            }

        }else {
            return "noLogin";
        }
    }

}
