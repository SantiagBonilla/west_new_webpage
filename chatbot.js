var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. Chatbot","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },  
    servicios: {
        title:["en WEST tenemos diferentes enfoques de trabajo. sobre que servicio te gustaría profudizar: "],
        options:["1. CONTROL AVANZADO DE PROCESOS","2. ANALÍTICA DE DATOS", "3. AUTOMATIZACIÓN Y CONTROL", "4. SEGURIDAD DE PROCESOS", "5. REALIDAD AUMENTADA", "6. CIBERSEGURIDAD", "7. LUFKIN"],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos","https://www.youtube.com/@webhub/videos"]
        }
    },
    control: {
        title:["El uso de estrategias de control avanzado se recomienda en procesos y operaciones multivariablees cuando los algoritmos de control regulatorio convencionales, como PID, no proporcionan la robustez y rendimiento óptimo necesarios frente a perturbaciones. ¿Te gustaría saber mas? escoge una opción:"],
        options:['1. enlace de la pagina detallada','2. proyectos existentes'],
        url : {
            
        }
    },
    politicas: {
        title:["para saber mas de nosotros y nuestras politicas puede consultar la siguiente pagina:"],
        options:['https://west.net.co/nosotrostest/'],
        url : {
            
        }
    },

}

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable to store user's message
const inputInitHeight = chatInput.scrollHeight;



const createChatLi = (message, className) => {
    
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span><img src="images/westbot.jpeg"></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {

    //prepare the message provided by the user
    const messageElement = chatElement.querySelector("p");
    var str= userMessage;
    var textArr= str.split(" ");
    var findText= textArr[0];

    //find the coincidence in data
    var tempObj= data[findText.toLowerCase()];

    // show message:
    var message = tempObj.title
    for(let i=0;i<tempObj.options.length;i++){
        message = message+"\n"+tempObj.options[i]
        console.log(message)
    }
    messageElement.textContent = message
}



const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if (!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Seleccione una opción", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

// parte de codgo unicamente utilizada para que el char registre la pregunta con la tecla enter
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.chat-input textarea');
    const sendButton = document.getElementById('send-btn');

    textarea.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita que se haga un salto de línea en el textarea
            sendButton.click(); // Simula el clic en el botón "send"
        }
    });
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

