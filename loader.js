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

    // Navigation with links: Show loader and delay navigation
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent immediate navigation
            const href = link.getAttribute('href'); // Get the target URL

            // Show loader
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
});
