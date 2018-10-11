package com.model;

public class Pr04Key {
    private String prno;

    private String prseqno;

    private String remseqno;

    public String getPrno() {
        return prno;
    }

    public void setPrno(String prno) {
        this.prno = prno == null ? null : prno.trim();
    }

    public String getPrseqno() {
        return prseqno;
    }

    public void setPrseqno(String prseqno) {
        this.prseqno = prseqno == null ? null : prseqno.trim();
    }

    public String getRemseqno() {
        return remseqno;
    }

    public void setRemseqno(String remseqno) {
        this.remseqno = remseqno == null ? null : remseqno.trim();
    }
}