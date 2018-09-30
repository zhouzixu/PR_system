package com.dao;

import com.model.Dep;

import java.util.List;

public interface DepMapper {
    int deleteByPrimaryKey(String depcode);

    int insert(Dep record);

    int insertSelective(Dep record);

    Dep selectByPrimaryKey(String depcode);

    int updateByPrimaryKeySelective(Dep record);

    int updateByPrimaryKey(Dep record);

    List<String> selectAllDepCode();
}