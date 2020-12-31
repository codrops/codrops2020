import {preloadImages, preloadFonts} from './utils';
import LocomotiveScroll from 'locomotive-scroll';

// Initialize Locomotive Scroll
const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

// Preload images and fonts
Promise.all([preloadImages(), preloadFonts('qcf1haf')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');
    lscroll.update();
});