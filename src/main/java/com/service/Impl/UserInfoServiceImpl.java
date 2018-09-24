package com.service.Impl;

import com.dao.UserProfileMapper;
import com.model.UserProfileWithBLOBs;
import org.springframework.beans.factory.annotation.Autowired;

public class UserInfoServiceImpl implements UserInfoService {
    @Autowired
    private UserProfileMapper userProfileMapper;

    @Override
    public UserProfileWithBLOBs getAllInfo(String id) {
        return userProfileMapper.selectByPrimaryKey(id);
    }
}
