$(document).ready(function(){
    $("button").click(function(){
        var page=(this.id) + ".html"
        $("#hidediv").hide();
        $.ajax({
            type: "GET",
            url: page,
            cashe: false,
            success:function(data){
                $("#getpage").html(data);
            }
        });
    });
});