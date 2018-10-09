package com.DataEntity;

public class DataTableRequest_require_detail extends DataTableRequest {
    private String prno;
    private String revision;

    public void setPrno(String prno) {
        this.prno = prno;
    }

    public void setRevision(String revision) {
        this.revision = revision;
    }

    public String getPrno(){
        return prno;
    }

    public String getRevision(){
        return revision;
    }
}
