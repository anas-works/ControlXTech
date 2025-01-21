


// Custom Cursor
// Create the custom cursor container
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor-circle");

// Create the inner dot and append it to the cursor
const innerDot = document.createElement("div");
innerDot.classList.add("inner-dot");
cursor.appendChild(innerDot);

// Append the custom cursor to the body
document.body.appendChild(cursor);

// Variables to track cursor position
let mouseX = 0;
let mouseY = 0;
let outerX = 0;
let outerY = 0;

// Track the actual mouse movement for the dot
document.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;

  // Move the inner dot immediately
  // innerDot.style.left = `${mouseX}px`;
  // innerDot.style.top = `${mouseY}px`;
});

// Update the outer circle position with a slight delay
function animateOuterCircle() {
  // Gradually move the outer circle towards the mouse position
  outerX += (mouseX - outerX) * 0.5; // Adjust "0.1" for more or less delay
  outerY += (mouseY - outerY) * 0.5;

  // Apply the updated position to the outer circle
  cursor.style.left = `${outerX}px`;
  cursor.style.top = `${outerY}px`;

  // Continue the animation loop
  requestAnimationFrame(animateOuterCircle);
}

// Start the animation loop
animateOuterCircle();









// Hero elements on cursor movement
// Text
document.addEventListener("mousemove", (event) => {
    const images = document.querySelectorAll(".mouse-movement");
    const { clientX, clientY } = event;
  
    images.forEach((image, index) => {
      const speed = (index + 1) * 20; // Each image moves at a slightly different speed
      const x = (window.innerWidth / 2 - clientX) / speed;
      const y = (window.innerHeight / 2 - clientY) / speed;
  
      image.style.transform = `translate(${x}px, ${y}px)`;
    });
  });

  
  




  // Videos & Images

  document.addEventListener("DOMContentLoaded", () => {
    const outerElements = document.querySelectorAll(".outer");
  
    // Function to animate each outer container
    function animateOuterElement(outerElement) {
      // Set initial animation for opacity and scale (for page load animation)
      outerElement.style.transition = 'transform 1s ease 1s, opacity 1s linear 1s';
      outerElement.style.transform = 'scale(1) translate(0, 0)';
      outerElement.style.opacity = 1;
  
      // After the animation finishes, enable the parallax effect
      outerElement.addEventListener('transitionend', () => {
        enableParallaxEffect(outerElement); // Start the parallax effect after animation completes
      });
    }
  
    // Function to enable parallax effect for each outer container
    function enableParallaxEffect(outerElement) {
      // Disable transition for parallax effect, so it's immediate
      outerElement.style.transition = '0.3s ease-out';
  
      document.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const speed = 7; // Reduce this number to make the movement more pronounced (higher speed = more movement)
        const x = (window.innerWidth / 2 - clientX) / speed * 2; // Multiply to increase movement
        const y = (window.innerHeight / 2 - clientY) / speed * 2; // Multiply to increase movement
  
        // Apply the parallax effect (instant movement)
        outerElement.style.transform = `scale(1) translate(${x}px, ${y}px)`; // More parallax effect
      });
    }
  
    // Loop through all the outer elements and animate them
    outerElements.forEach(outerElement => {
      animateOuterElement(outerElement);
    });
  });
  




  // -------------------- Text Animation

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  // Create an Intersection Observer to detect visibility changes
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Add "in-view" when in view
        } else {
          entry.target.classList.remove("in-view"); // Remove "in-view" when out of view
        }
      });
    },
    { threshold: 1 } // Trigger when 20% of the element is visible
  );

  // Observe all elements with the "animate-on-scroll" class
  elementsToAnimate.forEach((element) => observer.observe(element));
});


// ---------------------- Logos
document.addEventListener("DOMContentLoaded", () => {
  const logoBoxes = document.querySelectorAll(".logoBoxes");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        // Trigger the animation by toggling the class
        target.classList.add("animate");

        // Remove the class after the animation ends to allow it to re-trigger
        target.addEventListener("animationend", () => {
          target.classList.remove("animate");
        });
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  // Observe each logoBox
  logoBoxes.forEach((logoBox) => {
    observer.observe(logoBox);
  });
});


  






//   gsap
gsap.registerPlugin(ScrollTrigger);

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
            
            
}else if(window.innerWidth < 500){
    
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




// time
function updateTime() {
    const now = new Date();
    
    // Format time with hours, minutes, and seconds (no timezone)
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
    
    // Display the time
    document.getElementById('datetime').textContent = formattedTime;
}

setInterval(updateTime, 1000);
updateTime();

