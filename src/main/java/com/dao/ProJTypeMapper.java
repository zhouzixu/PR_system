package com.dao;

import com.model.ProJType;

import java.util.List;

public interface ProJTypeMapper {
    int deleteByPrimaryKey(String projtype);

    int insert(ProJType record);

    int insertSelective(ProJType record);

    ProJType selectByPrimaryKey(String projtype);

    int updateByPrimaryKeySelective(ProJType record);

    int updateByPrimaryKey(ProJType record);

    List<String> findProJTypeWithY();
}