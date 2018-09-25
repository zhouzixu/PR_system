$(function () {
    $("#example1").DataTable({
        "scrollX": true,
        "scrollY":"600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu":[100,1000,10000],
        "processing":true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">可以付款</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">普通列印</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">特殊列印</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">香港訂單樣式</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印條碼</button>&nbsp&nbsp')
        },
        "columns":[
            {
                "data":"PONO",
                "width":"60px",
                "title":"購貨單號"
            },
            {
                "data":"PODATE",
                "width":"90px",
                "title":"建立日期"
            },
            {
                "data":"DELDATE",
                "width":"90px",
                "title":"送貨日期"
            },
            {
                "data":"SUPPNO",
                "width":"60px",
                "title":"供應商號"
            },
            {
                "data":"SuppName",
                "width":"90px",
                "title":"名稱"
            },
            {
                "data":"REFNO",
                "width":"60px",
                "title":"參考編號"
            },
            {
                "data":"ISSUE",
                "width":"50px",
                "title":"發單者"
            },
            {
                "data":"REMARK",
                "width":"60px",
                "title":"備註",
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data.length>9){
                            return '<span title="'+data+'">'+data+'...</span>';
                        } else{
                            return '<span title="'+data+'">'+data+'</span>';
                        }
                    }
                }
            },
            {
                "data":"STATUS",
                "width":"45px",
                "title":"狀態",
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data==="C"){
                            return '<span title="'+data+'">取消</span>';
                        } else if (data==="N"){
                            return '<span title="'+data+'">未收貨</span>';
                        } else if (data==="Y"){
                            return '<span title="'+data+'">已收貨</span>';
                        } else{
                            return '';
                        }
                    } 
                }
            },
            {
                "data":"PAYDATE",
                "width":"90px",
                "title":"PAYDATE"
            },
            {
                "data":"ISSUENAME",
                "width":"60px",
                "title":"ISSUENAME"
            },
            {
                "data":"STAFF",
                "width":"45px",
                "title":"採購員"
            },
            {
                "data":"TAX",
                "width":"60px",
                "title":"loogTAX"
            },
            {
                "data":null,
                "width":"180px",
                "title":"操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-primary btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-info"></i>查看</button>' +
                        '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
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
    })
});