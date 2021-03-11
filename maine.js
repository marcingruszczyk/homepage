const firstName = 'Marcin';
const age = 26;
console.log(`Witaj nieznajomy!! Ja jestem ${firstName} i jestem początkującym programistą. Mam ${age} i mam duże nadzieje, że osiągnę sukces w tej dziedzinie.`);

const descriptionJs = document.querySelector('.section__description--javascript')

descriptionJs.innerHTML = 'Treść tej sekcji jest automatycznie uzupeniania przez skrypt napisany w Javascript.';

const greet = (age, firstName) => {
    console.log(
        `Witaj Drogi odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
    );
}

greet(26, 'Marcin');