gsap.registerPlugin(ScrollTrigger);

if (window.innerWidth >= 500) {
    gsap.from(".vSec-p1", {
        scrollTrigger: {
            trigger: ".videoSection",
            start: "0% 45%",
            end: "50% 45%",
            scrub: true,
        },
        y: -200,
        ease: "sine.inOut",
    });
    gsap.from(".vSec-p5", {
        scrollTrigger: {
            trigger: ".videoSection",
            start: "0% 45%",
            end: "50% 45%",
            scrub: true,
        },
        y: -200,
        ease: "sine.inOut",
    });
    gsap.from(".vSec-p2", {
        scrollTrigger: {
            trigger: ".videoSection",
            start: "10% 45%",
            end: "50% 45%",
            scrub: true,
        },
        y: -100,
        ease: "sine.inOut",
    });
    gsap.from(".vSec-p4", {
        scrollTrigger: {
            trigger: ".videoSection",
            start: "10% 45%",
            end: "50% 45%",
            scrub: true,
        },
        y: -100,
        ease: "sine.inOut",
    });
    gsap.from(".vSec-p3", {
        scrollTrigger: {
            trigger: ".videoSection",
            start: "10% 45%",
            end: "50% 45%",
            scrub: true,
        },
        y: 20,
        ease: "sine.inOut",
    });

    gsap.from(".s3Vid1", {
        scrollTrigger: {
            trigger: ".section3",
            start: "10% 60%",
            end: "30% 65%",
            scrub: true,
        },
        scale: 1.2,
        y: -50,
        ease: "sine.inOut",
    });
    gsap.from(".s3Vid2", {
        scrollTrigger: {
            trigger: ".section3",
            start: "50% 60%",
            end: "80% 65%",
            scrub: true,
        },
        y: -50,
        scale: 1.2,
        ease: "sine.inOut",
    });
    gsap.from(".s3Vid3", {
        scrollTrigger: {
            trigger: ".section3",
            start: "0% 60%",
            end: "30% 65%",
            scrub: true,
        },
        y: -50,
        scale: 1.2,
        ease: "sine.inOut",
    });
    gsap.from(".s3Vid4", {
        scrollTrigger: {
            trigger: ".section3",
            start: "30% 60%",
            end: "50% 65%",
            scrub: true,
        },
        y: -50,
        scale: 1.2,
        ease: "sine.inOut",
    });
}