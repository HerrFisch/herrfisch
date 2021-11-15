if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 500);

}

var x = 0;

var titleText = ["H, He , Her , Herr , HerrF , HerrFi , HerrFis , HerrFisc , HerrFisch , WEEEEE"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
