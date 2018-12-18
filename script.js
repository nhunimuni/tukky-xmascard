window.addEventListener("DOMContentLoaded", init, false);

function init() {
    var button = document.getElementsByTagName("button");
    console.log(button);

    var isTurned = true;

    button[0].addEventListener("click", function () {
        var inner = document.getElementsByClassName("flip-card-inner");
        if (isTurned) {
          inner[0].style.transform = "rotateY(180deg)";
          isTurned = false;
          console.log("back");
        } else {
          inner[0].style.transform = "rotateY(0deg)";
          isTurned = true;
          console.log("front");
        }
    });
}
