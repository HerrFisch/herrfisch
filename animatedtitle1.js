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

var titleText = ["🌠🌠","🌠S🌠", "🌠So🌠", "🌠Soc🌠", "🌠Soci🌠", "🌠Socia🌠", "🌠Social🌠", "🌠Social 🌠", "🌠Social M🌠", "🌠Social Me🌠", "🌠Social Med🌠", "🌠Social Medi🌠", "🌠Social Media🌠"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
