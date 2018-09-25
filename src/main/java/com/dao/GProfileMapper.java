package com.dao;

import com.model.GProfile;
import com.model.GProfileWithBLOBs;

public interface GProfileMapper {
    int deleteByPrimaryKey(String gid);

    int insert(GProfileWithBLOBs record);

    int insertSelective(GProfileWithBLOBs record);

    GProfileWithBLOBs selectByPrimaryKey(String gid);

    int updateByPrimaryKeySelective(GProfileWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(GProfileWithBLOBs record);

    int updateByPrimaryKey(GProfile record);
}