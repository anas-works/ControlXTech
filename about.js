if (window.innerWidth > 500) {
    
    document.querySelectorAll('.s5boxes').forEach(function(box) {
        const aboutVideos = box.querySelector('.aboutVideos');
        const aboutInfo = box.querySelector('.aboutInfo');
        const videos = box.querySelector('.videoS5');
        const aboutInfoH1 = aboutInfo.querySelector('h1');
        const aboutInfoP = aboutInfo.querySelector('p');

        // Mouseover event (hover)
        aboutVideos.addEventListener('mouseover', function() {
            // Increase font size and reduce padding on hover
            aboutInfo.style.padding = '0 0.5vw';
            aboutInfoH1.style.fontSize = '1.4vw'; // Increase font size of h1
            aboutInfoP.style.fontSize = '1vw';  // Increase font size of p
            videos.play();
        });
        
        // Mouseout event (when mouse leaves the video)
        aboutVideos.addEventListener('mouseout', function() {
            aboutInfo.style.padding = '0 1vw';
            aboutInfoH1.style.fontSize = '1.4vw'; // Reset font size of h1
            aboutInfoP.style.fontSize = '1vw';   // Reset font size of p
            videos.pause();
        });
        
        aboutInfo.addEventListener('mouseover',function(){
            aboutInfoH1.style.fontSize = '1.6vw'; // Increase font size of h1
            aboutInfoP.style.fontSize = '1.2vw';  // Increase font size of p
        });
        
        aboutInfo.addEventListener('mouseout',function(){
            aboutInfoH1.style.fontSize = '1.4vw'; // Reset font size of h1
            aboutInfoP.style.fontSize = '1vw';   // Reset font size of p
        });
    });

}else if (window.innerWidth <=500) {
    document.querySelectorAll('.s5boxes').forEach(function(box) {
        const aboutVideos = box.querySelector('.aboutVideos');
        const videos = box.querySelector('.videoS5');
    
        aboutVideos.addEventListener('click', function() {
            if (aboutVideos.style.height === "85%") {
                // If height is 85%, reset to 100% and pause the video
                aboutVideos.style.height = "100%";
                videos.pause();
            } else {
                // If height is not 85%, set height to 85% and play the video
                aboutVideos.style.height = "85%";
                videos.play();
            }
        });
    });
}


gsap.registerPlugin(ScrollTrigger);

if(window.innerWidth > 500){
    gsap.from(".videobox1" ,{
        scrollTrigger: {
            trigger: ".s3box1",
            start: "10% 90%",
            end: "80% 50%",
            scrub: true,
        },
        width: "60vw",
        height: "60vw",
    });
    gsap.to(".imgS3r" ,{
        scrollTrigger: {
            trigger: ".s3box2",
            start: "5% 90%",
            end: "30% 50%",
            scrub: true,
        },
        width: "19vw",
        height: "19vw",
    });
    gsap.from(".imgS3l" ,{
        scrollTrigger: {
            trigger: ".s3box2",
            start: "10% 90%",
            end: "35% 50%",
            scrub: true,
        },
        width: "40vw",
        height: "40vw",
    });
    gsap.from(".vids3l" ,{
        scrollTrigger: {
            trigger: ".s3box2",
            start: "30% 90%",
            end: "70% 50%",
            scrub: true,
        },
        width: "40vw",
        height: "40vw",
    });
}