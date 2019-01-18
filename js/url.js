var android = /(android)/i.test(navigator.userAgent);
var iOS = /(iPhone|iPad|iPod)/g.test(navigator.userAgent);

alert(navigator.userAgent)
alert(android)
alert(iOS)

if (android && !iOS) {
    document.getElementById('main').innerHTML = ""
    window.location.href = "https://play.google.com/store/apps/details?id=com.colormatch"
}

else {
    document.getElementById('main').innerHTML = ""
    window.location.href = ""
}