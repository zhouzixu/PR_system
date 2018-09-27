package com.DataEntity;

public class Column {
    private String data;
    private String name;
    private boolean searchable;
    private boolean orderable;
    private Search search;
    private String value;
    private boolean regex;

    public boolean isOrderable() {
        return orderable;
    }

    public boolean isSearchable() {
        return searchable;
    }

    public Search getSearch() {
        return search;
    }

    public String getData() {
        return data;
    }

    public String getName() {
        return name;
    }

    public void setData(String data) {
        this.data = data;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOrderable(boolean orderable) {
        this.orderable = orderable;
    }

    public void setSearch(Search search) {
        this.search = search;
    }

    public void setSearchable(boolean searchable) {
        this.searchable = searchable;
    }

    public String getValue() {
        return value;
    }

    public boolean isRegex() {
        return regex;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setRegex(boolean regex) {
        this.regex = regex;
    }
}
