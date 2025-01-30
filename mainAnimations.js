gsap.registerPlugin(ScrollTrigger);

function applyScrollAnimations() {
    if (window.innerWidth > 500) {
        gsap.to(".vidCard", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "53% 50%",
                end: "80% 50%",
                scrub: true,
            },
            width: "81vw",
            height: "95vh",
            ease: "sine.inOut",
        });
    
        gsap.to(".videoIn", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "53% 50%",
                end: "80% 50%",
                scrub: true,
            }, 
            width: "81vw",
            height: "95vh",
            ease: "sine.inOut",
        });
    
        gsap.to(".vSec-p1", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "-20% 50%",
                end: "30%% 50%",
                scrub: true,
            },
            transform: "translateY(0vw)",
            ease: "sine.inOut",
        });
        gsap.to(".vSec-p2", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "-20% 50%",
                end: "30%% 50%",
                scrub: true,
            },
            transform: "translateY(7vw)",
            ease: "sine.inOut",
        });
        gsap.to(".vSec-p3", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "-20% 50%",
                end: "30%% 50%",
                scrub: true,
            },
            transform: "translateY(4vw)",
            ease: "sine.inOut",
        });
        gsap.to(".vSec-p4", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "-20% 50%",
                end: "30%% 50%",
                scrub: true,
            },
            transform: "translateY(2vw)",
            ease: "sine.inOut",
        });
        gsap.to(".vSec-p5", {
            scrollTrigger: {
                trigger: ".videoSection",
                start: "-20% 50%",
                end: "30%% 50%",
                scrub: true,
            },
            transform: "translateY(5vw)",
            ease: "sine.inOut",
        });
    
    
        gsap.to("#br1", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "0% 90%",
              end: "8% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl1", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "0% 90%",
              end: "8% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br2", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "9% 90%",
              end: "20% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl2", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "9% 90%",
              end: "20% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br3", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "25% 90%",
              end: "30% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl3", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "25% 90%",
              end: "30% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
        gsap.to("#br4", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "38% 90%",
              end: "42% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl4", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "38% 90%",
              end: "42% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
        gsap.to("#br5", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "50% 90%",
              end: "55% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl5", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "50% 90%",
              end: "55% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br6", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "63% 90%",
              end: "68% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl6", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "63% 90%",
              end: "68% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br7", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "73% 90%",
              end: "80% 60%",
            //   scrub: ,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl7", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "73% 90%",
              end: "80% 60%",
            //   scrub: ,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br8", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "90% 90%",
              end: "95% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl8", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "90% 90%",
              end: "95% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
        gsap.to("#br7", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "75% 90%",
              end: "80% 60%",
              scrub: true,
            },
            y: "0vh" ,
            opacity: 1,
          });
          gsap.to("#bl7", {
            scrollTrigger: {
              trigger: ".serv-p2",
              start: "75% 90%",
              end: "80% 60%",
              scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
          });
    
    
    
            
    
        gsap.to(".card-1", {
        scrollTrigger: {
            trigger: ".acheive",
            start: "-10% 90%",
            end: "30% center",
            scrub: true,
            // markers:true
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
        });
        gsap.to(".card-2", {
        scrollTrigger: {
            trigger: ".acheive",
            start: "20% 90%",
            end: "30% center",
            scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
        });
        gsap.to(".card-3", {
        scrollTrigger: {
            trigger: ".acheive",
            start: "40% 90%",
            end: "50% center",
            scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
        });
        gsap.to(".card-4", {
        scrollTrigger: {
            trigger: ".acheive",
            start: "70% 90%",
            end: "80% center",
            scrub: true,
        },
        x: 0 ,
        rotate: 0,
        opacity: 1,
        });

        
    } else {

        gsap.from("#br1", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "0% 90%",
                end: "8% 60%",
                scrub: true,
                markers:true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl1", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "0% 90%",
                end: "8% 60%",
                scrub: true,
            },
            x: "-10vw",
            rotate: -40,
            opacity: 0,
            });
    
        
        gsap.from("#br2", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "9% 90%",
                end: "20% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl2", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "9% 90%",
                end: "20% 60%",
                scrub: true,
            },
            x: 50,
            rotate: 40,
            opacity: 0,
            });
    
        
        gsap.from("#br3", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "25% 90%",
                end: "30% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl3", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "25% 90%",
                end: "30% 60%",
                scrub: true,
            },
            x: -50,
            rotate: -40,
            opacity: 0,
            });
        
        gsap.from("#br4", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "38% 90%",
                end: "42% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl4", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "38% 90%",
                end: "42% 60%",
                scrub: true,
            },
            x: 50,
            rotate: 40,
            opacity: 0,
            });
        
        gsap.from("#br5", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "50% 90%",
                end: "55% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl5", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "50% 90%",
                end: "55% 60%",
                scrub: true,
            },
            x: -50,
            rotate: -40,
            opacity: 0,
            });
    
        
        gsap.from("#br6", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "63% 90%",
                end: "68% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl6", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "63% 90%",
                end: "68% 60%",
                scrub: true,
            },
            x: 50,
            rotate: 40,
            opacity: 0,
            });
    
        
        gsap.from("#br7", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "73% 90%",
                end: "80% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl7", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "73% 90%",
                end: "80% 60%",
                scrub: true,
            },
            x: -50,
            rotate: -40,
            opacity: 0,
            });
    
        
        gsap.from("#br8", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "90% 90%",
                end: "95% 60%",
                scrub: true,
            },
            y: "10vh" ,
            opacity: 0,
            });
            gsap.from("#bl8", {
            scrollTrigger: {
                trigger: ".serv-p2",
                start: "90% 90%",
                end: "95% 60%",
                scrub: true,
            },
            x: 50,
            rotate: 40,
            opacity: 0,
            });
                
        gsap.to(".card-1", {
            scrollTrigger: {
                trigger: ".acheive",
                start: "-10% 90%",
                end: "10% center",
                scrub: true,
                // markers:true
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
        });
        gsap.to(".card-2", {
            scrollTrigger: {
                trigger: ".acheive",
                start: "70% 90%",
                end: "50% 30%",
                scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
        });
        gsap.to(".card-3", {
            scrollTrigger: {
                trigger: ".acheive",
                start: "30% 90%",
                end: "30% center",
                scrub: true,
                markers:true
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
        });
        gsap.to(".card-4", {
            scrollTrigger: {
                trigger: ".acheive",
                start: "90% 90%",
                end: "80% center",
                scrub: true,
            },
            x: 0 ,
            rotate: 0,
            opacity: 1,
        });
    }
}

// Initial check on page load
applyScrollAnimations();

// Recheck on window resize
window.addEventListener('resize', applyScrollAnimations);



const splitTypes = document.querySelectorAll('.aPara1');

splitTypes.forEach((char,i) => {
    
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const fontFamily = "'Montserrat', sans-serif";
    
    const text = new SplitType(char, { types: 'chars'});
    text.chars.forEach(charElement => {
        charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
    });
    
    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            // transition: "0.3s ease color",
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: '100% 60%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
        });
});
    
    
const splitTypes2 = document.querySelectorAll('.aPara2');

splitTypes2.forEach((char,i) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const fontFamily = "'Montserrat', sans-serif";
    
    const text = new SplitType(char, { types: 'chars'});
    text.chars.forEach(charElement => {
        charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
    });
    
    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            // transition: "0.3s ease color",
            scrollTrigger: {
                trigger: char,
                start: '-10% 60%',
                end: '100% 60%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
        });
});

    
const splitTypes3 = document.querySelectorAll('.aPara3');

splitTypes3.forEach((char,i) => {
    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor
    const fontFamily = "'Montserrat', sans-serif";
    
    
    const text = new SplitType(char, { types: 'chars'});
    text.chars.forEach(charElement => {
        charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
    });
    
    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.3,
            stagger: 0.02,
            // transition: "0.3s ease color",
            scrollTrigger: {
                trigger: char,
                start: '-10% 60%',
                end: '100% 60%',
                scrub: true,
                toggleActions: 'play play reverse reverse'
            }
        });
});