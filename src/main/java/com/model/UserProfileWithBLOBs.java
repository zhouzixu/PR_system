package com.model;

public class UserProfileWithBLOBs extends UserProfile {
    private String ini;

    private String alert;

    public String getIni() {
        return ini;
    }

    public void setIni(String ini) {
        this.ini = ini == null ? null : ini.trim();
    }

    public String getAlert() {
        return alert;
    }

    public void setAlert(String alert) {
        this.alert = alert == null ? null : alert.trim();
    }
}