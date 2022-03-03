let button2 = document.querySelector('#next2');
var count1 = 1;
button2.addEventListener('click', function () {
    if(count1 < 4) {
        document.querySelector('#v' + count1).classList.add("dead");
        count1++;
        document.querySelector("#v" + count1).classList.remove("dead");
    }
});