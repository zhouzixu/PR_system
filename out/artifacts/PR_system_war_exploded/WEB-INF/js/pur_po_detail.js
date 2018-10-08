var table1;
var table2;
var table3;
var table4;
var table5;
$(function () {
    table1 = $("#table1").DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,
        "processing": true,
        "dom": "<'row'<'#mytool.col-xs-2'><'col-xs-10'f>r>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" id="btn" onclick="start()">由要求表匯入</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "SEQNO",
                "width": "30px",
                "title": "序號"
            },
            {
                "data": "ITEMNO",
                "width": "60px",
                "title": "編號"
            },
            {
                "data": "PRNO",
                "width": "70px",
                "title": "要求單編號"
            },
            {
                "data": "PRREVISION",
                "width": "70px",
                "title": "要求表版本"
            },
            {
                "data": "PRSEQNO",
                "width": "70px",
                "title": "要求表序號"
            },
            {
                "data": "PRSNO",
                "width": "60px",
                "title": "PRSNO"
            },
            {
                "data": "DELIVERDATE",
                "width": "90px",
                "title": "送貨時間"
            },
            {
                "data": "QTY",
                "width": "30px",
                "title": "數量"
            },
            {
                "data": "UNIT",
                "width": "30px",
                "title": "單位"
            },
            {
                "data": "CUR",
                "width": "30px",
                "title": "幣值"
            },
            {
                "data": "PRICE",
                "width": "30px",
                "title": "單價"
            },
            {
                "data": "TAX",
                "width": "70px",
                "title": "稅率（%）"
            },
            {
                "data": "TOTAL",
                "width": "30px",
                "title": "合計"
            },
            {
                "data": "OSQTY",
                "width": "70px",
                "title": "未收貨數量"
            },
            {
                "data": "REMARK",
                "width": "110px",
                "title": "備註",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 9) {
                            return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>'
                        } else {
                            return '<span title="' + data + '">' + data + '</span>'
                        }
                    }
                }
            },
            {
                "data": null,
                "width": "130px",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            }
        ],
        "fixedHeader": true,//固定頭部
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
            },
            //將第一行進行升序，可選擇多行進行排序，在最外中括號中添加即可
        },
        "order": [[0, "desc"]]
    });
    table2 = $("#table2").DataTable({
        "scrollX": true,
        "scrollY": "400px",
        "autoWidth": true,
        "processing": true,
        "dom": "<'row'<'#mytool1.col-xs-2'><'col-xs-10'f>r>",
        "initComplete": function () {
            $("#mytool1").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
        },
        "columns": [
            {
                "data": "PONO",
                "width": "15%",
                "title": "PONO"
            },
            {
                "data": "SEQNO",
                "width": "15%",
                "title": "SEQNO"
            },
            {
                "data": "DESC1",
                "width": "20%",
                "title": "DESC1"
            },
            {
                "data": "PRICE",
                "width": "10%",
                "title": "PRICE"
            },
            {
                "data": "REVISION",
                "width": "10%",
                "title": "REVISION"
            },
            {
                "data": null,
                "width": "30%",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            }
        ],
        "fixedHeader": true,//固定頭部
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
    // $("button#btn").click(function () {
    //     $("div#myModal").modal("show");
    //     $("h4#myModalLabel").text("选择要求表");
    //     $("div#body").append("<table id=\"table3\" class=\"table table-bordered table-striped\" cellpadding=\"0\" width=\"100%\"></table>") ;
    //     var table3 = $("#table3").DataTable({
    //         "scrollX":true,
    //         "scrollY":"300px",
    //         "autoWidth":true,
    //         "processing":true,
    //         "dom":"",
    //         "columns":[
    //             {
    //                 "data":"PRNO",
    //                 "width":"70px",
    //                 "title":"要求表編號"
    //             },
    //             {
    //                 "data":"SEQNO",
    //                 "width":"40px",
    //                 "title":"序號"
    //             },
    //             {
    //                 "data":"ITEMNO",
    //                 "width":"70px",
    //                 "title":"物品名稱"
    //             },
    //             {
    //                 "data":"APPROVEDDATE",
    //                 "width":"90px",
    //                 "title":"批核日期"
    //             },
    //             {
    //                 "data":"UNIT",
    //                 "width":"30px",
    //                 "title":"單位"
    //             },
    //             {
    //                 "data":"RQTY",
    //                 "width":"45px",
    //                 "title":"要求數"
    //             },
    //             {
    //                 "data":"AQTY",
    //                 "width":"45px",
    //                 "title":"批核數"
    //             },
    //             {
    //                 "data":"COST",
    //                 "width":"30px",
    //                 "title":"單價"
    //             },
    //             {
    //                 "data":"APPROVED",
    //                 "width":"40%",
    //                 "title":"批核人"
    //             },
    //             {
    //                 "data":"STATUS",
    //                 "width":"40px",
    //                 "title":"狀態"
    //             },
    //             {
    //                 "data":"DELIVERDATE",
    //                 "width":"90px",
    //                 "title":"送貨日期"
    //             },
    //             {
    //                 "data":"REMARK",
    //                 "width":"90px",
    //                 "title":"備註",
    //                 "render": function (data, type, row, meta) {
    //                     if (data) {
    //                         if (data.length > 9) {
    //                             return '<span title="' + data + '">' + data.substr(0, 8) + '...</span>';
    //                         } else {
    //                             return '<span title="' + data + '">' + data + '</span>';
    //                         }
    //                     }
    //                 }
    //             }
    //         ],
    //         "fixedHeader": true,
    //         "order": [[0, "desc"]]
    //     });
    //     $("div#footer").append("<button type=\"button\" class=\"btn btn-primary\" id=\"next\" onclick='next()'>下一步</button>");
    //     $("div#footer").append("<button type=\"button\" class=\"btn btn-default\" id=\"cancel\" onclick='cancel()'>取消</button>");
    // });
    // $("button#cancel").click(function () {
    //     console.info("111111");
    //     $("table#table3").remove();
    //     $("#table3").dataTable.fnDestroy();
    //     $("button#next").remove();
    //     $("button#cancel").remove();
    // })
    // $("button#next").click(function () {
    //     $("div#myModalLabel").html("<b>分析供应商及公司</b>");
    //     $("table#table3").remove();
    //     $("button#next").remove();
    //     $("button#cancel").remove();
    // })
});

//選擇要求表功能頁面
function start() {
    $("div#myModal").modal("show");
    firstFunction();
}

function firstFunction() {
    $("h4#myModalLabel").text("选择要求表");
    $("div#body").append("<table id=\"table3\" class=\"table table-bordered table-striped\" cellpadding=\"0\" width=\"100%\"></table>");
    table3 = $("#table3").DataTable({
        "scrollX": true,
        "scrollY": "300px",
        "autoWidth": true,
        "processing": true,
        "dom": "",
        "columns": [
            {
                "data": "PRNO",
                "width": "70px",
                "title": "要求表編號"
            },
            {
                "data": "SEQNO",
                "width": "40px",
                "title": "序號"
            },
            {
                "data": "ITEMNO",
                "width": "70px",
                "title": "物品名稱"
            },
            {
                "data": "APPROVEDDATE",
                "width": "90px",
                "title": "批核日期"
            },
            {
                "data": "UNIT",
                "width": "30px",
                "title": "單位"
            },
            {
                "data": "RQTY",
                "width": "45px",
                "title": "要求數"
            },
            {
                "data": "AQTY",
                "width": "45px",
                "title": "批核數"
            },
            {
                "data": "COST",
                "width": "30px",
                "title": "單價"
            },
            {
                "data": "APPROVED",
                "width": "40%",
                "title": "批核人"
            },
            {
                "data": "STATUS",
                "width": "40px",
                "title": "狀態"
            },
            {
                "data": "DELIVERDATE",
                "width": "90px",
                "title": "送貨日期"
            },
            {
                "data": "REMARK",
                "width": "90px",
                "title": "備註",
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
        "fixedHeader": true,
        "order": [[0, "desc"]]
    });
    $("div#footer").append("<button type=\"button\" class=\"btn btn-primary\" id=\"next\" onclick='next()'>下一步</button>");
    $("div#footer").append("<button type=\"button\" class=\"btn btn-default\" id=\"cancel\" onclick='cancel()'>取消</button>");
}

//選擇要求功能頁面取消
function cancel() {
    firstOperation();
    $("div#myModal").modal("hide");
}

//選擇要求功能頁面下一步，即分析供應商及公司頁面
function next() {
    firstOperation();
    secondFunction();
}

function secondFunction() {
    console.info("secondFunction");
    $("h4#myModalLabel").text("分析供应商及公司");
    $("div#body").append("<div id='block'><label id='label'> 選擇：</label><br><input type=\"radio\" name=\"cur\" id='cur1' value=\"cur1\"/><label id='label1'>幣值分類</label><br><input type=\"radio\" name=\"cur\" id='cur2' value=\"cur2\"><label id='label2'>幣值合計</label><br><button class=\"btn btn-primary\" id=\"submitCur\" onclick=\"submitCur()\">確定</button></div>");
    $("div#footer").append("<button type='button' class='btn btn-primary' id='back1' onclick='back1()'>上一步</button>");
    $("div#footer").append("<button type='button' class='btn btn-primary' id='next1' onclick='next1()'>下一步</button>");
    $("div#footer").append("<button type='button' class='btn btn-primary' id='again' onclick='submitCur()'>再分析一次</button>");
    $("div#footer").append("<button type='button' class='btn btn-default' id='cancel1' onclick='cancel1()'>取消</button>");
}

//分析供應商及公司頁面返回上一步
function back1() {
    secondOperation();
    firstFunction();
}

//分析供應商及公司頁面取消功能
function cancel1() {
    console.info("cancel1");
    secondOperation();
    $("#myModal").modal("hide");

}

//分析供應商及公司頁面的下一步
function next1() {
    console.info("next1");
    secondOperation();
    thirdFunction();
}

function thirdFunction() {
    $("h4#myModalLabel").text("確定採購數量");
    $("div#body").append('<table border="1" cellspacing="0" style="height: 700px" width="850px" id="mainTable">' +
        '<tr>' +
        '<td width="400px" valign="top"><table id="table4" class="table table-bordered table-striped" cellpadding="0" width="100%"></table></td></tr>' +
        '<tr><td valign="top"><table id="table5" class="table table-bordered table-striped" cellpadding="0" width="100%"></td></tr></table>');
    $("div#footer").append('<button type="button" class="btn btn-primary" id="back2" onclick="back2()">返回第一步</button><button type="button" class="btn btn-primary" id="next2" onclick="next2()">下一步</button><button type="button" class="btn btn-default" id="cancel2" onclick="cancel2()">取消</button>');
    table4 = $('#table4').dataTable({
        "scrollX": "400px",
        "scrollY": "350px",
        "autoWidth": false,
        "processing": true,
        "dom": "",
        "columns": [
            {
                "data": "SUPPNO",
                "width": "40px",
                "title": "SUPPNO"
            },
            {
                "data": "AMOUNT",
                "width": "40px",
                "title": "AMOUNT"
            },
            {
                "data": "CUR",
                "width": "30px",
                "title": "CUR"
            },
            {
                "data": "DELDATE",
                "width": "40px",
                "title": "DELDATE"
            },
            {
                "data": "LOCALTOTAL",
                "width": "40px",
                "title": "LOCALTOTAL"
            },
            {
                "data": "PODATE",
                "width": "40px",
                "title": "PODATE"
            },
            {
                "data": "TAX",
                "width": "30px",
                "title": "TAX"
            },
            {
                "data": "TAXTOTAL",
                "width": "30px",
                "title": "TAXTOTAL"
            },
            {
                "data": "TOTAL",
                "width": "30px",
                "title": "TOTAL"
            }
        ],
        "fixedHeader": true,
        "order": [[0, "desc"]]
    });
    table5 = $('#table5').dataTable({
        "scrollX": true,
        "scrollY": "400px",
        "autoWidth": true,
        "processing": true,
        "dom": "",
        "columns": [
            {
                "data": "PONO",
                "width": "40px",
                "title": "PONO"
            },
            {
                "data": "PRNO",
                "width": "40px",
                "title": "PRNO"
            },
            {
                "data": "PRSEQNO",
                "width": "40px",
                "title": "PRSEQNO"
            },
            {
                "data": "QTY",
                "width": "30px",
                "title": "QTY"
            },
            {
                "data": "UNIT",
                "width": "30px",
                "title": "UNIT"
            },
            {
                "data": "ITEMNO",
                "width": "30px",
                "title": "ITEMNO"
            },
            {
                "data": "SEQNO",
                "width": "30px",
                "title": "SEQNO"
            }
        ],
        "fixedHeader": true,
        "order": [[0, "desc"]]
    });
}

//確定採購數量頁面返回上一步
function back2() {
    console.info("back2");
    thirdOperation();
    firstFunction();
}

//確定採購數量頁面取消
function cancel2() {
    console.info("cancel2");
    thirdOperation();
    $("#myModal").modal("hide");
}

//確定採購數量頁面下一步
function next2() {
    console.info("next2");
    thirdOperation();
    forthFunction();

}

function forthFunction() {
    $('h4#myModalLabel').text("確定匯入");
    $('div#footer').append('<button type="button" class="btn btn-primary" id="sure" onclick="sure()">確定匯入</button><button type="button" class="btn btn-default" id="cancel3" onclick="cancel3()">取消匯入</button>')
}

function sure() {

    forthOperation();
    $('#myModal').modal("hide");
}

function cancel3() {
    forthOperation();
    $('#myModal').modal("hide");
}

//分析供應商級公司的選擇
function submitCur() {
    console.info("submitCur");
    var a = $("input[name='cur']:checked").val();
    console.info(a);
}

function firstOperation() {
    console.info("firstOperation");
    $("table#table3").remove();
    $("#table3").dataTable.fnDestroy;
    $("button#next").remove();
    $("button#cancel").remove();
}

function secondOperation() {
    console.info("secondOperation");
    $("div#block").remove();
    // $("input#cur1").remove();
    // $("input#cur2").remove();
    $("button#submitCur").remove();
    $("button#back1").remove();
    $("button#next1").remove();
    $("button#again").remove();
    $("button#cancel1").remove();
    // $("label#label").remove();
    // $("label#label1").remove();
    // $("label#label2").remove();
}

function thirdOperation() {
    console.info("firstOperation");
    $('table#mainTable').remove();
    $('button#back2').remove();
    $('button#next2').remove();
    $('button#cancel2').remove();
    $('#table4').dataTable.fnDestroy;
    $('#table5').dataTable.fnDestroy;
}

function forthOperation() {
    $('button#sure').remove();
    $('button#cancel3').remove()
}