import './index.css';

// localStorage.clear();

const cookieConsent = document.querySelector('.cookie-consent');

if (localStorage.getItem('cookieButtonResult') === 'true'){
    cookieConsent.classLis.add('hide');

} else {
    cookieConsent.addEventListener('click', () =>  {
        cookieConsent.classList.add('hide');
        localStorage.setItem('cookieButtonResult', 'true');

    });
}
