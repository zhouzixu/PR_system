package com.service;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableRequest_require_pr03;
import com.DataEntity.DataTableResponse;
import com.model.Pr01Key;
import com.model.Pr02;
import com.model.Pr02WithBLOBs;
import com.model.Pr04;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

public interface Pr02Service {
    int updateOfChose(String prno, String revision, String prsno, String projtype, Date time);

    int getDataNum(String prno, String revision);

    DataTableResponse dtSelect(DataTableRequest_require_detail dataTableRequest, List<String> auth);

    List<String> getUnit();

    List<String> getItemNo();

    String getNewSeqNo(Pr01Key pr01Key);

    String getItemDesc1(String itemNo);

    String add(HttpServletRequest request);

    String update(HttpServletRequest request);

    String del(HttpServletRequest request);

    DataTableResponse dtSelect_pr03(DataTableRequest_require_pr03 dbr);

    DataTableResponse dtSelect_pr04(DataTableRequest_require_detail dbr);

    int pr04Add(HttpServletRequest request);

    int pr04Update(HttpServletRequest request);

    int pr04Delete(HttpServletRequest request);

    List<Map<String,String>> getAllByPrimaryKey(String prno);

    String get_new_pr04_seqno(String prno);


}
