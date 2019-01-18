var android = /(android)/i.test(navigator.userAgent);
var iOS = /(iPhone|iPad|iPod)/g.test(navigator.userAgent);

if (android && !iOS) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.colormatch"
}

else if (iOS && !android) {
    window.location.href = ""
}