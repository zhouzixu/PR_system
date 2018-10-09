package com.model;

public class Pr02Key {
    private String prno;

    private String seqno;

    private String revision;

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

    public String getRevision() {
        return revision;
    }

    public void setRevision(String revision) {
        this.revision = revision == null ? null : revision.trim();
    }
}