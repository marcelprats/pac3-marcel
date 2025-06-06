import AOS from 'aos';
import 'aos/dist/aos.css';

['section', 'article', 'div', 'li', '.card-basic'].forEach(selector => {
    document.addEventListener('DOMContentLoaded', () => {
    ['section', 'article', 'div', 'li', '.card-basic'].forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
        el.setAttribute('data-aos', 'fade-up');
        });
    });
    AOS.init();
    });
});

AOS.init();