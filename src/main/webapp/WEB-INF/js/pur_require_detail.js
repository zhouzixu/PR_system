$(function () {
    var setPrno = $('#setPrno').val();
    var setVision = $('#setVision').val();
    var table1 = $('#table1').DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,
        "processing": true,
        "dom": "<'row'<'#mytool.col-xs-2'>r>" +
        "t" +
        "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function (settings, data) {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" onclick="add()">添加</button>');
            if ($.inArray("ALL", data.data[0].AUTH) == -1 && $.inArray("VIEWPRICE", data.data[0].AUTH) == -1) {
                table1.column(15).visible(false);
                table1.column(13).visible(false);
            }
            if ($.inArray("ALL", data.data[0].AUTH) == -1 && $.inArray("VIEWPAYMENT", data.data[0].AUTH == -1)) {
                table1.column(30).visible(false);
                table1.column(31).visible(false);
                table1.column(32).visible(false);
                table1.column(33).visible(false);
            }
        },
        "serverSide": true,
        "ajax": {
            "url": "/data/require/detail",
            "type": "POST",
            "data": function (data) {
                data.prno = $.trim(setPrno);
                data.revision = $.trim(setVision);
                data = JSON.stringify(data);
                console.info(data);
                return data;
            },
            dataType: "json",
            processData: false,
            contentType: 'application/json;charset=UTF-8'
        },
        "columns": [
            {
                "data": null,
                "width": "75px",
                "title": "提示信息",
                "sDefaultContent": "",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    var temp;
                    if (row) {
                        if (row.RQTY === 0) {
                            temp = '<span title="' + data + '">要求數是零</span>';
                        } else if (row.SUPPNO === '---' || row.SUPPNO === '') {
                            temp = '<span title="' + data + '">未輸入供應商</span>';
                        } else if (row.UNIT === '---' || row.SUPPNO === '') {
                            temp = '<span title="' + data + '">未輸入單位</span>';
                        } else if (row.STATUS === 'N') {
                            temp = '<span title="' + data + '">待批核</span>';
                        } else if (row.STATUS === 'C') {
                            temp = '<span title="' + data + '">已取消</span>';
                        } else if (row.STATUS === 'Y') {
                            temp = '<span title="' + data + '">主管批核</span>';
                        } else if (row.STATUS === 'X') {
                            temp = '<span title="' + data + '">經理批核</span>';
                        } else if (row.STATUS === 'G') {
                            temp = '<span title="' + data + '">採購中</span>';
                        } else if (row.STATUS === 'E') {
                            temp = '<span title="' + data + '">已收貨</span>';
                        } else if (row.STATUS === 'R') {
                            temp = '<span title="' + data + '">退貨</span>';
                        } else if (row.STATUS === 'L') {
                            temp = '<span title="' + data + '">部分退貨</span>';
                        } else {
                            temp = '<span title="' + data + '"></span>';
                        }
                    }
                    return temp;
                }
            },
            {
                "data": null,
                "width": "75px",
                "title": "報價情況",
                "sDefaultContent": "",
                "orderable": false,
                "render": function (data, type, row, meta) {
                    var temp;
                    if (row) {
                        if (row.PRICESURE === 'Y') {
                            temp = '<span title="' + data + '">已報價</span>';
                        } else if (row.PRICESURE === 'N') {
                            temp = '<span title="' + data + '">未報價</span>';
                        }
                    }
                    return temp;
                }
            },
            {
                "data": "SEQNO",
                "width": "30px",
                "sDefaultContent": "",
                "title": "序號"
            },
            {
                "data": "ITEMNO",
                "width": "85px",
                "title": "物品編號",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "DESC1",
                "width": "85px",
                "title": "描述（一）",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "DESC2",
                "width": "85px",
                "title": "用戶描述",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 7) {
                            return '<span title="' + data + '">' + data.substr(0, 6) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "RQTY",
                "width": "60px",
                "title": "要求數量",
                "sDefaultContent": "",
            },
            {
                "data": "UNIT",
                "width": "30px",
                "sDefaultContent": "",
                "title": "單位"
            },
            {
                "data": "ISSUENAME",
                "width": "70px",
                "sDefaultContent": "",
                "title": "實際開表人"
            },
            {
                "data": "USEDINFO1",
                "width": "60px",
                "title": "用途一",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "USEDINFO2",
                "width": "60px",
                "title": "用途二",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "USEDINFO3",
                "width": "60px",
                "title": "額外說明",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "COMPANYNO",
                "width": "60px",
                "sDefaultContent": "",
                "title": "公司編號"
            },
            {
                "data": "SUPPNO",
                "width": "100px",
                "sDefaultContent": "",
                "sClass": "suppno",
                "title": "指定供應商"
            },
            {
                "data": "CUR",
                "width": "30px",
                "sDefaultContent": "",
                "title": "幣值"
            },
            {
                "data": "COST",
                "width": "60px",
                "sDefaultContent": "",
                "sClass": "cost",
                "title": "單價"
            },
            {
                "data": "ITEMREMARK",
                "width": "60px",
                "title": "採購備註",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "MONTHREQ",
                "width": "60px",
                "sDefaultContent": "",
                "title": "每月要求數"
            },
            {
                "data": "STATUS",
                "width": "30px",
                "sDefaultContent": "",
                "title": "狀況"
            },
            {
                "data": "MARKBACK",
                "width": "60px",
                "title": "批核意見",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "AQTY",
                "width": "60px",
                "sDefaultContent": "",
                "title": "批核數量"
            },
            {
                "data": "APPROVED",
                "width": "50px",
                "sDefaultContent": "",
                "title": "批核者"
            },
            {
                "data": "APPROVEDDATE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "批核日期"
            },
            {
                "data": "PURDATE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "購貨日期"
            },
            {
                "data": "PONO",
                "width": "60px",
                "sDefaultContent": "",
                "title": "購貨單號"
            },
            {
                "data": "DELIVERDATE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "送貨時間"
            },
            {
                "data": "REPTDATE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "收貨日期"
            },
            {
                "data": "PUROS",
                "width": "80px",
                "sDefaultContent": "",
                "title": "未購買數量"
            },
            {
                "data": "REPTOS",
                "width": "60px",
                "sDefaultContent": "",
                "title": "收貨數量"
            },
            {
                "data": "ITOS",
                "width": "80px",
                "sDefaultContent": "",
                "title": "已提取數量"
            },
            {
                "data": "ACNO",
                "width": "60px",
                "sDefaultContent": "",
                "title": "憑證號"
            },
            {
                "data": "INVOICE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "發票號"
            },
            {
                "data": "PAYFOR",
                "width": "75px",
                "sDefaultContent": "",
                "title": "未付款數量"
            },
            {
                "data": "PAYDATE",
                "width": "60px",
                "sDefaultContent": "",
                "title": "付款日期"
            },
            {
                "data": "PROJTYPE",
                "width": "60px",
                "title": "項目號",
                "sDefaultContent": "",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 8) {
                            return '<span title="' + data + '">' + data.substr(0, 7) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "PRICESURE",
                "width": "60px",
                "sDefaultContent": "",
                "visible": false
            },
            {
                "data": null,
                "width": "120px",
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
            //將第一行進行升序，可選擇多行進行排序，在最外中括號中添加即可
        },
        "order": [[2, "desc"]]
    });

    var table2 = $('#table2').DataTable({
        "scrollX": true,
        "scrollY": "400px",
        "autoWidth": false,
        "processing": true,
        "paging": false,
        "columns": [
            {
                "data": "PRNO",
                "width": "50px",
                "title": "PRNO",
            },
            {
                "data": "SEQNO",
                "width": "50px",
                "title": "SEQNO",
            },
            {
                "data": "REMARK",
                "width": "80px",
                "title": "REMARK",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 10) {
                            return '<span title="' + data + '">' + data.substr(0, 9) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "ISSUE",
                "width": "40px",
                "title": "ISSUE"
            },
            {
                "data": "CREATEDATE",
                "width": "90px",
                "title": "CREATEDATE"
            },
            {
                "data": "SEQNO2",
                "width": "50px",
                "title": "SEQNO2"
            },
            {
                "data": "REVISION",
                "width": "30px",
                "title": "REVISION"
            }
        ],
        "fixedHeader": true,
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
        "order": [[0, "desc"]]
    });

    var table3 = $('#table3').DataTable({
        "scrollX": true,
        "scrollY": "400px",
        "autoWidth": false,
        "processing": true,
        "paging": false,
        "dom": "<'row'<'#mytool1.col-xs-2'><'col-xs-10'f>r>" +
        "t" +
        "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool1").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>');
        },
        "columns": [
            {
                "data": "REMSEQNO",
                // "width":"40px",
                "title": "序號1"
            },
            {
                "data": "ITEMNO",
                // "width":"40px",
                "title": "物品編號"
            },
            {
                "data": "CREATEDATE",
                // "width":"60px",
                "title": "建立日期"
            },
            {
                "data": "REMARK",
                // "width":"90px",
                "title": "備註"
            },
            {
                "data": "PRNO",
                // "width":"60px",
                "title": "要求表號"
            },
            {
                "data": "PRSEQNO",
                // "width":"40px",
                "title": "序號2"
            },
            {
                "data": null,
                // "width": "120Px",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
                }
            }
        ],
        "fixedHeader": true,
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
        "order": [[2, "desc"]]
    })

    //獲取pr01表中的數據，並且填入框中
    $.ajax({
        type: "POST",
        url: "/require/detail/getData",
        async: true,
        data: {
            "prno": setPrno,
            "revision": setVision
        },
        dataType: "json",
        success: function (data) {
            $('#prno').val(data.prno);
            $('#vision').val(data.revision);
            $('#depCode').val(data.prsno);
            $('#fromPeo').val(data.issue);
            $('#prDate').val(timestampToTime(data.prdate));
            $('#status').val(data.status);
            $('#approved').val(data.approved);
            $('#approvedDate').val(timestampToTime(data.approveddate));
            $('#fromDep').val(data.fromdep);
            $('#fromGroup').val(data.fromgroup);
            $('#toDep').val(data.todep);
            $('#toGroup').val(data.togroup);
            $('#projType').val(data.projtype);
            $('#ecomDate').val(timestampToTime(data.ecomdate));
            $('#acomDate').val(timestampToTime(data.acomDdte));
            $('#msgLevel').val(data.msglevel);
            $('#remark').val(data.remark);

        }
    })
    $('#itemNo').change(function () {
        var togroup = $('#itemNo option:selected').val();
        getDesc1(togroup);
    })

    $.ajax({
        type:"POST",
        url:"/require/detail/getItemNo",
        async:true,
        dataType:"json",
        success:function (data) {
            data.forEach(function (item) {
                $('#itemNo').append("<option value="+item+">"+item+"</option>");
            })
        }
    })

    $.ajax({
        type:"POST",
        url:"/require/detail/getUnit",
        async:true,
        dataType:"json",
        success:function (data) {
            data.forEach(function (unit) {
                $("#unit").append("<option value="+unit+">"+unit+"</option>")
            })

        }
    })

    $("#save").click(function () {
        var prno=$('#pr2no').val();
        var Revision=$('#pr2Revision').val();
        var seqno=$('#seqno').val();
        var desc1=$('#desc1').val();
        var desc2=$('#desc2').val();
        var RQTY=$('#RQTY').val();
        var usedInfo1=$('#usedInfo1').val();
        var usedInfo2=$('#usedInfo2').val();
        var usedInfo3=$('#usedInfo3').val();
        var itemNo = $('#itemNo option:selected').val();
        var unit = $('#unit option:selected').val();
        var projtype = $('#projtype2 option:selected').val();
        var operation = $('#operation').val();
        alert(seqno);
        $.ajax({
            type:"POST",
            url:"/require/detail/pr02/"+operation,
            async:true,
            data:{
                "prno":prno,
                "revision":Revision,
                "seqno":seqno,
                "desc1":desc1,
                "desc2":desc2,
                "rqty":RQTY,
                "usedInfo1":usedInfo1,
                "usedInfo2":usedInfo2,
                "usedInfo3":usedInfo3,
                "itemNo":itemNo,
                "unit":unit,
                "projtype":projtype,
            },
            dataType:"json",
            success:function (data) {
                console.info(data)
                if (data==="success"){
                    alert("操作成功！");
                    $('#myModal').modal("hide");
                    window.location.reload();
                } else if (data==="noAuthority"){
                    alert("沒有權限！");
                } else if (data==="noAdd") {
                    alert("這資料已經過數或取消，資料內容不能更改!");
                }else if (data==="noLogin"){
                    alert("你還沒有登錄，請先登陸！");
                } else{
                    alert("操作失敗!");
                }
                $('#myModal').modal("hide");
            }
        })
    })
});

function transValue(object) {
    alert(object);
}

//新增功能
function add() {
    var prno = $('#prno').val();
    var revision = $('#vision').val();
    empty();
    $('#myModal').modal("show");
    getNewSeqNo(prno,revision);
    $('#pr2no').val(prno);
    $('#operation').val("add");
    $('#myModalLabel').val("添加");
    $('#pr2Revision').val(revision);

}

function delData(prno) {

}

//時間戳轉為規定樣式的日期
function timestampToTime(timestamp) {
    var date = new Date(timestamp);
    return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate()
}

//清空輸入框
function empty() {
    $('#pr2no').val("");
    $('#pr2Revision').val("");
    $('#seqno').val("");
    $('#desc1').val("");
    $('#desc2').val("");
    $('#rqty').val("");
    $('#issueTrue').val("");
    $('#usedInfo1').val("");
    $('#usedInfo2').val("");
    $('#usedInfo3').val("");
}

//獲得新的序號
function getNewSeqNo(prno,revision) {
    $.ajax({
        type:"POST",
        url:"/require/detail/getNewSeqNo",
        async:true,
        data:{
            "prno":prno,
            "revision":revision,
        },
        dataType:"json",
        success:function (data) {
            $('#seqno').val(data);
        }
    })
}


function getDesc1(itemNo) {
    $.ajax({
        type:"POST",
        url:"/require/detail/getDesc1",
        async:true,
        data:{
            "itemNo":itemNo
        },
        dataType:"json",
        success:function (data) {
            $("#desc1").val(data);
        }
    })
}

