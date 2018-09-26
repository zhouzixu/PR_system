package com.model;

import java.util.Date;

public class Pr01 extends Pr01Key {
    private String issue;

    private Date prdate;

    private Date ecomdate;

    private Date acomdate;

    private String approved;

    private String status;

    private String fromdep;

    private String todep;

    private String projtype;

    private Date approveddate;

    private String fromgroup;

    private String togroup;

    private String prsno;

    private String msglevel;

    private String hkpr;

    private String remark;

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue == null ? null : issue.trim();
    }

    public Date getPrdate() {
        return prdate;
    }

    public void setPrdate(Date prdate) {
        this.prdate = prdate;
    }

    public Date getEcomdate() {
        return ecomdate;
    }

    public void setEcomdate(Date ecomdate) {
        this.ecomdate = ecomdate;
    }

    public Date getAcomdate() {
        return acomdate;
    }

    public void setAcomdate(Date acomdate) {
        this.acomdate = acomdate;
    }

    public String getApproved() {
        return approved;
    }

    public void setApproved(String approved) {
        this.approved = approved == null ? null : approved.trim();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status == null ? null : status.trim();
    }

    public String getFromdep() {
        return fromdep;
    }

    public void setFromdep(String fromdep) {
        this.fromdep = fromdep == null ? null : fromdep.trim();
    }

    public String getTodep() {
        return todep;
    }

    public void setTodep(String todep) {
        this.todep = todep == null ? null : todep.trim();
    }

    public String getProjtype() {
        return projtype;
    }

    public void setProjtype(String projtype) {
        this.projtype = projtype == null ? null : projtype.trim();
    }

    public Date getApproveddate() {
        return approveddate;
    }

    public void setApproveddate(Date approveddate) {
        this.approveddate = approveddate;
    }

    public String getFromgroup() {
        return fromgroup;
    }

    public void setFromgroup(String fromgroup) {
        this.fromgroup = fromgroup == null ? null : fromgroup.trim();
    }

    public String getTogroup() {
        return togroup;
    }

    public void setTogroup(String togroup) {
        this.togroup = togroup == null ? null : togroup.trim();
    }

    public String getPrsno() {
        return prsno;
    }

    public void setPrsno(String prsno) {
        this.prsno = prsno == null ? null : prsno.trim();
    }

    public String getMsglevel() {
        return msglevel;
    }

    public void setMsglevel(String msglevel) {
        this.msglevel = msglevel == null ? null : msglevel.trim();
    }

    public String getHkpr() {
        return hkpr;
    }

    public void setHkpr(String hkpr) {
        this.hkpr = hkpr == null ? null : hkpr.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}