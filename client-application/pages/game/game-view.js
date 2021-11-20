let scrollingSeconds = 20000;

$(window).on('load', function () {
    // $('html,body').animate({scrollTop: 0}, 0);

    // startAddBackground(1)
    // page_scroll(scrollingSeconds);
    loadParticleJs();
    unlimitedScroll();
    answerButtonClickEvent();
})

function loadParticleJs() {
    particlesJS.load('background', '../script/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
        $('#background').prepend($('.particles-js-canvas-el')[0]);
    });
}


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function page_scroll(scrollingSeconds) {
    // $('html,body').animate({scrollTop: 0}, 1500);

    $("html, body").animate({
        scrollTop: 0//$('#background-container').height()

    }, scrollingSeconds, function () {
        // page_scroll(); // onComplete Animate
    });
}


function startAddBackground(timeSec) {
    setInterval(function () {
        $('#background-container').prepend("<main class=\"background-image\"></main>");
    }, (timeSec*1000));
}


function unlimitedScroll() {
    $(window).scroll(function() {
        console.log("$(window).scrollTop()",$(window).scrollTop())
        if ( $(window).scrollTop() >= 18830 ) {
            $(window).scrollTop(201);
        }
        else if ( $(window).scrollTop() == 0 ) {
            $(window).scrollTop(18629);
        }
    });
}

function answerButtonClickEvent() {
    $('.quiz-a-item').on('click',function () {
        scaleEffect();
    })
}

function scaleEffect() {
    $('#background').css('transform', 'scale(1.2)');
    $('.space-craft-wrapper').css({
        transform: 'scale(0.8)',
        'margin-bottom': '120px'
    });
    setTimeout(function () {
        $('#background').css('transform', 'scale(1)');
        $('.space-craft-wrapper').css({
            // 'transition': 'margin-bottom 1.5s',
            transform: 'scale(1)',
            'margin-bottom': '0px'
        });
    }, 1000)
}
