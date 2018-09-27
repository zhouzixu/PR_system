package com.DataEntity;

public class Search {
    private String value;
    private boolean regex;

    public void setRegex(boolean regex) {
        this.regex = regex;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public boolean isRegex() {
        return regex;
    }

    public String getValue() {
        return value;
    }
}
