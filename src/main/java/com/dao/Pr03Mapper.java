package com.dao;

import com.DataEntity.DataTableRequest_require_pr03;
import com.model.Pr03;
import com.model.Pr03Key;

import java.util.List;

public interface Pr03Mapper {
    int deleteByPrimaryKey(Pr03Key key);

    int insert(Pr03 record);

    int insertSelective(Pr03 record);

    Pr03 selectByPrimaryKey(Pr03Key key);

    int updateByPrimaryKeySelective(Pr03 record);

    int updateByPrimaryKeyWithBLOBs(Pr03 record);

    int updateByPrimaryKey(Pr03 record);

    List<Pr03> dataTableSelect(DataTableRequest_require_pr03 dataTable);
}