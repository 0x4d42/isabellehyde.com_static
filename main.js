// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").classList.add("sticky-nav");
    } else {
        document.getElementById("navbar").classList.remove("sticky-nav");
    }
}

function toggleMobile() {
    document.getElementById("navlist").classList.toggle("m-navlist");
    navItems = document.getElementsByClassName("navitem");
    Array.prototype.forEach.call(navItems, function(item) {
        item.classList.toggle("m-navitem");
    });
}