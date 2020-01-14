$(document).ready(function() {
    $("button#light-blue").click(function() {
        $("body").removeClass();
        $("body").addClass("dark-background");
    });
    $("button#green").click(function() {
        $("body").removeClass();
        $("body").addClass("light-background");
    });
});