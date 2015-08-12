$(document).ready(function () {
    var myResize = function () {
		var oWidth = $('#outer').width();
        var oHeight = $('#outer').height();
        var wWidth = $(window).width();
        var wHeight = $(window).height();
		var DEL_HEIGHT = 650;
        
        if (wWidth < DEL_HEIGHT * oWidth / oHeight || wHeight < DEL_HEIGHT) {
            $('#sidebar').css({
                display: 'none'
            });
            $('#textbar').css({
                width: 1004
            });
        } else {
            $('#sidebar').css({
                display: 'block'
            });
            $('#textbar').css({
                width: 662
            });
        }
    };
    myResize();
    $(window).resize(myResize);
});