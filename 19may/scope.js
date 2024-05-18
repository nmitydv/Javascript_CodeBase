function foo(){
    var x = 10;
    function bar () {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    bar();
    console.log(x);
    // console.log(y);
}
foo();