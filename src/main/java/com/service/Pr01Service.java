package com.service;

import com.DataEntity.DataTableRequest;
import com.DataEntity.DataTableResponse;
import com.github.pagehelper.PageInfo;
import com.model.Pr01;
import com.model.Pr01Key;

import java.util.List;
import java.util.Map;


public interface Pr01Service {
    DataTableResponse dtSelect(DataTableRequest dataTableRequest);

    int delData(String prno,String revision);

    Pr01 SelectAll(Pr01Key key);

    int updateOfChose(Pr01 pr01);

    int insertOfChose(Pr01 pr01);

    //用於添加生成一個新的PRNO
    String getNewPrno();
    //導入香港訂單
    int insertHKFile(Map<String,List<Map<String,String>>> iniFile);

    Pr01 getDataByPrimaryKey(String prno,String revision);

}
