 // Items data
 const itemsElements = {
    19: {
        image: 'images/Digitalizacion/EMMA.png',
        description: 'Aplicación IIoT enfocada a gestionar las emisiones de Gases de Efecto Invernadero (GEI) directas e indirectas puede ser de gran ayuda para la implementación de la norma ISO 50001 y ISO 14064. Nuestra solución contiene un sistema predictivo de monitoreo de emisiones basado en modelos híbridos y sirve como alternativa para la medición de estos gases.'
    },
    20: {
        image: 'images/Digitalizacion/DYRIMA.png',
        description: 'Aplicación IIoT enfocada a gestionar las capas de protección de seguridad por medio de la representación de datos en indicadores clave, tanto en rasgos generales como individuales para cada capa. Las capas disponibles en la aplicación son: Sistema de Control Básico de Proceso (BPCS), Alarmas, Sistema Integrado de Seguridad (SIS), Sistema de Protección Contra Incendios (F&G) y Capa Activa..'
    },
    21: {
        image: 'images/Digitalizacion/ESVA.png',
        description: 'ESVA es un asistente virtual que utiliza la última tecnología en procesamiento de lenguaje natural y aprendizaje automático para ayudar a obtener información más rápidamente, optimizar el tiempo de búsqueda en documentos, agilizar todos los trámites administrativos y de gestión e incluso se utiliza como herramienta de formación para nuevos empleados y Operadores en su empresa e instalaciones.'
    },
    22: {
        image: 'images/Digitalizacion/energymanager.png',
        description: 'Sistema de gestión energética certificado según la norma ISO 50001. Le ayuda a visualizar los flujos de energía y los valores de consumo en sus procesos en detalle y asignarlos a los consumidores o centros de costo relevantes. Evalúe las medidas de eficiencia implementadas, optimice suadquisición de energía y compare la eficiencia energética entre plantas y ubicaciones.'    
    },
    23: {
        image: 'images/Digitalizacion/GestionActivos.png',
        description: 'La interconexión de activos inteligentes proporcionan datos e información valiosa que ayudan a las empresas a optimizar la gestión de sus recursos, mejorando la productividad, la fiabilidad y la eficiencia. Esto se traduce en un aumento de la rentabilidad, una reducción de riesgos y una mayor sostenibilidad en las operaciones.'
    },
    24: {
        image: 'images/Digitalizacion/ITOT.jpeg',
        description: 'Integramos sistemas IT y OT para optimizar la eficiencia operativa de su empresa. Utilizando protocolos avanzados y APIs, mejoramos la comunicación entre sistemas, facilitando una toma de decisiones más informada y segura, mientras reforzamos la ciberseguridad en todas las operaciones.'
    },
    25: {
        image: 'images/Digitalizacion/3.1.png',
        description: 'Diseño de maquinas o equipos, Analisis de durabilidad, materiales'
    },
    26: {
        image: 'images/Digitalizacion/3.2.png',
        description: 'Modelos fenomenológicos, Analisis energetico, reacciones, eficiencias.'
        },
    27: {
        image: 'images/Digitalizacion/3.3.png',
        description: 'Modelo con datos reales. Análisis económico, producción. '
        },
    28: {
        image: 'images/Digitalizacion/3.4.png',
        description: 'Representación de variables no medibles mediante datos o modelo hibrido.'    
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

setupContainer(7);
setupContainer(8);
setupContainer(9);