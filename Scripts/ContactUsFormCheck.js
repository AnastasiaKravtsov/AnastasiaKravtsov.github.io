$(document).ready(function(){
    $("#sendbutton").click(function(){
        var r = confirm("Are you sure you want to send the form?");
        while (r!=true)
        {
            var reply = prompt("Please enter another email", "");
            $("#cemail").val(reply);
            var r = confirm("Are you sure you want to send the form?");
        }
        alert("The form was sent successfuly"); 
    });
});