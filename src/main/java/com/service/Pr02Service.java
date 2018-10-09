package com.service;

import com.DataEntity.DataTableRequest_require_detail;
import com.DataEntity.DataTableResponse;
import com.model.Pr02;
import com.model.Pr02WithBLOBs;

import java.util.Date;
import java.util.List;

public interface Pr02Service {
    public int updateOfChose(String prno,String revision,String prsno,String projtype,Date time);

    public int getDataNum(String prno,String revision);

    public DataTableResponse dtSelect(DataTableRequest_require_detail dataTableRequest, List<String> auth);
}
