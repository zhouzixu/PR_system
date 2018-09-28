package com.service.Impl;

import com.DataEntity.DataTableRequest;
import com.dao.Pr01Mapper;
import com.model.Pr01;
import com.model.Pr01Key;
import com.service.Pr01Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Pr01ServiceImpl implements Pr01Service {

    @Autowired
    private Pr01Mapper pr01Mapper;

    @Override
    public List<Pr01> dtSelect(DataTableRequest dataTableRequest) {

        return pr01Mapper.dataTableSelect(dataTableRequest);
    }

    @Override
    public Pr01 SelectAll(Pr01Key key) {
        return pr01Mapper.selectByPrimaryKey(key);
    }
}
