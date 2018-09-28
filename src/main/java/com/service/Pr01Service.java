package com.service;

import com.DataEntity.DataTableRequest;
import com.model.Pr01;
import com.model.Pr01Key;

import java.util.List;

public interface Pr01Service {
    List<Pr01> dtSelect(DataTableRequest dataTableRequest);
    Pr01 SelectAll(Pr01Key key);
}
