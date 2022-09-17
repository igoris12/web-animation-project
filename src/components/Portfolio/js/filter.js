import $ from 'jquery';
import Isotope from 'isotope-layout';

$(document).ready(function () {
    let grid = document.querySelector('.gridBox');
    let iso = new Isotope(grid, {
        itemSelector: '.element-item',
        layoutMode: 'masonry'
    });

//     let filtersElem = document.querySelector('.portfolioFilterList');
//     filtersElem.addEventListener('click', function (event) {
//         if (event.target.localName !== "li") {
//             return;
//         }

//         let filterValue = event.target.getAttribute('data-filter');
       

//         iso.arrange({ filter: filterValue });
//     });
$('.portfolio-nav li').click(function () {
    $('.portfolio-nav .active').removeClass('active');
    $(this).addClass('active');
})
});
