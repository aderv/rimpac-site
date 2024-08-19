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

// Cuenta regresiva
document.addEventListener('DOMContentLoaded', () => {
    // Fecha del evento: 5 de noviembre de 2024 a las 8:00 am
    const eventDate = new Date(2024, 10, 5, 8, 0, 0).getTime() / 1000;

    // Inicializar FlipDown
    new FlipDown(eventDate, {
        theme: 'dark',
        headings: ["Días", "Horas", "Minutos", "Segundos"]
    })
        .start()
        .ifEnded(() => {
            console.log('¡La cuenta regresiva ha terminado!');
        });

    // Etiquetas en español
    setTimeout(() => {
        document.querySelectorAll('.flipdown-theme-dark .rotor-group-heading').forEach((heading) => {
            switch (heading.textContent.toLowerCase()) {
                case 'days':
                    heading.textContent = 'Días';
                    break;
                case 'hours':
                    heading.textContent = 'Horas';
                    break;
                case 'minutes':
                    heading.textContent = 'Minutos';
                    break;
                case 'seconds':
                    heading.textContent = 'Segundos';
                    break;
            }
        });
    }, 100);
});



function cambiarPestana(idPestana) {
    // Ocultar todos los contenidos
    document.querySelectorAll('.contenido-pestana').forEach(contenido => {
      contenido.classList.remove('contenido-visible');
    });
    
    // Mostrar el contenido seleccionado
    document.getElementById(idPestana).classList.add('contenido-visible');
    
    // Actualizar las clases de las pestañas
    document.querySelectorAll('.pestana').forEach(pestana => {
      pestana.classList.remove('pestana-activa');
    });
    
    // Activar la pestaña seleccionada
    event.target.classList.add('pestana-activa');
}

