// splash.js
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.querySelector('.splash');
    if (!splash) return;

    // Ensure splash is visible
    splash.style.opacity = '1';
    splash.style.visibility = 'visible';

    // Hide splash after 1.5 seconds or when content is ready
    const hideSplash = () => {
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
        splash.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        // Remove splash from DOM after transition
        setTimeout(() => splash.remove(), 500);
    };

    // Use a minimum delay to ensure smooth UX
    setTimeout(hideSplash, 1500);

    // Optional: Hide splash immediately if DOM is already loaded
    if (document.readyState === 'complete') {
        hideSplash();
    }
});

// Handle errors or slow loads
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash');
    if (splash) {
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
        setTimeout(() => splash.remove(), 500);
    }
});
