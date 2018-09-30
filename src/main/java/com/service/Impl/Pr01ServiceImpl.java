package com.service.Impl;

import com.DataEntity.DataTableRequest;
import com.DataEntity.DataTableResponse;
import com.Units.DateUtil;
import com.dao.Pr01Mapper;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.model.Pr01;
import com.model.Pr01Key;
import com.service.Pr01Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class Pr01ServiceImpl implements Pr01Service {

    @Autowired
    private Pr01Mapper pr01Mapper;

    /**
     * 对要求表列表页面的数据进行加载
     * @param dataTableRequest
     * @return
     */
    @Override
    public DataTableResponse dtSelect(DataTableRequest dataTableRequest) {
        //得到dataTable的信息
        int start = dataTableRequest.getStart();
        int length = dataTableRequest.getLength();

        //利用PageHelper插件進行分頁
        PageHelper.startPage((start/length)+1,length);

        //執行對數據庫的操作
        List<Pr01> pr01s = pr01Mapper.dataTableSelect(dataTableRequest);
        if (pr01s==null){
            return null;
        }
        //將得到的信息進行封裝
        PageInfo<Pr01> pageInfo = new PageInfo<Pr01>(pr01s);

        Map<String,Object>obj;
        List<Object> list = new ArrayList<Object>();

        for (Pr01 pr01:pageInfo.getList()){
            obj = new HashMap<String,Object>();
            obj.put("PRNO",pr01.getPrno());
            obj.put("REVISION",pr01.getRevision());
            obj.put("ISSUENAME",pr01.getIssue());
            obj.put("PROJTYPE",pr01.getProjtype());
            obj.put("FROMDEP",pr01.getFromdep());
            obj.put("FROMGROUP",pr01.getFromgroup());
            obj.put("TODEP",pr01.getTodep());
            obj.put("TOGROUP",pr01.getTogroup());
            obj.put("PRSNO",pr01.getPrsno());
            obj.put("REMARK","11111111111111");//pr01.getRemark()
            obj.put("PRDATE",DateUtil.timeStampToDate(pr01.getPrdate()));
            obj.put("ECOMDATE",DateUtil.timeStampToDate(pr01.getEcomdate()));
            obj.put("ACOMDATE",DateUtil.timeStampToDate(pr01.getAcomdate()));
            obj.put("APPROVEDDATE",DateUtil.timeStampToDate(pr01.getApproveddate()));
            obj.put("APPROVED",pr01.getApproved());
            obj.put("STATUSMSG",pr01.getStatus());
            obj.put("MSGLEVEL",pr01.getMsglevel());
            obj.put("HKPR",pr01.getHkpr());
            list.add(obj);
        }

        DataTableResponse dtResponse = new DataTableResponse();
        dtResponse.setData(list);
        dtResponse.setDraw(dataTableRequest.getDraw());
        dtResponse.setRecordsFiltered(pageInfo.getTotal());
        dtResponse.setRecordsTotal(pageInfo.getTotal());
        return dtResponse;
    }

    /**
     * 删除prno_header的数据
     * @param prno
     * @param revision
     * @return
     */
    @Override
    public int delData(String prno,String revision) {
        Pr01Key key = new Pr01Key(prno,revision);
        return pr01Mapper.deleteByPrimaryKey(key);
    }

    @Override
    public Pr01 SelectAll(Pr01Key key) {
        return pr01Mapper.selectByPrimaryKey(key);
    }
}
