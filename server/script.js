const server = new WebSocket('ws://localhost:9876/websocket');

const conn = document.getElementById('connection');
const carId = document.getElementById('carId');
const remId = document.getElementById('remId');
const button = document.getElementById('submit')
// const input = document.getElementById('message')

// button.disabled = false;
button.addEventListener('click', sendEntry, false);

// server.onopen = function(){
//     button.disabled = false;
// }

server.onmessage = function(event){
    const parsedMessage = JSON.parse(event.data);
  
    if (parsedMessage.type === 'placeholder-update') {
      const placeholder = document.getElementById(`carId`);
      placeholder.value = parsedMessage.newValue;
    }
}

function updatePlaceholderValue(carId, newValue) {
    server.send(JSON.stringify({
      type: 'placeholder-update',
      carId,
      newValue,
    }));
}

function generateMessageEntry(msg, type){
    const newMessage = document.createElement('div')
    newMessage.innerText = `${type} says: ${msg}`
    connection.appendChild(newMessage)
}

function sendEntry(){
    const text = remId.value
    generateMessageEntry(text, 'Remote')
    server.send(text)
    updatePlaceholderValue('0', text);
}