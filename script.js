var typed = new Typed('#element', {
    strings: ['Web Developer', 'Desktop Developer', 'DevOps Engineer'],
    typeSpeed: 50,
    loop: true // Add the loop option
});

function redirectToGitHub() {
    window.open("https://github.com/EidMuhammadlaghari", "_blank");
}


var lastScrollTop = 0;

document.addEventListener('scroll', function () {
    var elements = document.getElementsByClassName('anima');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position - windowHeight <= 0) {
            element.style.opacity = '1';
        } else if (scrollTop < lastScrollTop) {
            element.style.opacity = '0';
        }
    }

    lastScrollTop = scrollTop;
});
  