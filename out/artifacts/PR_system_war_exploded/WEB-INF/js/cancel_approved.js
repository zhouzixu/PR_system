$(function () {
    $('#table').DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,//可以橫向拉動
        "processing": true,
        "dom": "<'row'<'#mytool.col-xs-2'><'col-xs-10'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">全部批核</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">取消批核</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "STATMSG",
                "width": "60px",
                "title": "狀態",
                "orderable": false,
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
                "data": "SEQNO",
                "width": "50px",
                "title": "序號",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ITEMNO",
                "width": "60px",
                "title": "物品編號",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "DESC1",
                "width": "90px",
                "title": "物品說明1",
                "orderable": false,
                "sDefaultContent": "",
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
                "data": "DESC2",
                "width": "90px",
                "title": "物品說明2",
                "orderable": false,
                "sDefaultContent": "",
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
                "data": "UNIT",
                "width": "30px",
                "title": "單位",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "AQTY",
                "width": "60px",
                "title": "要求數量",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "RQTY",
                "width": "60px",
                "title": "批核數量",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "COST",
                "width": "30px",
                "title": "單價",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "APNAME",
                "width": "45px",
                "title": "批核人",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "APPROVEDDATE",
                "width": "90px",
                "title": "批核日期",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "STATUS",
                "width": "30px",
                "title": "狀態",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "REMARK",
                "width": "90px",
                "title": "備註",
                "orderable": false,
                "sDefaultContent": "",
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
                "data": "SUPPNO",
                "width": "75px",
                "title": "供應商編號",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "TOTAL",
                "width": "45px",
                "title": "合計",
                "orderable": false,
                "sDefaultContent": ""
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