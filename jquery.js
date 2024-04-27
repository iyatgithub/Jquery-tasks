$(function(){
    //jquery will execute this function after the page load
    $("#addbutton").click(handlebtnclick);
    //$("#todos li").click(removeMe);
    $("#todos").on("click","li", removeMe);
});
function handlebtnclick(){
    //alert("Add btn");
    var newtodo = $("#newtodo").val();
    $("#todos").append("<li>" + newtodo + "</li>");
    if(!newtodo){
        $("#newtodo").addClass("error");
        return;
    }
}
function removeMe(){
    $(this).fadeOut();
}
