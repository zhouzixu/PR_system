package com.model;

public class Pr01Key {
    private String prno;

    private String revision;

    public String getPrno() {
        return prno;
    }

    public void setPrno(String prno) {
        this.prno = prno == null ? null : prno.trim();
    }

    public String getRevision() {
        return revision;
    }

    public void setRevision(String revision) {
        this.revision = revision == null ? null : revision.trim();
    }
}