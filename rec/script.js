const exercises = [
    { day: 'Lunes', name: 'Puente', completed: false },
    { day: 'Lunes', name: 'Superman', completed: false },
    { day: 'Lunes', name: 'Remo con banda elástica', completed: false },
    { day: 'Lunes', name: 'Plancha frontal', completed: false },
    { day: 'Lunes', name: 'Plancha lateral', completed: false },
    { day: 'Lunes', name: 'Elevaciones de talones', completed: false },
    { day: 'Lunes', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Martes', name: 'Puente', completed: false },
    { day: 'Martes', name: 'Superman', completed: false },
    { day: 'Martes', name: 'Remo con banda elástica', completed: false },
    { day: 'Martes', name: 'Plancha frontal', completed: false },
    { day: 'Martes', name: 'Plancha lateral', completed: false },
    { day: 'Martes', name: 'Elevaciones de talones', completed: false },
    { day: 'Martes', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Miércoles', name: 'Puente', completed: false },
    { day: 'Miércoles', name: 'Superman', completed: false },
    { day: 'Miércoles', name: 'Remo con banda elástica', completed: false },
    { day: 'Miércoles', name: 'Plancha frontal', completed: false },
    { day: 'Miércoles', name: 'Plancha lateral', completed: false },
    { day: 'Miércoles', name: 'Elevaciones de talones', completed: false },
    { day: 'Miércoles', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Jueves', name: 'Puente', completed: false },
    { day: 'Jueves', name: 'Superman', completed: false },
    { day: 'Jueves', name: 'Remo con banda elástica', completed: false },
    { day: 'Jueves', name: 'Plancha frontal', completed: false },
    { day: 'Jueves', name: 'Plancha lateral', completed: false },
    { day: 'Jueves', name: 'Elevaciones de talones', completed: false },
    { day: 'Jueves', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Viernes', name: 'Puente', completed: false },
    { day: 'Viernes', name: 'Superman', completed: false },
    { day: 'Viernes', name: 'Remo con banda elástica', completed: false },
    { day: 'Viernes', name: 'Plancha frontal', completed: false },
    { day: 'Viernes', name: 'Plancha lateral', completed: false },
    { day: 'Viernes', name: 'Elevaciones de talones', completed: false },
    { day: 'Viernes', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Sábado', name: 'Puente', completed: false },
    { day: 'Sábado', name: 'Superman', completed: false },
    { day: 'Sábado', name: 'Remo con banda elástica', completed: false },
    { day: 'Sábado', name: 'Plancha frontal', completed: false },
    { day: 'Sábado', name: 'Plancha lateral', completed: false },
    { day: 'Sábado', name: 'Elevaciones de talones', completed: false },
    { day: 'Sábado', name: 'Estiramiento gato-vaca', completed: false },

    { day: 'Domingo', name: 'Puente', completed: false },
    { day: 'Domingo', name: 'Superman', completed: false },
    { day: 'Domingo', name: 'Remo con banda elástica', completed: false },
    { day: 'Domingo', name: 'Plancha frontal', completed: false },
    { day: 'Domingo', name: 'Plancha lateral', completed: false },
    { day: 'Domingo', name: 'Elevaciones de talones', completed: false },
    { day: 'Domingo', name: 'Estiramiento gato-vaca', completed: false },
];

// Cargar el progreso desde Local Storage
function loadProgress() {
    const savedData = localStorage.getItem('exerciseProgress');
    if (savedData) {
        const progress = JSON.parse(savedData);
        exercises.forEach((exercise, index) => {
            exercise.completed = progress[index]?.completed || false;
        });
    }
}

// Guardar el progreso en Local Storage
function saveProgress() {
    localStorage.setItem('exerciseProgress', JSON.stringify(exercises));
    const message = document.getElementById('message');
    message.innerText = 'Progreso guardado correctamente!';
    message.classList.add('success', 'show'); // Agrega las clases para el estilo y la visibilidad
    setTimeout(() => {
        message.classList.remove('show'); // Elimina la clase para ocultar
    }, 2000);
}


// Renderizar la tabla de ejercicios
function renderTable(day) {
    const tbody = document.getElementById('exerciseTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar el tbody

    exercises
        .filter(exercise => exercise.day === day)
        .forEach((exercise) => {
            const row = tbody.insertRow();
            row.insertCell(0).innerText = exercise.day;
            row.insertCell(1).innerText = exercise.name;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = exercise.completed;
            checkbox.onchange = () => {
                exercise.completed = checkbox.checked;
                saveProgress();
            };
            const cell = row.insertCell(2);
            cell.appendChild(checkbox);
        });
}

// Función para abrir pestañas
function openTab(evt, day) {
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
    renderTable(day);
}

// Inicializar la aplicación
function init() {
    loadProgress();
    openTab(null, 'Lunes'); // Mostrar Lunes al inicio sin evento
}

// Evento de guardar progreso
document.getElementById('saveButton').addEventListener('click', saveProgress);

// Cargar la aplicación al inicio
init();
