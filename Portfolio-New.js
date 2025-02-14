gsap.registerPlugin(ScrollTrigger);

// Animate the black container
gsap.from(".container-portfolio", {
    x: "110vw", // Move into the viewport
    // y:"-20vh",
    borderTopLeftRadius: 130,
    ease: "power1.inOut", // Smoother easing
    scrollTrigger: {
        trigger: ".Portfolio-New",
        start: "0% 90%", // Trigger when the parent enters the viewport
        end: "46% 30%", // Trigger ends when the parent leaves the viewport
        scrub: 1, // Smooth scrubbing with delay
        // pin:true,
        // markers: true

    }
});





gsap.to(".h222", {
    x: "-70vw", // Move far left, ensuring it scrolls out of view
    // ease: "none", // Keep it synced with scrolling
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".Portfolio-New",
        start: "12% 30%", // Trigger when the parent enters the viewport
        end: "250% 70%", // Trigger ends when the parent leaves the viewport
        scrub: 3, // Smooth animation tied to scroll
        // markers: true, // Debugging, remove in production
        // pin: true,
    }
});


// Animate the red container
gsap.to(".portfolio-pics-Container", {
    y: "-450vh", // Move into the viewport
    //   opacity: 1, // Fade in
    ease: "power1.inOut", // Smoother easing
    scrollTrigger: {
        trigger: ".Portfolio-New",
        start: "0% 0%", // Trigger when the parent enters the viewport
        end: "250% 1%", // Trigger ends when the parent leaves the viewport
        scrub: 1, // Smooth scrubbing with delay
        // markers: true,
        pin: true
    }
});









// Animate the heading text
// gsap.from(".HeadingText", {
//     x: "210vw", // Move into the viewport
//     //   opacity: 1, // Fade in
//     ease: "power1.inOut", // Smoother easing
//     scrollTrigger: {
//         trigger: ".Portfolio-New",
//         start: "20% 70%", // Sync with parent
//         end: "25% 75%", // Sync with parent
//         scrub: 1, // Smooth scrubbing with delay
//         markers: true,
//         // pin: true
//     }
// });











// Animate the heading text
// gsap.to(".HeadingText", {
//     x: "-250vw", // Move far left, ensuring it scrolls out of view
//     ease: "none", // Keep it synced with scrolling
//     scrollTrigger: {
//         trigger: ".Portfolio-New",
//         start: "20% 70%", // Trigger when the parent enters the viewport
//         end: "25% 55%", // Trigger ends when the parent leaves the viewport
//         scrub: 3, // Smooth animation tied to scroll
//         markers: true, // Debugging, remove in production
//     }
// });







// // Animate the wheat container
// gsap.from(".inner-Portfolio-pics-Container", {
//     y: "40%", // Move into the viewport
//     //   opacity: 1, // Fade in
//     ease: "power1.inOut", // Smoother easing
//     scrollTrigger: {
//         trigger: ".container-portfolio",
//         start: "1% 14%", // Sync with parent
//         end: "5% 20%", // Sync with parent
//         scrub: 1, // Smooth scrubbing with delay
//         markers: true,
//         // pin: true
//     }
// });
