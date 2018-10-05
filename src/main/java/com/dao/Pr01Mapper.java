package com.dao;

import com.DataEntity.DataTableRequest;
import com.model.Pr01;
import com.model.Pr01Key;

import java.util.List;

public interface Pr01Mapper {
    int deleteByPrimaryKey(Pr01Key key);

    int insert(Pr01 record);

    int insertSelective(Pr01 record);

    Pr01 selectByPrimaryKey(Pr01Key key);

    int updateByPrimaryKeySelective(Pr01 record);

    int updateByPrimaryKeyWithBLOBs(Pr01 record);

    int updateByPrimaryKey(Pr01 record);

    List<Pr01> dataTableSelect(DataTableRequest dt);

    String getLastData();
}