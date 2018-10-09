package com.dao;

import com.DataEntity.DataTableRequest_require_detail;
import com.model.Pr02;
import com.model.Pr02Key;
import com.model.Pr02WithBLOBs;

import java.util.List;

public interface Pr02Mapper {
    int deleteByPrimaryKey(Pr02Key key);

    int insert(Pr02WithBLOBs record);

    int insertSelective(Pr02WithBLOBs record);

    Pr02WithBLOBs selectByPrimaryKey(Pr02Key key);

    int updateByPrimaryKeySelective(Pr02WithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Pr02WithBLOBs record);

    int updateByPrimaryKey(Pr02 record);

    int getDataNum(Pr02 pr02);

    List<Pr02WithBLOBs> dataTableSelect(DataTableRequest_require_detail dt);
}