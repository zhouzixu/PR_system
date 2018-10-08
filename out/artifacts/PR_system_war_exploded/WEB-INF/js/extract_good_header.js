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
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">新增</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">報表</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "INTO",
                "width": "60px",
                "title": "編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "CREATEDATE",
                "width": "90px",
                "title": "建立日期",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "ISSUE",
                "width": "90px",
                "title": "建立者",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "REMARK",
                "width": "120px",
                "title": "備註",
                "orderable": false,
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 13) {
                            return '<span title="' + data + '">' + data.substr(0, 12) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "ITBY",
                "width": "60px",
                "title": "提取者",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "ITBYNAME",
                "width": "60px",
                "title": "姓名",
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
});