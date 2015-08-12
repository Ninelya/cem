$(document).ready(function () {
    var myResize = function () {
        var oWidth = $('#outer').width();
        var oHeight = $('#outer').height();
        var wWidth = $(window).width();
        var wHeight = $(window).height();
        var bWidth = $('#background').width();
        var bHeight = $('#background').height();
        var MAX_WIDTH = 4096;
        var MAX_HEIGHT = 2160;
        var MIN_HEIGHT = 320;
        var BG_WIDTH = 2320;
        var scale;

        scale = Math.min(wWidth / oWidth, wHeight / oHeight);
        if (wWidth < MIN_HEIGHT * oWidth / oHeight || wHeight < MIN_HEIGHT) {
            scale = MIN_HEIGHT / oHeight;
            $('html').css({
                overflow: 'scroll'
            });
        } else if (wWidth > MAX_WIDTH && wHeight > MAX_HEIGHT) {
            scale = MAX_HEIGHT / oHeight;
        } else {
            $('html').css({
                overflow: 'hidden'
            });
        }

        if (wHeight < MIN_HEIGHT) {
            $('#background').css({
                height: MIN_HEIGHT
            });
        } else {
            $('#background').css({
                height: wHeight
            });
        }
        $('#background').css({
            'background-size': BG_WIDTH * scale + 'px auto',
            top: 0,
        });

        var newTop = (wHeight - oHeight * scale) / 2;
        newTop = newTop < 0 ? 0 : newTop;

        $('#outer').css({
            '-webkit-transform': 'scale(' + scale + ')',
                'transform': 'scale(' + scale + ')',
                '-ms-transform': 'scale(' + scale + ')',
                '-o-transform': 'scale(' + scale + ')',
                '-moz-transform': 'scale(' + scale + ')',
        });

        $('#wrap').css({
            width: oWidth * scale,
            height: oHeight * scale,
            top: newTop
        });
    };
    myResize();
    $(window).resize(myResize);

    $(document).click(function (event) {
        if ($('#top_search').css('display') != 'none' && !$(event.target).hasClass('yes_search')) {
            $('#top_search').css({
                display: 'none'
            });
        } else if ($(event.target).is('#search_ico')) {
            $('#top_search').css({
                display: 'block'
            });
        }
    });
});