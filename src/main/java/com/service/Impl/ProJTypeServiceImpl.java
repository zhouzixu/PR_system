package com.service.Impl;

import com.dao.ProJTypeMapper;
import com.service.ProJTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ProJTypeServiceImpl implements ProJTypeService {

    @Autowired
    private ProJTypeMapper proJTypeMapper;
    @Override
    public List<String> findProJType() {

        return proJTypeMapper.findProJTypeWithY();
    }
}
