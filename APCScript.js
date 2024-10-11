 // Items data
 const itemsElements = {
    1: {
        image: 'images/apc/17.jpg',
        description: 'Gestiona la incertidumbre en los datos mediante probabilidades asociadas a etiquetas lingüísticas.'
    },
    2: {
        image: 'images/apc/17.jpg',
        description: 'Se adapta a diversos sistemas y condiciones, permitiendo ajustes cualitativos para optimizar el control en distintos escenarios.'
    },
    3: {
        image: 'images/apc/17.jpg',
        description: 'Hace que el sistema sea fácil de entender al utilizar términos cercanos a la lógica humana..'
    },
    4: {
        image: 'images/apc/20.jpg',
        description: 'Mantiene un control efectivo incluso ante inexactitudes en el modelo o variaciones en el proceso.'
    },
    5: {
        image: 'images/apc/20.jpg',
        description: 'Ofrece un diseño sistemático y relativamente sencillo, adecuado para diversas aplicaciones industriales.'
    },
    6: {
        image: 'images/apc/20.jpg',
        description: 'Aplica un filtro para estabilizar el sistema y reducir fluctuaciones en la respuesta del controlador.'
    },
    7: {
        image: 'images/apc/23.jpg',
        description: 'Los variables de proceso y control interactúan para maximizar sus rendimientos individuales, teniendo en cuenta las acciones de los demás.'
    },
    8: {
        image: 'images/apc/23.jpg',
        description: 'Busca alcanzar un equilibrio global (Equilibrio de Nash) que optimiza el rendimiento del sistema en su conjunto.'
    },
    9: {
        image: 'images/apc/23.jpg',
        description: 'Es ideal para controlar y estabilizar procesos multivariables en sistemas altamente complejos e interdependientes.'
    },
    10: {
        image: 'images/apc/25.jpg',
        description: 'Optimiza los lazos de control en tiempo real para adaptarse a cambios en el entorno.'
    },
    11: {
        image: 'images/apc/25.jpg',
        description: 'Prioriza la optimización global del sistema según lo necesario por el administrador del activo.'
    },
    12: {
        image: 'images/apc/25.jpg',
        description: 'Basa las decisiones de control en indicadores críticos para guiar la operación.'
    },
    13: {
        image: 'images/apc/30.jpg',

        description: 'La integración con la base de datos de control y el historiador de DeltaV, simplifican la identificación del modelo.'
    },
    14: {
        image: 'images/apc/30.jpg',
        description: 'El MPC embebido se ejecuta en el controlador o la worksatiton utilizando bloques de funciones estándar.'
    },
    15: {
        image: 'images/apc/30.jpg',
        description: 'El optimizador LP embebido lleva el proceso a una solución económicamente óptima dentro de las limitaciones del proceso.'
    },

    16: {
        image: 'images/apc/31.jpg',
        description: 'Disminución de la variabilidad del proceso al ajustar continuamente las variables clave, manteniendo un control preciso y uniforme.'
    },
    17: {
        image: 'images/apc/31.jpg',
        description: 'Reducción de desviación estándar al optimizar los lazos de control, asegurando que el proceso se mantenga en sus límites operativos.'
    },
    18: {
        image: 'images/apc/31.jpg',
        description: 'Promueve una operación más estable al manejar perturbaciones en tiempo real, lo que permite un funcionamiento suave y confiable del sistema.'
    },
};


// Function to set up the event listener for a specific apc-container
function setupContainer(containerId) {
    const itemList = document.getElementById(`itemList${containerId}`);
    const itemImage = document.getElementById(`itemImage${containerId}`);
    const itemDescription = document.getElementById(`itemDescription${containerId}`);

    itemList.addEventListener('click', (event) => {
        // Remove active class from all items
        const items = itemList.querySelectorAll('.apc-item');
        items.forEach(item => item.classList.remove('active'));

        // Get the clicked apc-item
        const clickedItem = event.target;

        // Add active class to the clicked apc-item
        clickedItem.classList.add('active');

        // Get the apc-item ID
        const itemId = clickedItem.dataset.item;

        // Update image and description
        itemImage.src = itemsElements[itemId].image;
        itemDescription.textContent = itemsElements[itemId].description;
    });
}

//Set up containers
setupContainer(1);
setupContainer(2);
setupContainer(3);

setupContainer(4);
setupContainer(5);
setupContainer(6);