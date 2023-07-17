'use strict'

document.addEventListener('DOMContentLoaded', () =>{
    const wordHighlightEls = document.querySelectorAll('.word_highlight')

    const callback = (entries, observer) => {
        const [entry] = entries;
        if(!entry.isIntersecting) return;
        entry.target.classList.add('fade_gradient')
    }

    const options = {
        root: null,
        threshold: 1,
        rootMargin : '-150px'
    };

    const observer = new IntersectionObserver(callback, options);
    wordHighlightEls.forEach((word, index) => index !== 0 &&  observer.observe(word))
})
