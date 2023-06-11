let cards = document.querySelectorAll('.testimonial-content');
let activeCardsDisplayed = document.querySelectorAll('.active-testimonial');

let indicators = document.querySelectorAll('.indicator');
let activeIndicator = document.querySelectorAll('.active-indicator');

setInterval(() => {
    let activeCardIndex = [...cards].indexOf(activeCardsDisplayed[0]);
    let currentCard = activeCardIndex + 1;
    if(currentCard >= cards.length ){
        // activate first card
        cards[0].classList.toggle('active-testimonial');
        indicators[0].classList.toggle('active-indicator');
        // deactivate last card
        cards[activeCardIndex].classList.toggle('active-testimonial');
        indicators[activeCardIndex].classList.toggle('active-indicator');
    } else {
        // activate new card
        cards[activeCardIndex].nextElementSibling.classList.toggle('active-testimonial');
        indicators[activeCardIndex].nextElementSibling.classList.toggle('active-indicator');
        // deactivate old card
        cards[activeCardIndex].classList.toggle('active-testimonial');
        indicators[activeCardIndex].classList.toggle('active-indicator');
    }
}, 15000);

// [...cards].indexOf(active[0])