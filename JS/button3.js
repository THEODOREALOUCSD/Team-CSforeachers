let button3 = document.querySelector('#next3');
var count = 1;
button3.addEventListener('click', function () {
    if(count < 2) {
        document.querySelector('#x' + count).classList.add("dead");
        count++;
        document.querySelector("#x" + count).classList.remove("dead");
    }
});