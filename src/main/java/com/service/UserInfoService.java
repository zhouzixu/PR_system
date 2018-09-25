package com.service;

import com.model.UserProfileWithBLOBs;

public interface UserInfoService {
    UserProfileWithBLOBs getAllInfo(String id);
}
