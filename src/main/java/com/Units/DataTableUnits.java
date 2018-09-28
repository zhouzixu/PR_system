package com.Units;

import com.DataEntity.DataTableRequest;
import com.DataEntity.Order;

import java.util.List;

public class DataTableUnits {
    public static DataTableRequest orderChange(DataTableRequest dataTableRequest){
        List<Order> orders =dataTableRequest.getOrders();
        for (Order order:orders){
            order.setRealColumn(dataTableRequest.getColumns().get(order.getColumn()).getData());
        }
        dataTableRequest.setOrders(orders);
        return dataTableRequest;
    }
}
