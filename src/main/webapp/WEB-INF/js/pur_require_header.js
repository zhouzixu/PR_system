$(function () {
    var table = $('#example1').DataTable({
        "scrollX": true,
        "scrollY": "600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu": [50, 100, 500],
        "processing": true,
        "paging": true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
        "t" +
        "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" onclick="add()">添加</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">橫版列印</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">豎版列印</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">香港訂單</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">完成要求</button>&nbsp&nbsp')
        },
        "serverSide": true,
        "ajax": {
            "url": "/data/require/header",
            "type": "POST",
            "data": function (data) {
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
                "data": "PRNO",
                "width": "50px",
                "title": "要求表號",
                "render": function (data, type, row, meta) {
                    return '<a href="javascript:void(0);" onclick="transValue(' + "\'" + data + "\'" + ')">' + data + '</a> '
                }
            },
            {
                "data": "REVISION",
                "width": "30px",
                "title": "版本"
            },
            {
                "data": "ISSUENAME",
                "width": "45px",
                "orderable": false,
                "title": "發件者"
            },
            {
                "data": "PROJTYPE",
                "width": "120px",
                "title": "個案類別",
                "orderable": false,
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data.length > 11) {
                            return '<span title="' + data + '">' + data.substr(0, 10) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    } 
                }
            },
            {
                "data": "FROMDEP",
                "width": "60px",
                "title": "發件部門",
                "orderable":false
                // "visible":false
            },
            {
                "data":"FROMGROUP",
                "width":"90px",
                "title":"發件部門組別",
            },
            {
                "data": "TODEP",
                "width": "110px",
                "title": "收件部門"
            },
            {
                "data":"TOGROUP",
                "width":"110px",
                "title":"收件部門組別",
                "orderable":false,
                "visible":false
            },
            {
                "data": "PRSNO",
                "width": "60px",
                "title": "部門編號"
            },
            {
                "data": "REMARK",
                "orderable": false,
                "width": "120px",
                "title": "備註",
                "render": function (data, type, row, meta) {
                    if (data) {
                        if (data.length > 15) {
                            return '<span title="' + data + '">' + data.substr(0, 14) + '...</span>';
                        } else {
                            return '<span title="' + data + '">' + data + '</span>';
                        }
                    }
                }
            },
            {
                "data": "PRDATE",
                "width": "60px",
                "title": "建立日期"
            },
            {
                "data": "ECOMDATE",
                "width": "90px",
                "title": "要求完成日期"
            },
            {
                "data": "ACOMDATE",
                "width": "90px",
                "title": "實際完成日期"
            },
            {
                "data": "APPROVEDDATE",
                "width": "60px",
                "title": "批核日期"
            },
            {
                "data": "APPROVED",
                "width": "50px",
                "orderable": false,
                "title": "批核者"
            },
            {
                "data": "STATUSMSG",
                "width": "60px",
                "orderable": false,
                "title": "批核狀態",
                "render":function (data,type,row,meta) {
                    if (data==="Y"){
                        return "主管批核";
                    }else if (data==="X") {
                        return "經理批核";
                    }else if (data==="C"){
                        return "取消批核";
                    }else if (data==="R"){
                        return "版本處理";
                    }else if (data==="N"){
                        return "未批核";
                    }else if (data===""){
                        return "完成要求表";
                    }else if (data==="E"){
                        return "要求表已收貨";
                    }else if (data==="G"){
                        return "已購貨";
                    }
                }
            },
            {
                "data": "MSGLEVEL",
                "width": "90px",
                "orderable": false,
                "title": "訊息管理程度"
            },
            {
                "data":"HKPR",
                "width":"45px",
                "title":"HKPR",
                "orderable":false,
                "visible":false
            },
            {
                "data": null,
                "width": "180px",
                "title": "操作",
                "searchable": false,
                "orderable": false,
                "render": function (data, type, row, meta) {
                    return '<button class="btn btn-primary btn-sm" onclick="checkDetail(' + "\'" + row.PRNO + "\'" + ')"><i class="fa fa-info"></i>查看</button>' +
                        '<button class="btn btn-info btn-sm" onclick="updateData(' + "\'" + row.PRNO + "\'," +"\'" + row.REVISION + "\'," +"\'" + row.ISSUENAME + "\'," +"\'" + row.PROJTYPE + "\'," +"\'" + row.FROMDEP + "\'," +"\'" + row.TODEP + "\'," +"\'" + row.PRSNO + "\'," +"\'" + row.REMARK + "\'," +"\'" + row.PRDATE + "\'," +"\'" + row.ECOMDATE + "\'," +"\'" + row.ACOMDATE + "\'," +"\'" + row.APPROVEDDATE + "\'," +"\'" + row.APPROVED + "\'," +"\'" + row.STATUSMSG + "\'," + "\'" + row.MSGLEVEL + "\'," +"\'" + row.TOGROUP + "\'"+')" ><i class="fa fa-pencil"></i>修改</button>'
                        + '<button class="btn btn-danger btn-sm" onclick="delData(' + "\'" + row.PRNO + "\',"+"\'" + row.REVISION + "\',"+"\'" + "DELETE" + "\'," + "\'" + row.ISSUENAME + "\',"+"\'" + row.STATUSMSG + "\',"+"\'" + row.FROMDEP + "\'"+')"><i class="fa fa-trash-o"></i>刪除</button>';
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

    $('#toDep').change(function () {
        var togroup = $('#toDep option:selected').val();
        getGroup(togroup);
    })

    $('#save').click(function () {
        var prno = $('#prno').val();
        var revision = $('#revision').val();
        var prsno = $('#prsno').val();
        var issuename = $('#issuename').val();
        var prdate = $('#prdate').val();
        var statusmsg = $('#statusMsg').val();
        var fromDep = $('#fromdep').val();
        var fromGroup =$('#fromGroup').val();
        var toDep = $('#toDep option:selected').text();
        var toGroup = $('#toGroup option:selected').text();
        var ecomdate = $('#ecomdate').val();
        var acomdate = $('#acomdate').val();
        var msglevel = $('#msglevel option:selected').val();
        var remark = $('#remark').val();
        var projtype = $('#projtype option:selected').text();
        var operation =$('#operation').val();
        if (ecomdate==null||ecomdate==""){
            alert("請輸入要求完成日期");
            return;
        }
        $.ajax({
            type:"POST",
            url:"/require/header/addAndUpdate",
            async:true,
            data:{
                "prno":prno,
                "revision":revision,
                "prsno":prsno,
                "issuename":issuename,
                "prdate":prdate,
                "statusmsg":statusmsg,
                "fromDep":fromDep,
                "fromGroup":fromGroup,
                "toDep":toDep,
                "toGroup":toGroup,
                "ecomdate":ecomdate,
                "acomdate":acomdate,
                "msglevel":msglevel,
                "remark":remark,
                "projtype":projtype,
                "operation":operation,
            },
            dataType:"json",
            success:function (data) {
                console.info(data.isLogin);
                if (data.isLogin==="yes") {
                    if (data.canOperation === "yes") {
                        if (data.result === "success") {
                            if (data.operation === "update") {+
                                alert("更新成功！");
                            } else {
                                alert("添加成功！");
                            }
                        } else {
                            alert("操作失敗！");
                        }
                    } else {
                        alert("沒有權限!");
                    }
                }else{
                    alert("連接超時，請重新登錄")
                    window.location.href="/login";
                }
            }
        })
        $('#myModal').modal('hide');
        window.location.reload();
    })

    $.ajax({
        type:"get",
        url:"/require/header/dep",
        async:true,
        dataType:"json",
        success:function (data) {
            data.forEach(function (dep) {
                $('#toDep').append("<option value="+dep+">"+dep+"</option>");
            })

        }
    })

    $.ajax({
        type:"post",
        url:"/require/header/projtype",
        async:true,
        dataType:"json",
        success:function (data) {

            data.forEach(function (projtype) {
                $('#projtype').append("<option value="+projtype+">"+projtype+"</option>");
            })
        }
    })
});

function updateData(PRNO,REVISION,ISSUENAME,PROJTYPE,FROMDEP,TODEP,PRSNO,REMARK,PRDATE,ECOMDATE,ACOMDATE,APPROVEDDATE,APPROVED,STATUSMSG,MSGLEVEL,TOGROUP) {
    getGroup(TODEP);
    if (TOGROUP==null){
        $('#toGroup').val("N/A");
    } else{
        $('#toGroup').val(TOGROUP);
    }
    $("div#myModal").modal("show");
    $('#myModalLabel').text("修改");
    $('#prno').val(PRNO);
    $('#prsno').val(PRSNO);
    $('#revision').val(REVISION);
    $('#issuename').val(ISSUENAME);
    $('#prdate').val(PRDATE);
    $('#statusMsg').val(STATUSMSG);
    $('#approved').val(APPROVED);
    $('#approvedDate').val(APPROVEDDATE);
    $('#fromdep').val(FROMDEP);
    $('#toDep').val(TODEP);
    $('#ecomdate').val(ECOMDATE);
    $('#acomdate').val(ACOMDATE);
    $('#msglevel').val(MSGLEVEL);
    $('#remark').val(REMARK);
    $('#projtype').val(PROJTYPE);
    $('#operation').val("update");


}


function delData(prno,revision,authority,issue,status,fromdep) {
    alert(status);
    $.ajax({
        url:"/require/header/delete",
        async:true,
        data:{
            "num":"01",
            "authority":authority,
            "prno":prno,
            "revision":revision,
            "issue":issue,
            "status":status,
            "fromdep":fromdep,
        },
        dataType:"json",
        success:function (data) {
            if (data==="success"){
                alert("刪除成功！");
                window.location.reload();
            }else if (data==="fail") {
                alert("刪除失敗！");
            }else if (data==="noAuthority") {
                alert("沒有權限！");
            }else if (data==="noDelete"){
                alert("這資料已經過數或取消，資料內容不能更改!")
            } else{
                alert("你還沒有登錄，請先登陸")
                window.location.href="/login";
            }
        }
    })
}

function add() {
    $('#toGroup').empty();
    $('#toGroup').append('<option value="N/A">N/A</option>');
    $('#prsno').val("");
    $('#approved').val("");
    $('#approvedDate').val("");
    $('#fromdep').val("");
    $('#fromGroup').val("");
    $('#ecomdate').val("");
    $('#acomdate').val("");
    $('#msglevel option:selected').val(0);
    $('#remark').val("");
    $("div#myModal").modal("show");
    $('#myModalLabel').text("添加");
    $('#operation').val("add");
    $.ajax({
        type:"POST",
        url:"/require/header/addPrnoNumber",
        async:true,
        dataType:"json",
        success:function (data) {
            $('#prno').val(data.prno);
            $('#revision').val(data.revision);
            $('#issuename').val(data.issue);
            $('#prdate').val(data.prdate);
            $('#statusMsg').val("待批核");
            $('#fromdep').val(data.fromdep);
            $('#fromGroup').val(data.fromgroup);
        }
    })
}

function getGroup(TODEP) {
    $('#toGroup').empty();
    $('#toGroup').append('<option value="N/A">N/A</option>')
    $.ajax({
        type:"post",
        url:"/require/header/group",
        async:true,
        data:{
            "dep":TODEP,
        },
        dataType:"json",
        success:function (data) {
            data.forEach(function (group) {
                console.info(group)
                $('#toGroup').append("<option value="+group+">"+group+"</option>");
            })
            $('#toGroup').val(TOGROUP);
        }
    })
}




