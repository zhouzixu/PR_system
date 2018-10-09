package com.model;

public class Pr02WithBLOBs extends Pr02 {
    private String remark;

    private String apmark;

    private String itemremark;

    private String markback;

    private String usedinfo3;

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    public String getApmark() {
        return apmark;
    }

    public void setApmark(String apmark) {
        this.apmark = apmark == null ? null : apmark.trim();
    }

    public String getItemremark() {
        return itemremark;
    }

    public void setItemremark(String itemremark) {
        this.itemremark = itemremark == null ? null : itemremark.trim();
    }

    public String getMarkback() {
        return markback;
    }

    public void setMarkback(String markback) {
        this.markback = markback == null ? null : markback.trim();
    }

    public String getUsedinfo3() {
        return usedinfo3;
    }

    public void setUsedinfo3(String usedinfo3) {
        this.usedinfo3 = usedinfo3 == null ? null : usedinfo3.trim();
    }
}