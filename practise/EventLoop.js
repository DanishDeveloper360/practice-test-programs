for (var i = 0; i < 5; i++) {

    (function (i) {
        setTimeout(function () {
            console.log(i);
        }); // output : 5 times 5..
    })(i);
}