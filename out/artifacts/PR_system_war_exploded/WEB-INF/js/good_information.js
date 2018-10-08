var table;
$(function () {
    table = $('#table').DataTable({
        "scrollX": true,
        "scrollY": "650px",
        "autoWidth": true,//可以橫向拉動
        "lengthMenu": [10, 50, 100],
        "processing": true,
        "dom": "<'row'<'col-xs-2'l><'#mytool.col-xs-5'><'col-xs-5'f>r>" +
            "t" +
            "<'row'<'col-xs-6'i><'col-xs-6'p>>",
        "initComplete": function () {
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-target="#myModal2">添加</button>&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">列印</button>&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">報表列印</button>&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">更新資料</button>&nbsp');
            $("#mytool").append('<button type="button" class="btn btn-default btn-sm" data-toggle="modal" data-targ｛｝et="#myModal">導出Excel</button>&nbsp');
        },
        "columns": [
            {
                "data": "ITEMNO",
                "width": "60px",
                "title": "物品編號",
                "orderable": true,
                "sDefaultContent": ""
            },
            {
                "data": "ITEMTYPE",
                "width": "90px",
                "title": "物品類別",
                "orderable": false,
                "sDefaultContent": "",
                "render":function (data,type,row,meta) {
                    if (data){
                        if (data.length>9){
                            return '<span title="'+data+'">'+data.substr(0,8)+'...</span>';
                        }else{
                            return '<span title="'+data+'">'+data+'</span>';
                        }
                    }
                }
            },
            {
                "data": "DESC1",
                "width": "60px",
                "title": "內容",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "DESC2",
                "width": "60px",
                "title": "DESC2",
                "orderable": false,
                "sDefaultContent": ""
            },
            {
                "data": "CREATEDATE",
                "width": "90px",
                "title": "建立日期",
                "orderable": true,
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
                        '<button class="btn btn-info btn-sm" data-toggle="modal"  data-target="#myModal" onclick="transValue(' + "\'" + row.PRNO + "\'" + ')" ><i class="fa fa-pencil"></i>修改</button>' +
                        '<button class="btn btn-info btn-sm" onclick="editItem(' + "\'" + row.ITEMNO + "\'" + ')">編輯類別</button> '
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

function editItem(itemNo) {
    $('#myModal').modal('show');
    $('#itemno').val(itemNo);
    $('#choose').append("<tr><td><input type='checkbox' class='checkbox'></td><td>aaaaaaa</td></tr>")

    // $.ajax({
    //     type:"post",
    //     url:"",
    //     async:true,
    //     data:"itemNo="+itemNo,
    //     success:function (data) {
    //
    //     }
    // })
}

function addItem() {
    // $('#myModal').modal('hide');
    $('#myModal1').modal('show');

}