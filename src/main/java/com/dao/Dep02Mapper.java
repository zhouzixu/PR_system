package com.dao;

import com.model.Dep02;
import com.model.Dep02Key;

import java.util.List;

public interface Dep02Mapper {
    int deleteByPrimaryKey(Dep02Key key);

    int insert(Dep02 record);

    int insertSelective(Dep02 record);

    Dep02 selectByPrimaryKey(Dep02Key key);

    int updateByPrimaryKeySelective(Dep02 record);

    int updateByPrimaryKeyWithBLOBs(Dep02 record);

    List<String> findAllDepGroup(String depcode);
}