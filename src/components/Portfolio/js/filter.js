import Isotope from "isotope-layout";
var grid = document.querySelector('.grid');
var iso = new Isotope(grid, {
    // options...
    itemSelector: '.grid-item',
    masonry: {
        columnWidth: 200
    }
});