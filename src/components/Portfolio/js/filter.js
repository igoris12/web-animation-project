import $ from 'jquery';
import Isotope from 'isotope-layout';

$(document).ready(function () {
    let grid = document.querySelector('.grid');
    let iso = new Isotope(grid, {
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });

});