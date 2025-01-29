// document.addEventListener('DOMContentLoaded', () => {
//     const preloader = document.getElementById('preloader');
//     const pageWrapper = document.getElementById('preloader-wrapper');

//     // Initial page load: Show loader until the page is fully loaded
//     window.addEventListener('load', () => {
//         setTimeout(() => {
//             preloader.style.display = 'none'; // Hide preloader
//             pageWrapper.style.display = 'none'; // Hide the wrapper
//         }, 400); // Match the interval for the loader animation
//     });

//     // Navigation with links: Show loader and delay navigation
//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', (e) => {
//             e.preventDefault(); // Prevent immediate navigation
//             const href = link.getAttribute('href'); // Get the target URL

//             // Show loader
//             preloader.style.display = 'flex';
//             pageWrapper.style.display = 'flex';

//             // Set a timeout fallback to handle network errors
//             const fallbackTimeout = setTimeout(() => {
//                 alert('Something went wrong. Please try again.'); // Display an error message
//                 preloader.style.display = 'none'; // Hide the loader
//                 pageWrapper.style.display = 'none'; // Hide the wrapper
//             }, 10000); // 10-second timeout

//             // Delay navigation to allow loader to animate
//             setTimeout(() => {
//                 clearTimeout(fallbackTimeout); // Clear the fallback timeout if navigation succeeds
//                 window.location.href = href; // Perform the navigation
//             }, 600); // Match the interval for the loader animation
//         });
//     });
// });




document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const pageWrapper = document.getElementById('preloader-wrapper');

    // Initial page load: Show loader until the page is fully loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.display = 'none'; // Hide preloader
            pageWrapper.style.display = 'none'; // Hide the wrapper
        }, 400); // Match the interval for the loader animation
    });

    // Navigation with links: Show loader only for new page navigation
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href'); // Get the target URL

            // Ignore external links or links that scroll within the same page
            if (
                !href || 
                href.startsWith('#') || 
                href.startsWith('javascript:') || 
                link.target === '_blank' || 
                href.startsWith('http') // External links
            ) {
                return;
            }

            // Prevent default behavior and show the loader
            e.preventDefault();
            preloader.style.display = 'flex';
            pageWrapper.style.display = 'flex';

            // Set a timeout fallback to handle network errors
            const fallbackTimeout = setTimeout(() => {
                alert('Something went wrong. Please try again.'); // Display an error message
                preloader.style.display = 'none'; // Hide the loader
                pageWrapper.style.display = 'none'; // Hide the wrapper
            }, 10000); // 10-second timeout

            // Delay navigation to allow loader to animate
            setTimeout(() => {
                clearTimeout(fallbackTimeout); // Clear the fallback timeout if navigation succeeds
                window.location.href = href; // Perform the navigation
            }, 600); // Match the interval for the loader animation
        });
    });

    // Prevent loader for buttons or elements that scroll within the same page
    document.querySelectorAll('button, .scroll-to-section').forEach(button => {
        button.addEventListener('click', (e) => {
            // Ignore buttons that scroll or trigger actions within the same page
            const target = e.target.getAttribute('data-target');
            if (target && document.querySelector(target)) {
                e.preventDefault();
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Prevent loader for elements explicitly marked with a specific class
    document.querySelectorAll('.no-loader').forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent loader trigger
        });
    });
});
