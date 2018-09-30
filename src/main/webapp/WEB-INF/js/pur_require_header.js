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
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal">添加</button>&nbsp&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">導出Excel</button>&nbsp&nbsp');
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
                "orderable":false,
                "visible":false
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
                "title": "批核狀態"
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
                        + '<button class="btn btn-danger btn-sm" onclick="delData(' + "\'" + row.PRNO + "\',"+"\'" + row.REVISION + "\',"+"\'" + "CANCEL" + "\'" + ')"><i class="fa fa-trash-o"></i>刪除</button>';
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

    $('#save').click(function () {
        // var temp = $('#statusMsg option:selected').text();
        var temp = $('#approvedDate').val();
        alert(temp);
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
});

function updateData(PRNO,REVISION,ISSUENAME,PROJTYPE,FROMDEP,TODEP,PRSNO,REMARK,PRDATE,ECOMDATE,ACOMDATE,APPROVEDDATE,APPROVED,STATUSMSG,MSGLEVEL,TOGROUP) {
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
    $("div#myModal").modal("show");
    $('#myModalLabel').text("修改");
    $('#prno').val(PRNO);
    $('#prsno').val(PRSNO);
    $('#revision').val(REVISION);
    $('#issuename').val(ISSUENAME);
    $('#prdate').val(PRDATE);
    $('#statusMsg option:selected').text(STATUSMSG);
    $('#approved').val(APPROVED);
    $('#approvedDate').val(APPROVEDDATE);
    $('#fromdep').val(FROMDEP);
    $('#toDep').val(TODEP);
    $('#ecomdate').val(ECOMDATE);
    $('#acomdate').val(ACOMDATE);
    $('#msglevel option:selected').text(MSGLEVEL);
    $('#remark').val(REMARK);

}

function checkDetail(prno) {

}

function delData(prno,revision,authority) {
    $.ajax({
        type:"post",
        url:"/delete/require/header",
        async:true,
        data:{
            "num":"01",
            "authority":authority,
            "prno":prno,
            "revision":revision,
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
            }else{
                alert("你還沒有登錄，請先登陸")
                window.location.href="/login";
            }
        }
    })
}






