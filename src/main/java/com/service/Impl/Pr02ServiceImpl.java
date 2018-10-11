package com.service.Impl;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableRequest_require_pr03;
import com.DataEntity.DataTableResponse;
import com.Units.DateUtil;
import com.Units.JudgeLogin;
import com.alibaba.fastjson.JSON;
import com.dao.*;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.model.*;
import com.service.Pr02Service;
import freemarker.ext.beans.HashAdapter;
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

    @Autowired
    private Pr03Mapper pr03Mapper;

    @Autowired
    private Pr04Mapper pr04Mapper;


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
    public int getDataNum(String prno, String revision) {
        Pr02 pr02 = new Pr02();
        pr02.setPrno(prno);
        pr02.setRevision(revision);
        return pr02Mapper.getDataNum(pr02);
    }

    @Override
    public DataTableResponse dtSelect(DataTableRequest_require_detail dataTableRequest, List<String> auth) {

        int start = dataTableRequest.getStart();
        int length = dataTableRequest.getLength();

        PageHelper.startPage((start / length) + 1, length);
        List<Pr02WithBLOBs> pr02s = pr02Mapper.dataTableSelect(dataTableRequest);
        if (pr02s == null) {
            return null;
        }

        PageInfo<Pr02WithBLOBs> pageInfo = new PageInfo<>(pr02s);
        Map<String, Object> obj;
        List<Object> list = new ArrayList<>();
        if (pageInfo.getList().size() != 0) {
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
        } else {
            obj = new HashMap<>();
            obj.put("AUTH", auth);
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
        String seqno = pr02Mapper.getSeqNoByPr01Key(pr01Key);
        if (seqno != null) {
            seqno = String.valueOf(Integer.valueOf(seqno) + 1);
            int len = seqno.length();
            for (int i = 5; i > len; i--) {
                seqno = "0" + seqno;
            }
            return seqno;
        } else {
            return "00001";
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
        String uid = (String) session.getAttribute("uid");
        Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
        List<String> rights = authority.get("01");
        String isDepAdmin = (String) session.getAttribute("isDepAdmin");
        String depCode = (String) session.getAttribute("depCode");
        String name = (String) session.getAttribute("name");

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

        if (JudgeLogin.judge(session)) {
            if (!rights.contains("ALL") && !rights.contains("ADD")) {
                return "noAuthority";
            } else if (!status.equals("N")) {
                return "noAdd";
            } else if (isDepAdmin.equals("N") && !uid.equals(issue)) {
                return "noAuthority";
            } else if (isDepAdmin.equals("Y") && !fromDep.equals(depCode)) {
                return "noAuthority";
            } else {
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
                return pr02Mapper.insertSelective(pr02WithBLOBs) == 1 ? "success" : "fail";
            }

        } else {
            return "noLogin";
        }
    }

    @Override
    public String update(HttpServletRequest request) {
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
        String status1 = request.getParameter("status");

        HttpSession session = request.getSession();
        String uid = (String) session.getAttribute("uid");
        Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
        List<String> rights = authority.get("01");
        String isDepAdmin = (String) session.getAttribute("isDepAdmin");
        String depCode = (String) session.getAttribute("depCode");

        Pr01Key pr01Key = new Pr01Key();
        pr01Key.setRevision(revision);
        pr01Key.setPrno(prno);

        Pr01 pr01 = pr01Mapper.selectByPrimaryKey(pr01Key);
        String status = pr01.getStatus();
        String issue = pr01.getIssue();
        String fromDep = pr01.getFromdep();

        if (JudgeLogin.judge(session)) {
            if (!rights.contains("ALL") && !rights.contains("WRITE")) {
                return "noAuthority";
            } else if (!status.equals("N") || !status1.equals("N")) {
                return "noAdd";
            } else if (isDepAdmin.equals("N") && !uid.equals(issue)) {
                return "noAuthority";
            } else if (isDepAdmin.equals("Y") && !fromDep.equals(depCode)) {
                return "noAuthority";
            } else {
                Pr02WithBLOBs pr02WithBLOBs = new Pr02WithBLOBs();
                pr02WithBLOBs.setSeqno(seqno);
                pr02WithBLOBs.setPrno(prno);
                pr02WithBLOBs.setRevision(revision);
                pr02WithBLOBs.setItemno(itemNo);
                pr02WithBLOBs.setDesc1(desc1);
                pr02WithBLOBs.setDesc2(desc2);
                pr02WithBLOBs.setRqty(new BigDecimal(Integer.valueOf(rqty)));
                pr02WithBLOBs.setUnit(unit);
                pr02WithBLOBs.setUsedinfo1(usedInfo1);
                pr02WithBLOBs.setUsedinfo2(usedInfo2);
                pr02WithBLOBs.setUsedinfo3(usedInfo3);
                pr02WithBLOBs.setPayfor(new BigDecimal(rqty));
                return pr02Mapper.updateByPrimaryKeySelective(pr02WithBLOBs) == 1 ? "success" : "fail";
            }

        } else {
            return "noLogin";
        }

    }

    @Override
    public String del(HttpServletRequest request) {
        String prno = request.getParameter("prno");
        String revision = request.getParameter("revision");
        String seqno = request.getParameter("seqno");
        String status = request.getParameter("status");

        HttpSession session = request.getSession();
        String uid = (String) session.getAttribute("uid");
        Map<String, List<String>> authority = (Map<String, List<String>>) session.getAttribute("rights");
        List<String> rights = authority.get("01");
        String isDepAdmin = (String) session.getAttribute("isDepAdmin");
        String depCode = (String) session.getAttribute("depCode");

        Pr01Key pr01Key = new Pr01Key();
        pr01Key.setRevision(revision);
        pr01Key.setPrno(prno);

        Pr01 pr01 = pr01Mapper.selectByPrimaryKey(pr01Key);
        String status1 = pr01.getStatus();
        String issue = pr01.getIssue();
        String fromDep = pr01.getFromdep();

        if (JudgeLogin.judge(session)) {
            if (!rights.contains("ALL") && !rights.contains("DELETE")) {
                return "noAuthority";
            } else if (!status.equals("N") || !status1.equals("N")) {
                return "noAdd";
            } else if (isDepAdmin.equals("N") && !uid.equals(issue)) {
                return "noAuthority";
            } else if (isDepAdmin.equals("Y") && !fromDep.equals(depCode)) {
                return "noAuthority";
            } else {
                Pr02Key pr02Key = new Pr02Key();
                pr02Key.setPrno(prno);
                pr02Key.setRevision(revision);
                pr02Key.setSeqno(seqno);
                return pr02Mapper.deleteByPrimaryKey(pr02Key) == 1 ? "success" : "fail";
            }
        } else {
            return "noLogin";
        }
    }

    @Override
    public DataTableResponse dtSelect_pr03(DataTableRequest_require_pr03 dbr) {
        int start = dbr.getStart();
        int length = dbr.getLength();

        PageHelper.startPage((start / length) + 1, length);
        List<Pr03> pr03s = pr03Mapper.dataTableSelect(dbr);
        if (pr03s == null) {
            return null;
        }

        PageInfo<Pr03> pageInfo = new PageInfo<>(pr03s);
        Map<String, Object> obj;
        List<Object> list = new ArrayList<>();
        if (pageInfo.getList().size() != 0) {
            for (Pr03 pr03 : pageInfo.getList()) {
                obj = new HashMap<>();
                obj.put("SEQNO", pr03.getSeqno());
                obj.put("PRNO", pr03.getPrno());
                obj.put("REVISION", pr03.getRevision());
                obj.put("SEQNO2", pr03.getSeqno2());
                obj.put("ISSUE", pr03.getIssue());
                obj.put("CREATEDATE", DateUtil.timeStampToDate(pr03.getCreatedate()));
                obj.put("REMARK", pr03.getRemark());
                list.add(obj);
            }
        }

        DataTableResponse dataTableResponse = new DataTableResponse();
        dataTableResponse.setData(list);
        dataTableResponse.setDraw(dbr.getDraw());
        dataTableResponse.setRecordsFiltered(pageInfo.getTotal());
        dataTableResponse.setRecordsTotal(pageInfo.getTotal());

        return dataTableResponse;
    }

    @Override
    public DataTableResponse dtSelect_pr04(DataTableRequest_require_detail dbr) {
        int start = dbr.getStart();
        int length = dbr.getLength();

        PageHelper.startPage((start / length) + 1, length);
        List<Pr04> pr04s = pr04Mapper.dtSelect(dbr);
        if (pr04s == null) {
            return null;
        }

        PageInfo<Pr04> pageInfo = new PageInfo<>(pr04s);
        Map<String, Object> obj;
        List<Object> list = new ArrayList<>();
        if (pageInfo.getList().size() != 0) {
            for (Pr04 pr04 : pageInfo.getList()) {
                obj = new HashMap<>();
                obj.put("PRSEQNO", pr04.getPrseqno());
                obj.put("PRNO", pr04.getPrno());
                obj.put("ITEMNO", pr04.getItemno());
                obj.put("REMSEQNO", pr04.getRemseqno());
                obj.put("CREATEDATE", DateUtil.timeStampToDate(pr04.getCreatedate()));
                obj.put("REMARK", pr04.getRemark());
                list.add(obj);
            }
        }

        DataTableResponse dataTableResponse = new DataTableResponse();
        dataTableResponse.setData(list);
        dataTableResponse.setDraw(dbr.getDraw());
        dataTableResponse.setRecordsFiltered(pageInfo.getTotal());
        dataTableResponse.setRecordsTotal(pageInfo.getTotal());

        return dataTableResponse;
    }

    @Override
    public int pr04Add(HttpServletRequest request) {
        String prno = request.getParameter("prno");
        String prseqno = request.getParameter("prseqno");
        String remseqno = request.getParameter("remseqno");
        String itemno = request.getParameter("itemno");
        String remark = request.getParameter("remark");
        Pr04 pr04 = new Pr04();
        pr04.setPrno(prno);
        pr04.setPrseqno(prseqno);
        pr04.setRemark(remark);
        pr04.setItemno(itemno);
        pr04.setRemseqno(remseqno);
        pr04.setCreatedate(new Date());
        return pr04Mapper.insert(pr04);
    }

    @Override
    public int pr04Update(HttpServletRequest request) {
        String prno = request.getParameter("prno");
        String prseqno = request.getParameter("prseqno");
        String remseqno = request.getParameter("remseqno");
        String itemno = request.getParameter("itemno");
        String remark = request.getParameter("remark");
        Pr04 pr04 = new Pr04();
        pr04.setPrno(prno);
        pr04.setPrseqno(prseqno);
        pr04.setRemark(remark);
        pr04.setItemno(itemno);
        pr04.setRemseqno(remseqno);
        return pr04Mapper.updateByPrimaryKeySelective(pr04);
    }

    @Override
    public int pr04Delete(HttpServletRequest request) {
        String prno = request.getParameter("prno");
        String prseqno = request.getParameter("prseqno");
        String remseqno = request.getParameter("remseqno");
        Pr04Key pr04Key = new Pr04Key();
        pr04Key.setPrno(prno);
        pr04Key.setPrseqno(prseqno);
        pr04Key.setRemseqno(remseqno);
        return pr04Mapper.deleteByPrimaryKey(pr04Key);
    }

    @Override
    public List<Map<String,String>> getAllByPrimaryKey(String prno) {
        List<Pr02WithBLOBs> getData = pr02Mapper.findByPrno(prno);
        List<Map<String,String>> data = new ArrayList<>();
        Map<String,String> temp;
        for (Pr02WithBLOBs pr02 : getData) {
          temp = new HashMap<>();
          temp.put("itemno",pr02.getItemno());
          temp.put("seqno",pr02.getSeqno());
          data.add(temp);
        }
        return data;
    }

    @Override
    public String get_new_pr04_seqno(String prno) {
        String remseqno = pr04Mapper.getRemSeqnoByPrno(prno);
        String newRemseqno;
        if (remseqno!=null) {
            newRemseqno = String.valueOf(Integer.valueOf(remseqno) + 1);
            int size = newRemseqno.length();
            for (int i = 5; i > size; i--) {
                newRemseqno = "0" + newRemseqno;
            }
        }else{
            newRemseqno="00001";
        }
        return newRemseqno;
    }

}
