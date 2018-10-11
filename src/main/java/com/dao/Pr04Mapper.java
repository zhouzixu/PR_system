package com.dao;

import com.DataEntity.DataTableRequest_require_detail;
import com.model.Pr04;
import com.model.Pr04Key;

import java.util.List;

public interface Pr04Mapper {
    int deleteByPrimaryKey(Pr04Key key);

    int insert(Pr04 record);

    int insertSelective(Pr04 record);

    Pr04 selectByPrimaryKey(Pr04Key key);

    int updateByPrimaryKeySelective(Pr04 record);

    int updateByPrimaryKeyWithBLOBs(Pr04 record);

    int updateByPrimaryKey(Pr04 record);

    List<Pr04> dtSelect(DataTableRequest_require_detail dataTable);

    String getRemSeqnoByPrno(String prno);
}