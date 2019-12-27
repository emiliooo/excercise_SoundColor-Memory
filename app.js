var min = 0,
    max = 6,
    runCount = 0,
    actionLoop,
    listsNumbersCard = [],
    clickedList = [],
    status = 0;

document.getElementById("btn_start").addEventListener("click", function () {
    runCount = 0;
    listsNumbersCard = []
    clickedList = [];
    status = 0;
    randomBox();
});

document.getElementById("btn_check").addEventListener("click", function () {
    for (var i = 0; i < listsNumbersCard.length; i++) {
        if (listsNumbersCard[i] === clickedList[i]) {
            status++
        }
    }

    if (status == listsNumbersCard.length && listsNumbersCard.length == clickedList.length) {
        alert('BRAWO !!!')
    } else {
        alert('ZLE !!')
    }
});


document.getElementById("list_box-card").addEventListener("click", function (event) {
    console.log(event.target.id);
    clickedList.push(event.target.id);

    document.getElementById(event.target.id).style.opacity = 2
    sound();
    setTimeout(function () {
        document.getElementById(event.target.id).style.opacity = 0.2
    }, 1000);
});


function action() {
    var random = Math.floor(Math.random() * (+max - +min) + +min);
    var ul = document.getElementById("list_box-card");
    var items = ul.getElementsByTagName("li");
    items[random].style.opacity = 2;

    setTimeout(function () {
        items[random].style.opacity = 0.2
    }, 1000);

    listsNumbersCard.push(items[random].id);
    sound();

    if (runCount > 4) {
        clearInterval(actionLoop);
    }
    console.log(listsNumbersCard)
}

function randomBox() {
    actionLoop = setInterval(() => {
        runCount++;
        action();
    }, 2000);
}

function sound() {
    var audio = new Audio('./sounds/clay.mp3');
    audio.play();
}