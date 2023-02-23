$(document).ready(function(){
    $('#add_user').submit(function(e){
        alert("Record Inserted Successfully");
    })
});

$('#update_user').submit(function(e){
    e.preventDefault();

    var unindexed_array = $(this).serializeArray();

    var data = {}

    $.map(unindexed_array,function(n,i){
        data[n['name']] = n['value']
    })



    $.ajax({
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data,
        "success":function(data){
            alert("Record Updated Successfully");
           window.location.replace("/")
        }
    })



    console.log(unindexed_array);


    

})
if(window.location.pathname == "/"){
    $('.delete').click(function(e){
        var id = $(this).data('id');
        console.log(id);

       if(confirm("Do You Really Want To Delete This Record")){
        $.ajax({
            url:`http://localhost:3000/api/users/${id}`,
            method:"delete",
            success:function(data){
                location.reload();
            }
        })
       }
    });
}