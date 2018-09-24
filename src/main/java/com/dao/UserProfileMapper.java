package com.dao;

import com.model.UserProfile;
import com.model.UserProfileWithBLOBs;

public interface UserProfileMapper {
    int deleteByPrimaryKey(String uid);

    int insert(UserProfileWithBLOBs record);

    int insertSelective(UserProfileWithBLOBs record);

    UserProfileWithBLOBs selectByPrimaryKey(String uid);

    int updateByPrimaryKeySelective(UserProfileWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(UserProfileWithBLOBs record);

    int updateByPrimaryKey(UserProfile record);
}