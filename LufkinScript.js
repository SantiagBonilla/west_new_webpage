 // Items data
 const itemsElements = {
    29: {
        image: 'images/Digitalizacion/EMMA.png',
        description: 'Con 90 años de experiencia en diseño y fabricación de elevadores de varilla LufkinTM en cada unidad, esta unidad de bombeo de viga (BPU) de primera clase está probada para la vida útil del pozo con un engranaje helicoidal doble con forma líder en la industria.'
    },
    30: {
        image: 'images/Digitalizacion/DYRIMA.png',
        description: 'Esta nueva BPU combina los probados conjuntos de rodamientos Lufkin con un económico diseño de engranaje de doble hélice con fresa madre que satisface los requisitos de ahorro de costes de los operadores sin dejar de ofrecer la fiabilidad que exigen.'
    },
    31: {
        image: 'images/Digitalizacion/ESVA.png',
        description: 'Estas nuevas BPU convencionales ofrecen una longitud de carrera superior a 300 pulgadas, lo que las hace ideales para aplicaciones en pozos desviados. Diseñadas para reducir el desgaste de la varilla/tubo y mantener la producción a carreras por minuto (SPM) lentas, estas unidades están disponibles con un diseño de caja de engranajes de 1824 o 2560.'
    },
    32: {
        image: 'images/Digitalizacion/energymanager.png',
        description: "Diseñadas para maximizar el rendimiento en aplicaciones específicas, ya se trate de la optimización para arena, incrustaciones, gas o requisitos exclusivos de volumen de líquido. <br></br> <ul id=\"itemListRight11\"> <li data-image=\"images/LF1.jpg\"> Bomba de sólidos de paso por carrera </li>  <li data-image=\"images/LF2.jpg\">Bomba multifase</li>  <li data-image=\"images/LF3.jpg\">Bomba desviadora de arena</li> <li data-image=\"images/LF4.png\">Bomba de lodos</li>  <li data-image=\"images/LF5.jpg\">Bomba Lo-Pro</li>  <li data-image=\"images/LF1.jpg\">Bomba Hi-Pro</li>  <li data-image=\"images/LF2.jpg\">Bomba de compresión de gas aislado</li>  </ul>"    
    },
    33: {
        image: 'images/Digitalizacion/GestionActivos.png',
        description: 'Compatibles con las bombas API y se han desarrollado para mejorar el rendimiento de bombeo más allá de la capacidad API normal, lo que se traduce en una mayor eficacia operativa, tiempos de funcionamiento más largos y ahorro de costes operativos.  <br></br> <ul id=\"itemListRight11\"><li data-image=\"images/LF2.jpg\">Desviador de arena </li>  <li data-image=\"images/LF3.jpg\">Jaula sobredimensionada</li>  <li data-image=\"images/LF4.png\">Jaula guiada por inserción</li> <li data-image=\"images/LF5.jpg\">Junta superior</li>  <li>Válvula de gas</li>  <li data-image=\"images/LF1.jpg\">Escudo de arena</li>  <li data-image=\"images/LF2.jpg\">Válvula de descarga inferior</li>  </ul>'
    },
    34: {
        image: 'images/Digitalizacion/ITOT.jpeg',
        description: 'Herramientas y componentes de fondo de pozo diseñados para mejorar la eficiencia y eficacia del sistema de elevación de barras. <br></br> <ul id="itemListRight11">  <li data-image=\"images/LF3.jpg\"> TAC tipo B </li>  <li data-image=\"images/LF1.jpg\">TAC de fondo de pozo</li>  <li data-image=\"images/LF2.jpg\">Separador de gas</li> <li data-image=\"images/LF3.jpg\">Herramienta de corte</li>  <li data-image=\"images/LF5.jpg\">Herramienta On-Off</li>  <li data-image=\"images/LF1.jpg\">Anclaje de bomba de inserción</li> </ul>'
    },
    35: {
        image: 'images/Digitalizacion/3.1.png',
        description: 'LUFKIN Los conjuntos de orificio inferior personalizados de Don-Nan con rejilla(s) de lana de acero inoxidable y una válvula cónica activada por presión son un sistema económico de control de la admisión de la bomba. <ul id=\"itemListRight11\"><li data-image=\"images/LF1.jpg\">  Pantalla de acero inoxidable</li>  <li data-image=\"images/LF3.jpg\">Válvula de admisión de la bomba</li>  </ul> '
    },
    36: {
        image: 'images/Lufkin/4.1.jpg',
        description: 'Cargue el estudio de desviación de un pozo para modelar la configuración del pozo en el visor 3D SROD. Mejore su vista añadiendo perforaciones, equipos de terminación y datos tubulares.'
        },
    37: {
        image: 'images/Lufkin/4.2.jpg',
        description: 'El sistema SROD le guiará a través del proceso de diseño a medida que introduce los parámetros de la bomba y la tubería, el tipo de varilla y los detalles del cono, el tamaño de la unidad de bombeo, la información de la manivela, el tamaño del motor, etc.'
        },
    38: {
        image: 'images/Lufkin/4.3.jpg',
        description: 'Una vez introducidos todos los parámetros de entrada, el sistema SROD genera un caso base y proporciona un informe de una sola página sobre los componentes clave y las capacidades de rendimiento.'    
    },
};

function toggleImage(containerId) {

    // Delegated event listener for the right item list
    const rightItemList = document.getElementById(`itemListRight${containerId}`);
    const itemImage = document.getElementById(`itemImage${containerId}`);

    rightItemList.addEventListener('click', (event) => {
        const clickedRightItem = event.target.closest('li'); // Use closest to ensure we get the right item
        if (clickedRightItem) {

            // Remove active class from all right items
            const rightItems = rightItemList.querySelectorAll('li');
            rightItems.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked right item
            clickedRightItem.classList.add('active');

            // Update the image based on the clicked right item
            const newImage = clickedRightItem.getAttribute('data-image');
            console.log("New image URL:", newImage); // Debug: log the new image URL

            if (newImage) {
                itemImage.src = newImage;
            } else {
                console.log("No data-image attribute found on clicked item.");
            }
        } else {
            console.log("Clicked element is not an li:", event.target); // Debug: log if clicked element is not an li
        }
    });

}

function setupContainer(containerId) {
    console.log("ENTRO AL SETUP");
    const itemList = document.getElementById(`itemList${containerId}`);
    const itemImage = document.getElementById(`itemImage${containerId}`);
    const itemDescription = document.getElementById(`itemDescription${containerId}`);

    itemList.addEventListener('click', (event) => {
        // Remove active class from all items
        const items = itemList.querySelectorAll('.apc-item');
        items.forEach(item => item.classList.remove('active'));

        // Get the clicked apc-item
        const clickedItem = event.target.closest('.apc-item'); // Use closest to ensure we get the right item

        if (clickedItem) {
            // Add active class to the clicked apc-item
            clickedItem.classList.add('active');

            // Get the apc-item ID
            const itemId = clickedItem.dataset.item;

            // Update image and description
            itemImage.src = itemsElements[itemId].image;
            itemDescription.innerHTML = itemsElements[itemId].description;

            // Update the right item list based on the selected item ID
            if (containerId === 11) {
                updateRightItemList(itemId, containerId);
                toggleImage(containerId);
            }
        }

    });

    // for default case
    if (containerId === 11) {
        toggleImage(containerId);
    }
}

function updateRightItemList(itemId, containerId) {
    console.log("Updating right item list for itemId:", itemId); // Debug: log the itemId

    // Extract the list items from the description
    const descriptionHTML = itemsElements[itemId].description;
    const parser = new DOMParser();
    const doc = parser.parseFromString(descriptionHTML, 'text/html');
    const rightItemListContainer = doc.querySelector(`#itemListRight${containerId}`);
    
    if (!rightItemListContainer) {
        console.error("Right item list container not found in description HTML");
        return;
    }

    const rightItemsHTML = rightItemListContainer.querySelectorAll('li');
    console.log("Right items HTML:", rightItemsHTML); // Debug: log the right items

    // Get the right item list container
    const rightItemList = document.getElementById(`itemListRight${containerId}`);
    if (!rightItemList) {
        console.error("Right item list element not found in DOM");
        return;
    }

    rightItemList.innerHTML = ''; // Clear existing items

    // Append the new list items
    rightItemsHTML.forEach(item => {
        rightItemList.appendChild(item.cloneNode(true)); // Clone the item to append it
    });
}






setupContainer(10);
setupContainer(11);
setupContainer(12);