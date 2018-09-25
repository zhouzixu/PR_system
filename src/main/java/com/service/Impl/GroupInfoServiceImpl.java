package com.service.Impl;

import com.dao.GProfileMapper;
import com.model.GProfileWithBLOBs;
import com.service.GroupInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupInfoServiceImpl implements GroupInfoService {

    @Autowired
    private GProfileMapper gProfileMapper;

    @Override
    public GProfileWithBLOBs getAllInfo(String gid) {
        return gProfileMapper.selectByPrimaryKey(gid);
    }
}
