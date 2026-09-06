function dovilnyText(dovilnyText, time) {
    setTimeout(function() {
        console.log(dovilnyText);
    }, time);
}

dovilnyText('Hello, world!', 5000);