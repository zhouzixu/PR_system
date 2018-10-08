var table;
$(function () {
    table = $('#table').DataTable({
        // ajax: {
        //     url: ""
        // },
        "processing": true,
        // "scrollCollapse": true, //高度自適應
        // "serverSide": true,
        "scrollY": "600px",
        "scrollX": true,
        "autoWidth": true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete":function () {
            $('#mytool').append( '<button class="btn btn-default btn-sm"  type="button" id="reload" data-toggle="modal" data-target="#employeeModal">刷新表格</button>' +
                '<button class="btn btn-default btn-sm" type="button" id="search" style="margin-left:20px;" data-toggle="modal" >查询</button>' +
                '<button class="btn btn-default btn-sm" type="button" id="impot" style="margin-left:20px;" data-toggle="modal" >導出</button>' +
                '<button class="btn btn-danger btn-sm" type="button" id="clearSearch" style="margin-left:20px;" data-toggle="modal" >重置</button>')
            $("input[type='search']").parent().hide();
        },
        "columns": [
            {
                "data": "STATUSNAME",
                "width": "45px",
                "title": "狀態"
            },
            {
                "data": "STAFF",
                "width": "45px",
                "title": "採購員"
            },
            {
                "data": "FROMDEP",
                "width": "45px",
                "title": "發出部門"
            },
            {
                "data": "ISSUENAME",
                "width": "45px",
                "title": "要求人"
            },
            {
                "data": "PRDATE",
                "width": "90px",
                "title": "出單日期"
            },
            {
                "data": "DELIVERDATE",
                "width": "90px",
                "title": "要求完成日期"
            },
            {
                "data": "ECOMDATE",
                "width": "90px",
                "title": "要求完成期"
            },
            {
                "data": "PROJTYPE",
                "width": "45px",
                "title": "項目號"
            },
            {
                "data": "PRNO",
                "width": "70px",
                "title": "要求表號"
            },
            {
                "data": "ITEMNO",
                "width": "70px",
                "title": "物品編號"
            },
            {
                "data": "DESC1",
                "width": "90px",
                "title": "物品說明（一）"
            },
            {
                "data": "DESC2",
                "width": "90px",
                "title": "物品說明（二）"
            },
            {
                "data": "RQTY",
                "width": "60px",
                "title": "要求數量"
            },
            {
                "data": "UNIT",
                "width": "45px",
                "title": "單位"
            },
            {
                "data": "AQTY",
                "width": "60px",
                "title": "批核數量"
            },
            {
                "data": "COST",
                "width": "45px",
                "title": "單價"
            },
            {
                "data": "NOWCOST",
                "width": "45px",
                "title": "總價"
            },
            {
                "data": "SUPPNO",
                "width": "70px",
                "title": "供應商編號"
            },
            {
                "data": "SUPPNAME",
                "width": "70px",
                "title": "供應商名稱"
            },
            {
                "data": "APNAME",
                "width": "45px",
                "title": "批核人"
            },
            {
                "data": "APPROVEDDATE",
                "width": "90px",
                "title": "批核日期"
            },
            {
                "data": "PURDATE",
                "width": "90px",
                "title": "購貨日期"
            },
            {
                "data": "REPTOS",
                "width": "45px",
                "title": "收貨數"
            },
            {
                "data": "PONO",
                "width": "70px",
                "title": "購貨單編號"
            },
            {
                "data": "REPTDATE",
                "width": "90px",
                "title": "收貨日期"
            },
            {
                "data": "CAT",
                "width": "70px",
                "title": "物品類型"
            },
            {
                "data": "ITNAME",
                "width": "45px",
                "title": "提取人"
            },
            {
                "data": "ITOS",
                "width": "70px",
                "title": "提取數量"
            },
            {
                "data": "ITDATE",
                "width": "90px",
                "title": "提取時間"
            },
            {
                "data": "WHQTY",
                "width": "45px",
                "title": "庫存"
            },
            {
                "data": "STATUS",
                "width": "45px",
                "title": "狀態"
            },
            {
                "data": "ISSUETRUE",
                "width": "45px",
                "title": "開表要求人"
            },
            {
                "data": "USEDINFO1",
                "width": "45px",
                "title": "使用地"
            },
            {
                "data": "USEDINFO2",
                "width": "45px",
                "title": "用途"
            },
            {
                "data": "USEDINFO3",
                "width": "45px",
                "title": "額外說明"
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

    });
    $('#time1').click(function () {
        alert(this.checked);
    })
});