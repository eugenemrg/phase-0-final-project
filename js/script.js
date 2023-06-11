const CARDS = document.querySelectorAll('.testimonial-content');
const INDICATORS = document.querySelectorAll('.indicator');

setInterval(() => {

    let activeCardsDisplayed = document.querySelectorAll('.active-testimonial');
    let activeIndicators = document.querySelectorAll('.active-indicator');
    let activeCardIndex = [...CARDS].indexOf(activeCardsDisplayed[0]);

    [...activeCardsDisplayed].forEach(card => {
        card.classList.remove('active-testimonial');
    });

    [...activeIndicators].forEach(indicator => {
        indicator.classList.remove('active-indicator');
    });

    if (CARDS[activeCardIndex].nextElementSibling === null) {
        // activate first card
        CARDS[0].classList.toggle('active-testimonial');
        INDICATORS[0].classList.toggle('active-indicator');
    } else {
        // activate new card
        CARDS[activeCardIndex].nextElementSibling.classList.toggle('active-testimonial');
        INDICATORS[activeCardIndex].nextElementSibling.classList.toggle('active-indicator');
    }
}, 12000);