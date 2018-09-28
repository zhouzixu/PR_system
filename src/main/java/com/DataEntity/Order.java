package com.DataEntity;

public class Order {
    private int column;
    private String dir;
    private String realColumn;

    public int getColumn() {
        return column;
    }

    public String getDir() {
        return dir;
    }

    public void setColumn(int column) {
        this.column = column;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public String getRealColumn() {
        return realColumn;
    }

    public void setRealColumn(String realColumn) {
        this.realColumn = realColumn;
    }
}
