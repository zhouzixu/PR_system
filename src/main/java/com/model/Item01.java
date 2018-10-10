package com.model;

import java.math.BigDecimal;
import java.util.Date;

public class Item01 {
    private String itemno;

    private String desc1;

    private String desc2;

    private Date createdate;

    private String baseunit;

    private BigDecimal unitprice;

    private String unitcur;

    private String manu;

    public String getItemno() {
        return itemno;
    }

    public void setItemno(String itemno) {
        this.itemno = itemno == null ? null : itemno.trim();
    }

    public String getDesc1() {
        return desc1;
    }

    public void setDesc1(String desc1) {
        this.desc1 = desc1 == null ? null : desc1.trim();
    }

    public String getDesc2() {
        return desc2;
    }

    public void setDesc2(String desc2) {
        this.desc2 = desc2 == null ? null : desc2.trim();
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public String getBaseunit() {
        return baseunit;
    }

    public void setBaseunit(String baseunit) {
        this.baseunit = baseunit == null ? null : baseunit.trim();
    }

    public BigDecimal getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(BigDecimal unitprice) {
        this.unitprice = unitprice;
    }

    public String getUnitcur() {
        return unitcur;
    }

    public void setUnitcur(String unitcur) {
        this.unitcur = unitcur == null ? null : unitcur.trim();
    }

    public String getManu() {
        return manu;
    }

    public void setManu(String manu) {
        this.manu = manu == null ? null : manu.trim();
    }
}