package com.service.Impl;

import com.dao.DepMapper;
import com.service.DepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepServiceImpl implements DepService {

    @Autowired
    private DepMapper mapper;
    @Override
    public List<String> findAllDepCode() {
        return mapper.selectAllDepCode();
    }
}
