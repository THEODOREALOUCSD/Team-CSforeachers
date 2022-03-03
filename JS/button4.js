let button4 = document.querySelector('#next4');
var count = 1;
button4.addEventListener('click', function () {
    if(count < 3) {
        document.querySelector('#z' + count).classList.add("dead");
        count++;
        document.querySelector("#z" + count).classList.remove("dead");
    }
});