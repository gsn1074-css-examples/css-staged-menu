window.addEventListener("load", function() {

    var time = 0;
    var nodes = document.querySelectorAll("nav.animated > *");

    for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.animationDelay = time + "s";
        time += .5;
    }
});