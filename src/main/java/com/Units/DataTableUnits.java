package com.Units;

import com.DataEntity.DataTableRequest;
import com.DataEntity.Order;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * 前端datatable操作工具
 */
public class DataTableUnits {
    /**
     * 因為datatable返回的order只是列的index，所以為了方面構建動態sql，將其轉為列名
     * @param dataTableRequest
     * @return
     */
    public static DataTableRequest orderChange(DataTableRequest dataTableRequest){
        List<Order> orders =dataTableRequest.getOrders();
        for (Order order:orders){
            order.setRealColumn(dataTableRequest.getColumns().get(order.getColumn()).getData());
        }
        dataTableRequest.setOrders(orders);
        return dataTableRequest;
    }


}
