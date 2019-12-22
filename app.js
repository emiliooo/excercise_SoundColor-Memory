var min = 0;
var max = 6;


document.getElementById("btn_start").addEventListener("click", function () {
    randomBox()
});


function action() {
    var random = Math.floor(Math.random() * (+max - +min) + +min);
    var ul = document.getElementById("list_box-card");
    var items = ul.getElementsByTagName("li");
    items[random].style.opacity = 2;

    setTimeout(function () {
        items[random].style.opacity = 0.2
    }, 1000);
}


var runCount = 0;
function randomBox() {
    runCount++;
    var actionLoop = setInterval(() => {
        action()
    }, 2000);

    if (runCount > 4) {
        clearInterval(actionLoop);
    }
}