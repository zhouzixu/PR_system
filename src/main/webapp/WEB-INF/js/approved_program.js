var table;
var table1;
var table2;
$(function () {
    table = $('#table').DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu": [100, 1000, 10000],
        "processing": true,
        "dom": "<'row'<'#mytool.col-xs-5'><'col-xs-7'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">批核</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">不批核</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">回復意見</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">檢查物料內容</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">完成</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">取消</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "ERRMSG",
                "width": "60px",
                "title": "狀態"
            },
            {
                "data": "PRNO",
                "width": "75px",
                "title": "要求表編號"
            },
            {
                "data": "SEQNO",
                "width": "45px",
                "title": "序號"
            },
            {
                "data": "ITEMNO",
                "width": "60px",
                "title": "物品編號"
            },
            {
                "data": "DESC1",
                "width": "90px",
                "title": "說明（一）",
                "orderable": false
            },
            {
                "data": "DESC2",
                "width": "90px",
                "title": "說明（二）",
                "orderable": false,
            },
            {
                "data": "UNIT",
                "width": "30px",
                "title": "單位",
                "orderable": false,
            },
            {
                "data": "RQTY",
                "width": "60px",
                "title": "要求數量"
            },
            {
                "data": "AQTY",
                "width": "60px",
                "title": "批核數量"
            },
            {
                "data": "COST",
                "width": "30px",
                "title": "單價"
            },
            {
                "data": "TOTAL",
                "width": "30px",
                "title": "合共"
            },
            {
                "data": "ITEMREMARK",
                "width": "90px",
                "title": "採購備註",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "MARKBACK",
                "width": "90px",
                "title": "回復意見",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "PROJTYPE",
                "width": "45px",
                "title": "項目號"
            },
            {
                "data": "USEDINFO1",
                "width": "90px",
                "title": "用途（一）",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "USEDINFO2",
                "width": "90px",
                "title": "用途（二）",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "USEDINFO3",
                "width": "90px",
                "title": "用途（三）",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            }
        ],
        "fixedHeader": true,//固定頭部
        //顯示首頁，尾頁，上一頁，下一頁
        "pagingType": "full_numbers",
        //國際化，將英文的地方全部改為中文
        "language": {
            "lengthMenu": "每頁 _MENU_ 條記錄",
            "zeroRecords": "沒有找到記錄",
            "info": "第 _PAGE_ 頁（總共 _PAGES_ 頁）",
            "infoEmpty": "無記錄",
            "infoFiltered": "（從 _MAX_ 條記錄過濾）",
            "search": "搜索：",
            "paginate": {
                "first": "首頁",
                "previous": "上一頁",
                "next": "下一頁",
                "last": "尾頁"
            }
        },
        //將第一行進行升序，可選擇多行進行排序，在最外中括號中添加即可
        "order": [[0, "desc"]]

    });
    table1=$("#table1").DataTable({
        "scrollX": true,
        "scrollY": "300px",
        "autoWidth": true,
        "processing": true,
        "dom":"",
        "columns":[
            {
                "data":"SUPPNO",
                "width":"45px",
                "title":"編號"
            },
            {
                "data":"SUPPNAME",
                "width":"75px",
                "title":"供應商名稱"
            },
            {
                "data":"PRICE",
                "width":"30PX",
                "title":"單價"
            },
            {
                "data":"CUR",
                "width":"30px",
                "title":"幣值"
            },
            {
                "data":"TAXRATE",
                "width":"60px",
                "title":"稅率",
                "orderable":false,
            },
            {
                "data":"UNIT",
                "width":"30px",
                "title":"單位"
            },
            {
                "data":"LASTDATE",
                "width":"90px",
                "title":"最後更新"
            },
            {
                "data":"REMARK",
                "width":"110px",
                "title":"備註",
                "orderable":false,
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data.length>9){
                            return '<span title="'+data+'">'+data.substr(0,9)+'...</span>';
                        } else{
                            return '<span title="'+data+'">'+data+'</span>'
                        }
                    }
                }
            },
        ],
        "fixedHeader": true,
        "order": [[0, "desc"]]
    });
    table2=$('#table2').DataTable({
        "scrollX": true,
        "scrollY": "300px",
        "autoWidth": true,
        "processing": true,
        "dom":"",
        "columns":[
            {
                "data":"DATE",
                "width":"90px",
                "title":"日期"
            },
            {
                "data":"QTYOUT",
                "width":"45px",
                "title":"領用數"
            },
            {
                "data":"name",
                "width":"45px",
                "title":"領用人"
            },
            {
                "data":"decode",
                "width":"30px",
                "title":"部門"
            },
            {
                "data":"TXREFNO",
                "width":"75px",
                "title":"參考要求號"
            },
            {
                "data":"TXSEQNO",
                "width":"90px",
                "title":"參考要求序號"
            },
        ],
        "fixedHeader": true,
        "order": [[0, "desc"]]
    })
})