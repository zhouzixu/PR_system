package com.service.Impl;

import com.dao.Dep02Mapper;
import com.service.DepGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepGroupServiceImpl implements DepGroupService {

    @Autowired
    private Dep02Mapper dep02Mapper;
    @Override
    public List<String> findAllGroup(String dep) {

        return dep02Mapper.findAllDepGroup(dep);
    }
}
