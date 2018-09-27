$(function () {
    var table = $('#example1').DataTable({
        "scrollX": true,
        "scrollY":"600px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu":[100,1000,10000],
        "processing":true,
        "serverSide":true,
        "ajax":{
            "url":"/data/require/header", 
            "type":"POST",
            "data":function (data) {
                data=JSON.stringify(data);
                console.info(data);
                return data;
            },
            dataType:"json",
            processData:false,
            contentType:'application/json;charset=UTF-8'
        },
        "paging":true,
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
        // "data": [{
        //     "PRNO": "PR00002085",
        //     "REVISION": "0",
        //     "ISSUENAME": "SD02552",
        //     "PROJTYPE": "4",
        //     "FROMDEP": "香港採購部",
        //     "TODEP": "供應商開發與管理部",
        //     "PRSNO": "行政部F-A",
        //     "REMARK": "123123121e1212w12e12e1e12e1e212e12e1eeee12e12e1e1edfweqeqe1edae",
        //     "PRDATE": "2010-12-20",
        //     "ECOMDATE": "2010-12-20",
        //     "ACOMDATE": "2010-12-20",
        //     "APPROVEDDATE": "2010-12-20",
        //     "APPROVED": "KAM2",
        //     "STATUSMSG": "X",
        //     "MSGLEVEL": "1"
        // }],
        "columns": [
            {
                "data": "PRNO",
                "width": "50px",
                "title": "要求表號",
                "render":function (data,type,row,meta) {
                    return '<a href="javascript:void(0);" onclick="transValue(' + "\'" + data + "\'" + ')">'+data+'</a> '
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
                "title": "發件者"
            },
            {
                "data": "PROJTYPE",
                "width": "60px",
                "title": "個案類別"
            },
            {
                "data": "FROMDEP",
                "width": "60px",
                "title": "發件部門"
            },
            {
                "data": "TODEP",
                "width": "110px",
                "title": "收件部門"
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
                        if (data.length > 13) {
                            return '<span title="' + data + '">' + data.substr(0, 12) + '...</span>';
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
                "title": "批核者"
            },
            {
                "data": "STATUSMSG",
                "width": "60px",
                "title": "批核狀態"
            },
            {
                "data": "MSGLEVEL",
                "width": "90px",
                "title": "訊息管理程度"
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
            },
            //將第一行進行升序，可選擇多行進行排序，在最外中括號中添加即可
            "order": [[0, "desc"]]
        }
    });
});

function transValue(object) {
    alert(object);
}

function checkDetail(prno) {

}

function delData(prno) {

}



