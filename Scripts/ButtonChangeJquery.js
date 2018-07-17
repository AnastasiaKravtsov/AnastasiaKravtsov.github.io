$(Document).ready(function(){
    $("#myButton").click(function(){
        var x=$('#myButton').text();
        if (x=="Edit")
        {
            $("#myButton").html('Save');
            $(".inputtext").show();
            $(".divtext").hide();
        }
        else
        {
            $("#myButton").html('Edit');
            $(".inputtext").hide();
            $(".divtext").show();

            $("#divName1").text($("#Name1").val());
            $("#divName2").text($("#Name2").val());
            $("#divName3").text($("#Name3").val());
            $("#divName4").text($("#Name4").val());
            $("#divName5").text($("#Name5").val());
            $("#divName6").text($("#Name6").val());
        }
    });
});