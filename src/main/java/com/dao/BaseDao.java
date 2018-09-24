package com.dao;

import java.util.List;

public interface BaseDao {
    public <T> List<T> queryAll(Object obj);
    public <T> Object queryModelById(String id);
    public void addModel(Object obj);
    public void deleteModel(Object obj);
    public void editModel(Object obj);

}
