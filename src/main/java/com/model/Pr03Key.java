package com.model;

public class Pr03Key {
    private String prno;

    private String seqno;

    private String seqno2;

    public String getPrno() {
        return prno;
    }

    public void setPrno(String prno) {
        this.prno = prno == null ? null : prno.trim();
    }

    public String getSeqno() {
        return seqno;
    }

    public void setSeqno(String seqno) {
        this.seqno = seqno == null ? null : seqno.trim();
    }

    public String getSeqno2() {
        return seqno2;
    }

    public void setSeqno2(String seqno2) {
        this.seqno2 = seqno2 == null ? null : seqno2.trim();
    }
}