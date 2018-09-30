package com.model;

public class Dep {
    private String depcode;

    private String email;

    private String dephead;

    private String ispur;

    private String isman;

    public String getDepcode() {
        return depcode;
    }

    public void setDepcode(String depcode) {
        this.depcode = depcode == null ? null : depcode.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getDephead() {
        return dephead;
    }

    public void setDephead(String dephead) {
        this.dephead = dephead == null ? null : dephead.trim();
    }

    public String getIspur() {
        return ispur;
    }

    public void setIspur(String ispur) {
        this.ispur = ispur == null ? null : ispur.trim();
    }

    public String getIsman() {
        return isman;
    }

    public void setIsman(String isman) {
        this.isman = isman == null ? null : isman.trim();
    }
}