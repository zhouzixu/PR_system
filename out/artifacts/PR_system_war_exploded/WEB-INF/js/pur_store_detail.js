var table;
$(function () {
    table=$('#table').dataTable({
        "scrollX": true,
        "scrollY":"600px",
        "autoWidth": true,//可以橫向拉動
        "processing":true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">輸入條碼</button>&nbsp&nbsp');
        },
        "columns":[
            {
                "data":"SEQNO",
                "width":"30px",
                "title":"序號"
            },
            {
                "data":"ITEMNO",
                "width":"30px",
                "title":"編號"
            },
            {
                "data":"PONO",
                "width":"60px",
                "title":"購貨單號"
            },
            {
                "data":"POREVISION",
                "width":"70px",
                "title":"購貨單版本"
            },
            {
                "data":"POSEQNO",
                "width":"70px",
                "title":"購貨單項目"
            },
            {
                "data":"BAECODE",
                "width":"60px",
                "title":"條碼編號"
            },
            {
                "data":"RECQTY",
                "width":"30px",
                "title":"收貨數"
            },
            {
                "data":"QTY",
                "width":"30px",
                "title":"結存"
            },
            {
                "data":"PRNO",
                "width":"70px",
                "title":"要求表單號"
            },
            {
                "data":"PRREVISION",
                "width":"70px",
                "title":"要求表版本"
            },
            {
                "data":"PRSEQNO",
                "width":"70px",
                "title":"要求表序號"
            },
            {
                "data":"PRSNO",
                "width":"40px",
                "title":"PRS編號"
            },
            {
                "data":"CUR",
                "width":"30px",
                "title":"幣值"
            },
            {
                "data":"PRICE",
                "width":"30px",
                "title":"單價"
            },
            {
                "data":"TAX",
                "width":"30px",
                "title":"稅率"
            },
            {
                "data":"TAXAMOUNT",
                "width":"30px",
                "title":"稅金"
            },
            {
                "data":"TOTAL",
                "width":"30px",
                "title":"合計"
            },
            {
                "data":"REMQTY",
                "width":"40px",
                "title":"REMQTY"
            },
            {
                "data":"CHECKDATE",
                "width":"90px",
                "title":"檢查日期"
            },
            {
                "data":"MEMO",
                "width":"90px",
                "title":"備註",
                "searchable": false,
                "orderable": false,
                "render":function (data,type,row,meta) {
                    if (data)
                    {
                        if (data.length>9){
                            return '<span title="'+data+'">'+data.substr(0,8)+'...</span>'
                        } else{
                            return '<span title="'+data+'">'+data+'</span>'
                        }
                    }
                }
            },
            {
                "data":null,
                "width":"180px",
                "title":"操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            }
        ],
        "fixedHeader": true,
        "order": [[0, "desc"]],
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
    })
});