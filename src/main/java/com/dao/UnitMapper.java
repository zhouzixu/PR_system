package com.dao;

import com.model.Unit;

import java.util.List;

public interface UnitMapper {
    int deleteByPrimaryKey(String unit);

    int insert(Unit record);

    int insertSelective(Unit record);

    List<String> findAllUnit();
}