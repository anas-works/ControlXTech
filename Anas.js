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

  
  
  gsap.registerPlugin(ScrollTrigger);


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







// Prevent default action for links with href="#"
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default browser action
  });
});

// Optional: Remove any existing # from the URL on page load
window.addEventListener('load', () => {
  if (window.location.hash) {
    history.replaceState(null, null, ' '); // Removes the hash
  }
});



if(window.innerWidth > 550){

    
    //-------------------- Starter Animation on Videos & Images

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
    //-------------------- Starter Animation on Videos & Images

    
    
    
    
    // -------------------- Text Animation

    document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  // Create an Intersection Observer to detect visibility changes
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view"); // Add "in-view" when in view
        } 
        // else {
        //   entry.target.classList.remove("in-view"); // Remove "in-view" when out of view
        // }
      });
    },
    { threshold: 1 } // Trigger when 20% of the element is visible
  );

  // Observe all elements with the "animate-on-scroll" class
  elementsToAnimate.forEach((element) => observer.observe(element));
  });

  // -------------------- Text Animation





  // ---------------------- Logos Animation
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
  // ---------------------- Logos Animation



  // ------------------------------------Toggle Button Animation

  // Select the toggle button, icon, and container
  const modeToggleButton = document.getElementById("dark-mode-toggle");
  const toggleIcon = document.getElementById("toggle-icon");
  const toggleBtnContainer = document.getElementById("toggle-btn-container");

  // Track the dark mode state
  let isDarkModeActive = false;

  // Function to activate dark mode
  const activateDarkMode = () => {
  isDarkModeActive = true;
  document.body.classList.add("dark-mode");
  toggleBtnContainer.style.backgroundColor = "#EBECE7"; // Dark background for the container


  const splitTypes = document.querySelectorAll('.aPara1');
    
  splitTypes.forEach((char,i) => {
        
        const bgDark = char.dataset.bgdarkColor
        const fgDark = char.dataset.fgdarkColor
        const fontFamily = "'Montserrat', sans-serif";
        
        const text = new SplitType(char, { types: 'chars'});
        text.chars.forEach(charElement => {
          charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
        });
        
        gsap.fromTo(text.chars, 
          {
                color: bgDark,
            },
            {
                color: fgDark,
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
      const bgDark = char.dataset.bgdarkColor
      const fgDark = char.dataset.fgdarkColor
        const fontFamily = "'Montserrat', sans-serif";
        
        const text = new SplitType(char, { types: 'chars'});
        text.chars.forEach(charElement => {
            charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
        });
        
        gsap.fromTo(text.chars, 
            {
                color: bgDark,
              },
              {
                color: fgDark,
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
        const bgDark = char.dataset.bgdarkColor
        const fgDark = char.dataset.fgdarkColor
        const fontFamily = "'Montserrat', sans-serif";
        
        
        const text = new SplitType(char, { types: 'chars'});
        text.chars.forEach(charElement => {
            charElement.style.fontFamily = fontFamily; // Apply the font-family to each character
        });
        
        gsap.fromTo(text.chars, 
            {
              color: bgDark,
            },
            {
                color: fgDark,
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



  // Update toggle button icon
  toggleIcon.textContent = "🌙"; // Moon for dark mode
  };

  // Function to deactivate dark mode
  const deactivateDarkMode = () => {
  isDarkModeActive = false;
  document.body.classList.remove("dark-mode");
  toggleBtnContainer.style.backgroundColor = "#06171D"; // Light background for the container


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

  // Update toggle button icon
  toggleIcon.textContent = "☀️"; // Sun for light mode
  };

  // Function to toggle dark mode
  const toggleMode = () => {
  if (isDarkModeActive) {
    deactivateDarkMode();
  } else {
    activateDarkMode();
  }
  };

  // Add event listener to the toggle button
  modeToggleButton.addEventListener("click", toggleMode);

  // GSAP ScrollTrigger for the footer
  ScrollTrigger.create({
  trigger: "footer",
  start: "45% center",
  // markers: true,

  onEnter: () => {
    // Toggle the mode when footer is reached
    if (isDarkModeActive) {
      deactivateDarkMode();
    } else {
      activateDarkMode();
    }
  },

  onLeaveBack: () => {
    // Toggle the mode when leaving the footer
    if (isDarkModeActive) {
      deactivateDarkMode();
    } else {
      activateDarkMode();
    }
  },
  });

  // -----------------------Starter Button Animation
  window.addEventListener("load", () => {  // Ensure it runs after the page is fully loaded
  gsap.to("#toggle-btn-container", {
    opacity: 1,  // Fade in to full opacity
    x: 0,        // Move to the original position (0px)
    duration: 0.3,  // Animation duration
    delay: 1.4,     // 1-second delay before the animation starts
    ease: "power3.out"  // Smooth easing effect
  });
  });



  // ------------------------------------Toggle Button Animation


  // ---------------------------------------------------------------------------------Dark Mode GSAP

  // Toggle JS

  // Select the toggle button
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  // Select the images by ID's
  const logoHeader_1 = document.getElementById("Logo-Footer-1");
  const logoHeader_2 = document.getElementById("Logo-Footer-2");
  const logoFooter = document.getElementById("Logo-Footer-3");
      //  ------------------------------Footer ICONS
  const location_Icon_Footer = document.getElementById("location-icon");
  const YT_Icon_Footer = document.getElementById("YT-icon");
  const FB_Icon_Footer = document.getElementById("FB-icon");
  const INSTA_Icon_Footer = document.getElementById("INSTA-icon");
  const LinkedIN_Icon_Footer = document.getElementById("LinkedIn-icon");
  const Tiktok_Icon_Footer = document.getElementById("TIKTOK-icon");
    //  ------------------------------Footer ICONS

    // --------------------------------arrow dark
  const arrow = document.getElementById("arrow_pic");
    // --------------------------------arrow dark

    
    // --------------------------------clients dark
    const client_0 = document.getElementById("client-0");
    const client_1 = document.getElementById("client-1");
    const client_2 = document.getElementById("client-2");
    const client_3 = document.getElementById("client-3");
    const client_4 = document.getElementById("client-4");
    const client_5 = document.getElementById("client-5");
  const client_6 = document.getElementById("client-6");
  const client_7 = document.getElementById("client-7");
  const client_8 = document.getElementById("client-8");
  const client_9 = document.getElementById("client-9");
  const client_10 = document.getElementById("client-10");
  const client_11 = document.getElementById("client-11");
    // --------------------------------clients dark
    

    // Track the dark mode state
    let isDarkMode = false; // Global state to manage dark mode
    
    // Function to apply dark mode
    const enableDarkMode = () => {
  isDarkMode = true; // Update state
  document.body.classList.add("dark-mode");


  // Change nav hover line to white
  document.documentElement.style.setProperty("--hover-line-color", "#fff");

  // Change cursor border color to #EBECE7
  document.documentElement.style.setProperty("--cursor-border-color", "#EBECE7");

  // Change cursor dot to #F5761D
  document.documentElement.style.setProperty("--Cursor-dot", "#F5761D");

  // Update images to dark mode
  logoHeader_1.src = "anas-assets/Logo-cxt.webp";
  logoHeader_2.src = "anas-assets/Logo-cxt.webp";
  logoFooter.src = "anas-assets/Logo-cxt.webp";

  location_Icon_Footer.src = "anas-assets/location.png";
  YT_Icon_Footer.src = "anas-assets/youtube-white.svg";
  FB_Icon_Footer.src = "anas-assets/facebook-white.svg";
  INSTA_Icon_Footer.src = "anas-assets/instagram-white.svg";
  LinkedIN_Icon_Footer.src = "anas-assets/linkedin-white.svg";
  Tiktok_Icon_Footer.src = "anas-assets/tiktok-white.svg";
  // arrow dark
  arrow.src = "/anas-assets/right-arrow-dark.png";

  // Clients
  client_0.src = "anas-assets/White-Logos-Client/6.png";
  client_1.src = "anas-assets/White-Logos-Client/Brand Out White Logo.png";
  client_2.src = "anas-assets/White-Logos-Client/getset travel white logo.png";
  client_3.src = "anas-assets/White-Logos-Client/holidayventure White Logo.png";
  client_4.src = "anas-assets/White-Logos-Client/Journela White Logo.png";
  client_5.src = "anas-assets/White-Logos-Client/rochaksafar White Logo.png";
  client_6.src = "anas-assets/White-Logos-Client/sennic White Logo.png";
  client_7.src = "anas-assets/White-Logos-Client/starla White Logo.png";
  client_8.src = "anas-assets/White-Logos-Client/tadlafil super White Logo.png";
  client_9.src = "anas-assets/White-Logos-Client/Web-New21-white.png";
  client_10.src = "anas-assets/White-Logos-Client/3.png";
  client_11.src = "anas-assets/White-Logos-Client/2.png";
  // Clients

  };

  // Function to disable dark mode
  const disableDarkMode = () => {
  isDarkMode = false; // Update state
  document.body.classList.remove("dark-mode");


  // Change hover line to black
  document.documentElement.style.setProperty("--hover-line-color", "#000");

  // Change cursor border color to black
  document.documentElement.style.setProperty("--cursor-border-color", "#000");

  // Change cursor dot color to #EB2426
  document.documentElement.style.setProperty("--Cursor-dot", "#EB2426");



  // Update images to light mode
  logoHeader_1.src = "anas-assets/CXT-Logo-Light.png";
  logoHeader_2.src = "anas-assets/CXT-Logo-Light.png";
  logoFooter.src = "anas-assets/CXT-Logo-Light.png";

  location_Icon_Footer.src = "https://img.icons8.com/ios/50/marker--v1.png";
  YT_Icon_Footer.src = "anas-assets/youtube.svg";
  FB_Icon_Footer.src = "anas-assets/facebook-tag.svg";
  INSTA_Icon_Footer.src = "anas-assets/instagram.svg";
  LinkedIN_Icon_Footer.src = "anas-assets/linkedin.svg";
  Tiktok_Icon_Footer.src = "anas-assets/tiktok.svg";
    // arrow light
    arrow.src = "/anas-assets/right-arrow.png";

    // Clients
  client_0.src = "anas-assets/Black-Logos-Client/1.png";
  client_1.src = "anas-assets/Black-Logos-Client/Brand Out Black Logo.png";
  client_2.src = "anas-assets/Black-Logos-Client/getset travel Black Logo.png";
  client_3.src = "anas-assets/Black-Logos-Client/holidayventure Black Logo.png";
  client_4.src = "anas-assets/Black-Logos-Client/Journela Black Logo.png";
  client_5.src = "anas-assets/Black-Logos-Client/rochaksafar Black Logo.png";
  client_6.src = "anas-assets/Black-Logos-Client/sennic Black Logo.png";
  client_7.src = "anas-assets/Black-Logos-Client/starla Black Logo.png";
  client_8.src = "anas-assets/Black-Logos-Client/tadlafil super Black Logo.png";
  client_9.src = "anas-assets/Black-Logos-Client/Web-New21.png";
  client_10.src = "anas-assets/Black-Logos-Client/3.png";
  client_11.src = "anas-assets/Black-Logos-Client/Untitled-1 (1).png";

  // Clients
  };

  // Toggle dark mode on button click
  darkModeToggle.addEventListener("click", () => {
  if (isDarkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
  });

  // GSAP ScrollTrigger for the footer
  ScrollTrigger.create({
  trigger: "footer", // Target the footer
  start: "45% center", // Trigger when the top of the footer reaches the center of the viewport
  // markers: true,

  onEnter: () => {
    // Toggle the mode when footer is reached
    if (isDarkMode) {
      disableDarkMode(); // Switch to light mode if currently in dark mode
    } else {
      enableDarkMode(); // Switch to dark mode if currently in light mode
    }
  },

  onLeaveBack: () => {
    // Toggle the mode when leaving the footer
    if (isDarkMode) {
      disableDarkMode(); // Switch to light mode if currently in dark mode
    } else {
      enableDarkMode(); // Switch to dark mode if currently in light mode
    }
  },
  });


}
