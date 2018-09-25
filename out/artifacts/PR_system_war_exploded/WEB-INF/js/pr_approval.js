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
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">批核</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印要求表</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印報表</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "PRNO",
                "width": "60px",
                "title": "要求表號",
                "sDefaultContent": ""
            },
            {
                "data": "REVISION",
                "width": "30px",
                "title": "版本",
                "sDefaultContent": ""
            },
            {
                "data": "PRSNO",
                "width": "60px",
                "title": "部門編號",
                "sDefaultContent": ""
            },
            {
                "data": "PROJTYPE",
                "width": "30px",
                "title": "類別",
                "sDefaultContent": ""
            },
            {
                "data": "TODEP",
                "width": "60px",
                "title": "要求部門",
                "sDefaultContent": ""
            },
            {
                "data": "ISSUE",
                "width": "60px",
                "title": "ISSUE",
                "sDefaultContent": ""
            },
            {
                "data": "TOGROUP",
                "width": "60px",
                "title": "要求組別",
                "sDefaultContent": ""
            },
            {
                "data": "ECOMDATE",
                "width": "90px",
                "title": "預計完成日期",
                "sDefaultContent": ""
            },
            {
                "data": "ISSUENAME",
                "width": "50px",
                "title": "申請人",
                "sDefaultContent": ""
            }, {
                "data": "PRDATE",
                "width": "90px",
                "title": "建立日期",
                "sDefaultContent": ""
            }, {
                "data": "ACOMDATE",
                "width": "90px",
                "title": "批核日期",
                "sDefaultContent": ""
            },
            {
                "data": "APNAME",
                "width": "50px",
                "title": "批核人",
                "sDefaultContent": ""
            },
            {
                "data": "APPROVED",
                "width": "30px",
                "title": "APPROVED",
                "sDefaultContent": ""
            },
            {
                "data": "STATUS",
                "width": "30px",
                "title": "狀態",
                "sDefaultContent": ""
            },
            {
                "data": "REMARK",
                "width": "90px",
                "title": "備註",
                "sDefaultContent": "",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>'
                        }
                    }
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
});