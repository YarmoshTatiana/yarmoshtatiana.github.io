$(function () {
    var text = $("#text");
    var color = $("#color");
    var marker = $("#marker");
    var create = $("#create");
    var change = $("#change");
    var deleteCurrent = $("#delete");
    var ulOutput = $("#output > ul");

    create.click(function () {
        ulOutput.append($("<li></li>").text(text.val()).css({
            "color": color.val(),
            "listStyleType": marker.val()
        }).click(addActive));
        text.val("");
        color.val("");

    });

    function addActive() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $(".active").removeClass("active");
            $(this).addClass("active");
            text.val( $(this).text() );
            color.val( $(this).css("color"));
            marker.val( $(this).css("listStyleType") );  
                
        }
    }

    change.click(function(){
        $(".active").text(text.val()).css({
            "color":color.val(),
            "listStyleType":marker.val()
        });
    });
    
    deleteCurrent.click(function(){
        $(".active").remove();
    });
    
});
