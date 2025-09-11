/** Hero exitlag slide actions */
$('.exitlag_action .button_exl').on('click', function(){
    $(this).toggleClass('active');
    var ping = $('.ping');
    var svg = $('.map svg');
    svg.find('.exitlag_off').toggleClass('active');
    svg.find('.exitlag_on').toggleClass('active');
    ping.toggleClass('active');
    var ms = ping.find('span');
    if (ping.hasClass('active')) {
        ms.prop('Counter',221).animate({
            Counter: 147
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                ms.text(Math.ceil(now)).append('ms');
            }
        });
    } else {
        ms.prop('Counter',147).animate({
            Counter: 221
        }, {
            duration: 1000,
            easing: 'swing',
            step: function (now) {
                ms.text(Math.ceil(now)).append('ms');
            }
        });
    }
    
});

/** Hero numbers each */
$('.number').each(function () {
    var counter = $(this).find('.count');
    counter.prop('Counter',0).animate({
        Counter: counter.data('value')
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            if (counter.hasClass('count_pos')) {
                var pos = counter.data('pos');
                counter.text('+' + Math.ceil(now) + pos);
            } else {
                counter.text('+' + Math.ceil(now));
            }
        }
    });
});

/** Parallax Efect */
$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
});