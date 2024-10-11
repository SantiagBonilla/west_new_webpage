document.addEventListener("DOMContentLoaded", function () {
  const menuFixed = document.getElementById("menu-fixed");
  let scrolled = false;
  var logoImage = document.getElementById('logoImage');

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition > 100) {  // Cambia 100 por la cantidad de scroll que desees
        logoImage.style.opacity = 1;
        menuFixed.classList.add("small1");
        scrolled = true;
    } else {
        logoImage.style.opacity = 0;
        menuFixed.classList.remove("small1");
        scrolled = false;
    }
  });
});

let imagenes_español = [
  {
    url: "img1.jpeg",
    nombre: "Noticia 1",
    descripcion: "Descripcion Noticia 1",
  },
  {
    url: "img2.jpg",
    nombre: "Noticia 2",
    descripcion: "Descripcion noticia 2",
  },
  {
    url: "img3.png",
    nombre: "Noticia 3",
    descripcion: "Descripción noticia 3",
  },
  {
    url: "img4.jpg",
    nombre: "Noticia 4",
    descripcion: "Descripción noticia 4",
  },
];
let imagenes_english = [
  {
    url: "img1.jpeg",
    nombre: "News 1",
    descripcion: "News 1 Description",
  },
  {
    url: "img2.jpg",
    nombre: "News 2",
    descripcion: "News 2 Description",
  },
  {
    url: "img3.png",
    nombre: "News 3",
    descripcion: "News 3 Description",
  },
  {
    url: "img4.jpg",
    nombre: "News 4",
    descripcion: "News 4 Description",
  },
];
let imagenes= imagenes_español

let atras = document.getElementById("atras");
let adelante = document.getElementById("adelante");
let imagen = document.getElementById("img");
let puntos = document.getElementById("puntos");
let texto = document.getElementById("texto");
let actual = 0;
posicionCarrusel();

atras.addEventListener("click", function () {
  actual -= 1;

  if (actual == -1) {
    actual = imagenes.length - 1;
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
  posicionCarrusel();
});
adelante.addEventListener("click", function () {
  actual += 1;

  if (actual == imagenes.length) {
    actual = 0;
  }

  imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
  texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `;
  posicionCarrusel();
});

function posicionCarrusel() {
  puntos.innerHTML = "";
  for (var i = 0; i < imagenes.length; i++) {
    if (i == actual) {
      puntos.innerHTML += '<p class="bold">.<p>';
    } else {
      puntos.innerHTML += "<p>.<p>";
    }
  }
}

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

// Since language switching can take some time,
// it is best to work with an asynchronous function to improve load time.
const changeLanguage = async (language) => {
  try {
    const requestJson = await fetch(`./languages/${language}.json`);

    if (!requestJson.ok) {
      console.log(language);
      throw new Error(`Failed to fetch language data for ${language}`);
    }
    const texts = await requestJson.json();

    for (const textToChange of textsToChange) {
      const section = textToChange.dataset.section;
      const value = textToChange.dataset.value;

      textToChange.textContent = texts[section][value];
      //in this case you could use textToChange.innerhtml to
      //include and have html tags applied to the text.
    }
  } catch (error) {
    console.error("Error fetching language data:", error.message);
  }
};

flagsElement.addEventListener("click", (e) => {
    //cambia el idioma para toda la pagina
    changeLanguage(e.target.parentElement.dataset.language);
    //cambia el idioma para la parte de noticias
    if(e.target.parentElement.dataset.language=='en'){
        imagenes = imagenes_english
    }else if(e.target.parentElement.dataset.language=='es'){
        imagenes = imagenes_español
    }
});
