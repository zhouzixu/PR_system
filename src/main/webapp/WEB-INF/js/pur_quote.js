$(function () {
    var table1 = $('#table1').DataTable({
        "scrollX":true,
        "scrollY":"320px",
        "autoWidth":true,
        "processing":true,
        "paging":false,
        "lengthChange":false,
        "info":false,
        "columns":[
            {
            "data":"PRNO",
            "title":"要求表號"
            },
            {
               "data":"PRDATE",
                "title":"要求創建日期"
            },
            {
                "data":"DELIVERDATE",
                "title":"要求完成日期"
            },
            {
                "data":"ITEMNO",
                "title":"物品編號"
            },
            {
                "data":"DESC1",
                "title":"物品說明1"
            },
            {
                "data":"DESC2",
                "title":"物品說明2"
            },
            {
                "data":"QTY",
                "title":"要求數"
            },
            {
                "data":"UNIT",
                "title":"單位"
            },
            {
                "data":"STATUS",
                "title":"狀態"
            },
            {
                "data":"PRICESURE",
                "title":"價格確認"
            },
            {
                "data":"STAFF",
                "title":"採購員"
            },
        ],
        "fixedHeader":true,
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
    var table2 = $("#table2").DataTable({
        "scrollX":true,
        "scrollY":"480px",
        "autoWidth":true,
        "processing":true,
        "dom": "<'row'<'#mytool.col-xs-3'><'col-xs-9'f>r>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
        },
        "columns":[
            {
                "data":"priceid",
                "title":"序號"
            },
            {
                "data":"SUPPNO",
                "title":"供應商"
            },
            {
                "data":"PRICE",
                "title":"單價"
            },
            {
                "data":"UNIT",
                "title":"單位"
            },
            {
                "data":"LASTDATE",
                "title":"更新日期"
            },
            {
                "data":"CUR",
                "title":"幣值"
            },
            {
                "data":"REMARKS",
                "title":"備註",
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data.length>9){
                            return '<span title="'+data+'">'+data.substr(0,8)+'</span>'
                        } else{
                            return '<span title="'+data+'">'+data+'</span>'
                        }
                    }
                }
            },
            {
                "data":"PRICESURE",
                "title":"價格確認"
            },
            {
                "data":"TAXRATE",
                "title":"稅率"
            },
            {
                "data":null,
                "width":"110px",
                "title":"操作",
                "render":function (data,type,row,meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>確認</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            }
        ],
        "fixedHeader":true,
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
    var table3 = $("#table3").DataTable({
        "scrollX":true,
        "scrollY":"300px",
        "autoWidth":true,
        "processing":true,
        "dom": "<'row'<'#mytool1.col-xs-3'><'col-xs-9'f>r>",
        "initComplete": function () {
            $("#mytool1").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">打印詢價單</button>&nbsp&nbsp');
            $("#mytool1").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">清空詢價單</button>&nbsp&nbsp');
        },
        "columns":[
            {
                "data":"SEQNO",
                "title":"編號"
            },
            {
                "data":"ITEMNO",
                "title":"物品編號"
            },
            {
                "data":"DESC1",
                "title":"描述一"
            },
            {
                "data":"DESC2",
                "title":"描述二"
            },
            {
                "data":"RQTY",
                "title":"需求量"
            },
            {
                "data":"UNIT",
                "title":"單位"
            }
        ],
        "fixedHeader":true,
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
    })
});