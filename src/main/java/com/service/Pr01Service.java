package com.service;

import com.DataEntity.DataTableRequest;
import com.DataEntity.DataTableResponse;
import com.github.pagehelper.PageInfo;
import com.model.Pr01;
import com.model.Pr01Key;


public interface Pr01Service {
    DataTableResponse dtSelect(DataTableRequest dataTableRequest);

    int delData(String prno,String revision);
    Pr01 SelectAll(Pr01Key key);
}
