let index = 0;

function showSlides() {
    const slides = document.querySelector('.img-slider');
    const totalSlides = document.querySelectorAll('.slider-l').length;

    index++;
    if (index >= totalSlides) {
        index = 0;
    }

    slides.style.transform = 'translateX(' + (-index * 100) + '%)';
}

setInterval(showSlides, 8000); 


// // Countdown timer for 3 hours in .sale-slogan.slg1
// const countdownElement = document.querySelector('.sale-slogan.slg1');
// let countdownTime = 3 * 60 * 60; // 3 hours in seconds

// function updateCountdown() {
//     if (!countdownElement) return;
//     let hours = Math.floor(countdownTime / 3600);
//     let minutes = Math.floor((countdownTime % 3600) / 60);
//     let seconds = countdownTime % 60;

//     countdownElement.textContent = 
//         `SALE ENDS AFTER : ${hours.toString().padStart(2, '0')}:` +
//         `${minutes.toString().padStart(2, '0')}:` +
//         `${seconds.toString().padStart(2, '0')}`;

//     if (countdownTime > 0) {
//         countdownTime--;
//     } else {
//         clearInterval(timerInterval);
//         countdownElement.textContent = "END!";
//     }
// }

// const timerInterval = setInterval(updateCountdown, 1000);
// updateCountdown();






    