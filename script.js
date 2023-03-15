
const buttons = document.querySelectorAll('[rating]');
let activeButton = null;
const thankYouPagePeeElement = document.querySelector('.thank-you-page-p-element');


buttons.forEach((button) => {
    button.addEventListener('click', (event) => {

        if (activeButton) {
            activeButton.style.backgroundColor = '';
            activeButton.style.color = '';
        }

        button.style.backgroundColor = '#7C8798';
        button.style.color = 'white'
        activeButton = button;

        thankYouPagePeeElement.textContent = `You selected ${button.textContent} out of 5`;

    });

});


const submitButton = document.getElementById('submit-button');
const howDidweDoPage = document.getElementById('how-did-we-do-page');
const thankYouPage = document.getElementById('thank-you-page');

thankYouPage.style.display = 'none';

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    howDidweDoPage.style.display = 'none';
    thankYouPage.style.display = 'block';
});



