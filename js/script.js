let cards = document.querySelectorAll('.testimonial-content');
let activeCardsDisplayed = document.querySelectorAll('.active-testimonial');

let indicators = document.querySelectorAll('.indicator');
let activeIndicator = document.querySelectorAll('.active-indicator');

//implementation-1 

setInterval(() => {
    if (activeCardsDisplayed[0].nextElementSibling !== null) {
        let nextCard = activeCardsDisplayed[0].nextElementSibling;
        let nextIndicator = activeIndicator[0].nextElementSibling;

        activeCardsDisplayed[0].classList.toggle('active-testimonial');
        nextCard.classList.toggle('active-testimonial');

        activeIndicator[0].classList.toggle('active-testimonial');
        nextIndicator.classList.toggle('active-indicator');
    } else {
        activeCardsDisplayed[0].classList.toggle('active-testimonial');
        activeIndicator[0].classList.toggle('active-indicator');

        cards[0].classList.toggle('active-testimonial');
        indicators[0].classList.toggle('active-indicator');
    }
}, 200000);

// implementation-2

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