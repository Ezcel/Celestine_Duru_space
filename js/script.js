var el = document.getElementById("homeButton");
var el2 = document.getElementById("postButton");

function post() {
    el2.setAttribute('class', 'active');
    el.removeAttribute('class');
}

function home() {
    el.setAttribute('class', 'active');
    el2.removeAttribute('class');
}
el2.addEventListener('click', post, false);
el.addEventListener('click', home, false);

// var hamburger = document.getElementById('navigation');

// function show() {
//     document.getElementById('navigation').setAttribute('class', 'show')
// }
// hamburger.addEventListener('click', show)

let nav = document.getElementsByName('ul')
$(document).ready(function () {
    $('#hamburger').click(function () {
        $('ul').toggleClass('show');
    });
});
