document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('main-nav');
    const navTop = nav.offsetTop;
    const links = nav.getElementsByTagName('a');
    const contents = document.getElementsByClassName('content');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= navTop) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            e.preventDefault();
            
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove('active');
                contents[j].classList.remove('active');
            }
            
            this.classList.add('active');
            document.getElementById(this.getAttribute('href').slice(1)).classList.add('active');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const calendar = new VanillaCalendar('#myCalendar', {
        date: {
            min: '2024-11-01',
            max: '2024-11-30'
        },
        settings: {
            lang: 'es',
            selection: {
                day: 'multiple-ranged',
            },
            selected: {
                dates: ['2024-11-05', '2024-11-06', '2024-11-07', '2024-11-08'],
            },
            visibility: {
                theme: 'light'
            }
        },
        actions: {
            clickDay(e, dates) {
                console.log('Fechas seleccionadas:', dates);
            },
        },
    });
    calendar.init();
    calendar.settings.selected.month = 10; 
    calendar.settings.selected.year = 2024;
    calendar.update();
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.querySelector('.gallery-grid');
    if (galleryContainer) {
        lightGallery(galleryContainer, {
            selector: '.gallery-item',
            plugins: [],
            speed: 500,
            backdropDuration: 400,
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Código existente...

    // Inicializar el mapa
    var map = L.map('map').setView([9.315655077488108, -75.38853103742686], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Añadir marcador y popup
    L.marker([9.315655077488108, -75.38853103742686]).addTo(map)
        .bindPopup('Universidad de Sucre')
        .openPopup();

    // Asegurarse de que el mapa se actualice cuando se muestre la pestaña
    document.querySelector('a[href="#inicio"]').addEventListener('click', function() {
        setTimeout(function() {
            map.invalidateSize();
        }, 0);
    });
});