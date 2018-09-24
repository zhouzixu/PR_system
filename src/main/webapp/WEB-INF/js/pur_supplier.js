var table;
$(function () {
    table = $('#table').dataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu": [10, 50, 100],
        "processing": true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            // $('#mytool').append('<button class="btn btn-default"  type="button" id="reload" data-toggle="modal" data-target="#employeeModal">刷新表格</button>' +
            //     '<button class="btn btn-primary" type="button" id="batchIds" style="margin-left:20px;" data-toggle="modal" >多选</button>' +
            //     '<button class="btn btn-primary" type="button" id="selection" style="margin-left:20px;" data-toggle="modal" >单选</button>' +
            //     '<button class="btn btn-default" type="button" id="search" style="margin-left:20px;" data-toggle="modal" >查询</button>' +
            //     '<button class="btn btn-danger" type="button" id="clearSearch" style="margin-left:20px;" data-toggle="modal" >重置</button>')
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" id="add">添加</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">過往記錄</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "SUPPNO",
                "width": "75px",
                "title": "供應商編號"
            },
            {
                "data": "COMPANY",
                "width": "90px",
                "title": "供應商名稱"
            },
            {
                "data": "ADDR1",
                "width": "60px",
                "title": "地址（一）",
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
                "data": "ADDR2",
                "width": "60px",
                "title": "地址（二）",
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
                "data": "ADDR3",
                "width": "60px",
                "title": "地址（三）",
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
                "data": "ADDR4",
                "width": "60px",
                "title": "地址（四）",
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
                "data": "TEL1",
                "width": "40px",
                "title": "電話（一）",
                "sDefaultContent": "",
            },
            {
                "data": "TEL2",
                "width": "40px",
                "title": "電話（二）",
                "sDefaultContent": ""
            },
            {
                "data": "FAX1",
                "width": "40px",
                "title": "傳真（一）",
                "sDefaultContent": ""
            },
            {
                "data": "FAX2",
                "width": "40px",
                "title": "傳真（二）",
                "sDefaultContent": ""
            },
            {
                "data": "CONTACT1",
                "width": "40px",
                "title": "聯絡人（一）",
                "sDefaultContent": ""
            },
            {
                "data": "CONTACT2",
                "width": "40px",
                "title": "聯絡人（二）",
                "sDefaultContent": ""
            },
            {
                "data": "REMARK",
                "width": "90px",
                "title": "備註",
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
                "data": "SUPPTYPE",
                "width": "40px",
                "title": "供應商類別",
                "sDefaultContent": ""
            },
            {
                "data": "CUR",
                "width": "30px",
                "title": "預設幣值",
                "sDefaultContent": ""
            },
            {
                "data": "PAYTERM",
                "width": "40px",
                "title": "付款",
            },
            {
                "data": "PAYTERMNO",
                "width": "40px",
                "title": "付款期數",
                "sDefaultContent": 0
            },
            {
                "data": "PAYTERMTYPE",
                "width": "40px",
                "title": "日/月",
            },
            {
                "data": "TAX",
                "width": "70px",
                "title": "稅率和發票",
                "sDefaultContent": ""
            },
            {
                "data": "PAYTERMREM",
                "width": "40px",
                "title": "付款方式",
                "sDefaultContent": ""
            },
            {
                "data": "CREATEDATE",
                "width": "90px",
                "title": "建立日期"
            },
            {
                "data": null,
                "width": "180px",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="update(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
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

    });
    $("button#add").click(function () {
        $('#myModal').modal("show");
        $('#myModalLabel').text("新增");

    });
    $('button#save').click(function () {
        var suppno=$('#suppno').val();
        var company=$('#company').val();
        var createDate=$('#createDate').val();
        var addr1 = $('#addr1').val();
        var addr2 = $('#addr2').val();
        var addr3 = $('#addr3').val();
        var addr4 = $('#addr4').val();
        var tel1 = $('#tel1').val();
        var tel2 = $('#tel2').val();
        var fax1 = $('#fax1').val();
        var fax2 = $('#fax2').val();
        var supptype = $('#supptype').val();
        var contact1 = $('#contact1').val();
        var contact2 = $('#contact2').val();
        var cur = $('#cur').val();
        var payterm = $('#payterm').val();
        var paytermtype = $('#paytermtype').val();
        var tax = $('#tax').val();
        var paytermno = $('#paytermno').val();
        var remark = $('#remark').val();

        $('#addBody').remove();
        $('#myModal').modal('hide');
    });
    $()
});

function update() {
    
}