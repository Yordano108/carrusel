const IMG = document.getElementById("carrusel-img");
const BG_IMG = document.getElementById("carrusel-bg");
const NOMBRE = document.getElementById("nombre");
const DESCRIPCION = document.getElementById("descripcion");
const CARACTERISTICAS = document.getElementById("caracteristicas");
const INICIO = document.getElementById("inicio");
const ANTERIOR = document.getElementById("anterior");
const PLAY = document.getElementById("play");
const PLAY_ICON = document.getElementById("play-icon");
const SIGUIENTE = document.getElementById("siguiente");
const ULTIMO = document.getElementById("ultimo");

const lugaresViaje = [
    new Carrusel(
        "Puente SNP",
        "Se encuentra sobre el río Danubio, es el puente atirantado más largo del mundo y tiene un restaurante en forma de ovni",
        "img/PXL_20260102_210512356.jpg",
        [
            "Ubicación: Bratislava, Eslovaquia",
            "Tipo: Puente atirantado de un solo pilón",
            "Inauguración: 1972",
        ],
    ),
    new Carrusel(
        "Monumento Slavín",
        "Monumento conmemorativo y cementerio militar para los soldados del Ejército Soviético caídos en la Segunda Guerra Mundial",
        "img/PXL_20260104_112117078.jpg",
        [
            "Ubicación: Bratislava, Eslovaquia",
            "Altura del obelisco: 39,5 metros",
            "Inauguración: 1960",
        ],
    ),
    new Carrusel(
        "Estatua de San Martín",
        "Impresionante escultura de San Martín partiendo su capa para dársela a un desfavorecido, ubicada dentro de la catedral",
        "img/PXL_20260104_135518262~2.jpg",
        [
            "Ubicación: Catedral de San Martín, Bratislava",
            "Material: Plomo",
            "Escultor: Georg Rafael Donner (Siglo XVIII)",
        ],
    ),
    new Carrusel(
        "Interior de la Catedral de San Esteban",
        "Vista de la parte central, las columnas góticas y el púlpito tallado en piedra de la iglesia principal de la ciudad",
        "img/PXL_20260105_105143889.jpg",
        [
            "Ubicación: Viena, Austria",
            "Estilo arquitectónico: Gótico tardío",
            "Elemento destacado: Púlpito de Anton Pilgram",
        ],
    ),
    new Carrusel(
        "Altar Barroco en San Esteban",
        "Altar barroco ornamentado que contrasta con la estructura gótica de la catedral",
        "img/PXL_20260105_105915862~2.jpg",
        [
            "Ubicación: Catedral de San Esteban, Viena",
            "Estilo: Barroco",
            "Materiales: Mármol y esculturas doradas",
        ],
    ),
    new Carrusel(
        "Monumento a Johann Strauss",
        "La famosa estatua dorada del compositor, rodeada por un arco de mármol con relieves de ninfas",
        "img/PXL_20260105_132003646~2.jpg",
        [
            "Ubicación: Stadtpark, Viena",
            "Material: Bronce dorado y mármol",
            "Inauguración: 1921",
        ],
    ),
    new Carrusel(
        "Ópera Estatal de Viena",
        "Vista nocturna de uno de los teatros de ópera más importantes y prestigiosos del mundo",
        "img/PXL_20260105_160136702.jpg",
        [
            "Ubicación: Viena, Austria",
            "Estilo: Neorrenacentista",
            "Capacidad: Alrededor de 2.200 espectadores",
        ],
    ),
    new Carrusel(
        "Estatua de Hércules",
        "Escultura monumental que flanquea una de las entradas del Palacio Imperial de Hofburg, mostrando a Hércules luchando contra la hidra",
        "img/PXL_20260105_162704899.jpg",
        [
            "Ubicación: Palacio Hofburg, Viena",
            "Representación: Mitología clásica",
            "Estilo: Barroco",
        ],
    ),
    new Carrusel(
        "Callejón con Graffitis en la Nieve",
        "Contraste urbano nocturno que muestra la cultura del arte callejero bajo una capa de nieve",
        "img/PXL_20260105_203934283.jpg",
        [
            "Ubicación: Calle Mariánska, Bratislava",
            "Elemento: Señal de zona residencial",
            "Estilo: Arte urbano / Graffiti contemporáneo",
        ],
    ),
    new Carrusel(
        "Los Alpes desde las Alturas",
        "Espectacular panorámica aérea del vuelo de regreso, mostrando las cumbres nevadas de los Alpes y el reflejo del sol sobre el mar de nubes",
        "img/PXL_20260106_104828845.jpg",
        [
            "Vista: Cordillera de los Alpes",
            "Altitud aproximada: 10.000 metros",
            "Fenómeno: Reflejo solar (Onda de espejo)",
        ],
    ),
];

let indiceActual = 0;
let temporizador = null;

const mostrarLugar = (indice) => {
    const lugar = lugaresViaje[indice];

    IMG.src = lugar.imagen;
    IMG.alt = "Fotografía de " + lugar.nombre;
    BG_IMG.src = lugar.imagen;

    NOMBRE.textContent = lugar.nombre;
    DESCRIPCION.textContent = lugar.descripcion;

    CARACTERISTICAS.innerHTML = "";
    lugar.caracteristicas.forEach((caracteristica) => {
        const li = document.createElement("li");
        li.textContent = caracteristica;
        CARACTERISTICAS.appendChild(li);
    });
};

const avanzarAutomatico = () => {
    indiceActual++;
    if (indiceActual >= lugaresViaje.length) {
        indiceActual = 0;
    }
    mostrarLugar(indiceActual);
};

const iniciarAutoplay = () => {
    if (temporizador === null) {
        temporizador = setInterval(avanzarAutomatico, 3000);
        PLAY_ICON.textContent = "⏸";
        PLAY.classList.add(
            "border-[#dfb15b]",
            "shadow-[0_0_15px_rgba(223,177,91,0.2)]",
        );
    }
};

const detenerAutoplay = () => {
    if (temporizador !== null) {
        clearInterval(temporizador);
        temporizador = null;
        PLAY_ICON.textContent = "▶";
        PLAY.classList.remove(
            "border-[#dfb15b]",
            "shadow-[0_0_15px_rgba(223,177,91,0.2)]",
        );
    }
};

PLAY.addEventListener("click", () => {
    if (temporizador === null) {
        iniciarAutoplay();
    } else {
        detenerAutoplay();
    }
});

SIGUIENTE.addEventListener("click", () => {
    detenerAutoplay();
    indiceActual++;
    if (indiceActual >= lugaresViaje.length) {
        indiceActual = 0;
    }
    mostrarLugar(indiceActual);
});

ANTERIOR.addEventListener("click", () => {
    detenerAutoplay();
    indiceActual--;
    if (indiceActual < 0) {
        indiceActual = lugaresViaje.length - 1;
    }
    mostrarLugar(indiceActual);
});

INICIO.addEventListener("click", () => {
    detenerAutoplay();
    indiceActual = 0;
    mostrarLugar(indiceActual);
});

ULTIMO.addEventListener("click", () => {
    detenerAutoplay();
    indiceActual = lugaresViaje.length - 1;
    mostrarLugar(indiceActual);
});

mostrarLugar(indiceActual);
