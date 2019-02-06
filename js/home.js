makeItRain();
var slideIndex = 0;
setTimeout(function () {
    showSlides(++slideIndex);
}, 4000);

function showSlides(n) {
    console.log(n)
    if (n > 2) {
        slideIndex = 0
    }
    $(".mySlides.active").removeClass("active")
    $(".mySlides").eq(slideIndex).addClass("active")

    setTimeout(function () {
        showSlides(++slideIndex);
    }, 4000);
}

function makeItRain() {
    var maxBills = 100;

    for (var i = 0; i < maxBills; i++) {

        var random = $(window).width();

        var randomPosition = Math.floor((random * Math.random()) - 80);

        var randomTime = Math.random() * 20;
        var randomSpeed = (Math.random() * 20) + 10;
        var randomColor = getColor();

        var bills = $("<span class='billsBillsBills'>")
            .css({
                left: randomPosition,
                top: '-150px',
                "-webkit-animation-delay": randomTime + "s",
                "-webkit-animation-duration": randomSpeed + "s",
                "z-index": -100,
                "background": randomColor
            });

        $('body').append(bills);
    };
};

function getColor() {
    return "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
}