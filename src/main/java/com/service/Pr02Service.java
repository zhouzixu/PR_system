package com.service;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableResponse;
import com.model.Pr01Key;
import com.model.Pr02;
import com.model.Pr02WithBLOBs;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

public interface Pr02Service {
    public int updateOfChose(String prno,String revision,String prsno,String projtype,Date time);

    public int getDataNum(String prno,String revision);

    public DataTableResponse dtSelect(DataTableRequest_require_detail dataTableRequest, List<String> auth);

    List<String> getUnit();

    List<String> getItemNo();

    String getNewSeqNo(Pr01Key pr01Key);

    String getItemDesc1(String itemNo);

    String add(HttpServletRequest request);
}
