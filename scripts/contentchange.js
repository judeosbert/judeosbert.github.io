/**
 * Created by jude on 10/1/16.
 */
$(document).ready(function()
{
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $("#main_left_owndetails").hide();

    $("#interactive").on("click",function()
    {
        $("#greet_hello").text("about").addClass("animated").addClass("fadeIn");
        $("#me_intro").text("Currently a 2nd year student at VIT for B-Tech in Computer Science Engineering").addClass("animated").addClass("fadeIn");
        $("#main_left_ownimg").addClass("animated").addClass("slideOutUp");
        $("#main_left_owndetails").show().addClass("slideInUp");

    });
    $("#acad").on("click",function()
    {
        window.location.href = "academics";

    });




});