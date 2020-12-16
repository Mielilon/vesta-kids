//= jquery.min.js
//= owl.carousel.js

AOS.init();

//parallax
// document.body.addEventListener("mousemove", e => {
//   const maxOffset = 100
//   const offsetRatio = 15
//   const wrapper = $('#parallaxWrapper')[0]
//   const wrapperRect = wrapper.getBoundingClientRect()
//   const offsetX = (-e.clientX + wrapperRect.left + wrapperRect.width / 2) / offsetRatio
//   const offsetY = (-e.clientY + wrapperRect.top + wrapperRect.height / 2) / offsetRatio
//   const resultedX = Math.max(Math.min(offsetX, maxOffset), -maxOffset)
//   const resultedY = Math.max(Math.min(offsetY, maxOffset), -maxOffset)

//   $('#bedImg').css('transform', `translate(${resultedX}px, ${resultedY}px)`)
//   $('#figureLightYellow').css('transform', `translate(${resultedX * 1.5}px, ${resultedY * 1.5}px)`)
//   $('#figureYellow').css('transform', `translate(${resultedX * 0.5}px, ${resultedY * 0.5}px)`)
// });



$(".reviews__carousel").owlCarousel({
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        }
    },
});
