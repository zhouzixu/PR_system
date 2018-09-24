var table;
$(function () {
    table = $('#table').DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu": [10, 50, 100],
        "processing": true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "SEQNO",
                "width": "60px",
                "title": "項目",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "ITDATE",
                "width": "90px",
                "title": "提取時間",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ITNO",
                "width": "75px",
                "title": "提貨單編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "ITNAME",
                "width": "50px",
                "title": "提取人",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ITTYPE",
                "width": "60px",
                "title": "類別",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ITEMNO",
                "width": "60px",
                "title": "物品編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "QTY",
                "width": "60px",
                "title": "提取數量",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "REPTNO",
                "width": "75px",
                "title": "收貨單編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "REPTSEQNO",
                "width": "75px",
                "title": "收貨單項目",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "PRNO",
                "width": "75px",
                "title": "要求表編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "PONO",
                "width": "75px",
                "title": "購貨單編號",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "PRSEQNO",
                "width": "75px",
                "title": "要求表項目",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ITEMSEQNO",
                "width": "90px",
                "title": "物品記錄編號",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "FROMDEP",
                "width": "60px",
                "title": "FROMDEP",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": null,
                "width": "180px",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-primary btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-info"></i>查看</button>' +
                        '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            },
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
})