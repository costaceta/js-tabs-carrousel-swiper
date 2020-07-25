/**
 * Swiper
 */
new Swiper(".swiper-container", {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/**
 * Tabs
 */
$('a[data-toggle="pill"]').each( (index, input) => {
    $(input).on('shown.bs.tab', function (e) {
       let id = index + 1;
       let thisSwiper = $('#swiper-'+ id).get(0);

       thisSwiper.swiper.update();
    })
})
