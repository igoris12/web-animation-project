import $ from 'jquery';
import Isotope from 'isotope-layout';

$(document).ready(function () {
    let grid = document.querySelector('.grid');
    let iso = new Isotope(grid, {
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });

    let filtersElem = document.querySelector('.portfolioFilterList');
    filtersElem.addEventListener('click', function (event) {
        if (event.target.localName !== "li") {
            return;
        }

        let filterValue = event.target.getAttribute('data-filter');
        console.log(filterValue);

        iso.arrange({ filter: filterValue });
    });
});

