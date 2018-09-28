package com.DataEntity;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class DataTableRequest {
    private int draw;
    private int start;
    private int length;
    private Search search;
    @JsonProperty("order")
    private List<Order> orders;
    private List<Column>columns;

    public Search getSearch() {
        return search;
    }

    public void setSearch(Search search) {
        this.search = search;
    }

    public int getDraw() {
        return draw;
    }

    public int getLength() {
        return length;
    }

    public int getStart() {
        return start;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    public void setDraw(int draw) {
        this.draw = draw;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public void setStart(int start) {
        this.start = start;
    }

}


