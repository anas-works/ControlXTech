// const checkbox = document.getElementById("checkbox")
// const ball = document.querySelector('.ball');
        
// ball.addEventListener('click', function() {
//     checkbox.checked = !checkbox.checked;
//     document.body.classList.toggle("dark");
// });

// checkbox.addEventListener("change", () => {
//     document.body.classList.toggle("dark");
// });


if(window.innerWidth > 500){

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
                  scrollTrigger: {
                      trigger: char,
                      start: 'top 60%',
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
                  scrollTrigger: {
                      trigger: char,
                      start: '-10% 60%',
                      end: '100% 60%',
                      scrub: true,
                      toggleActions: 'play play reverse reverse'
                  }
          });
      });

}