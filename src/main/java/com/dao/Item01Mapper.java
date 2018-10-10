package com.dao;

import com.model.Item01;
import com.model.Item01WithBLOBs;

import java.util.List;

public interface Item01Mapper {
    int deleteByPrimaryKey(String itemno);

    int insert(Item01WithBLOBs record);

    int insertSelective(Item01WithBLOBs record);

    Item01WithBLOBs selectByPrimaryKey(String itemno);

    int updateByPrimaryKeySelective(Item01WithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(Item01WithBLOBs record);

    int updateByPrimaryKey(Item01 record);

    List<String> findAllItemNo();

    String findDesc1ByItemNo(String itemno);
}