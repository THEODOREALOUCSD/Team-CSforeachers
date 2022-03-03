let button5 = document.querySelector('#next5');
var count = 1;
button5.addEventListener('click', function () {
    if(count < 4) {
        document.querySelector('#y' + count).classList.add("dead");
        count++;
        document.querySelector("#y" + count).classList.remove("dead");
    }
});