let button1 = document.querySelector('#next1');
var count = 1;
button1.addEventListener('click', function () {
    if(count < 4) {
        document.querySelector('#s' + count).classList.add("dead");
        count++;
        document.querySelector("#s" + count).classList.remove("dead");
    }
});



