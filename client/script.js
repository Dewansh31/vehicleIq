const server = new WebSocket('ws://localhost:9876/websocket');

const engineOn = document.getElementById('engineOn');
const engineOff = document.getElementById('engineOff');
const lights = document.getElementById('lightStatus');
const doors = document.getElementById('doorStatus');

// const engPlace = document.getElementById('enginePlaceholder')

let lightStat = new Boolean(false);
let doorStat = new Boolean(false);
let engineStat = new Boolean(false);

engineOn.addEventListener('click', function(){
  let text = "Engine On"
  server.send(text);
  engineStat = true;
  window.onload = function(){
    const inputElement = document.getElementById('enginePlaceholder')
    inputElement.setAttribute('placeholder', text);
  }
})

engineOff.addEventListener('click', function(){
  while(engineStat === true){
    console.log("Engine Off")
    engineStat = false;
    break;
  }
})

lights.addEventListener('click', function(){
  let text1 = "Lights On";
  let text2 = "Lights Off";
  const lightElement = document.getElementById("lightsPlaceholder");

  if(lightStat === true){
    server.send(text2);
    lightElement.setAttribute('placeholder', text2);
    lightStat = false;
  } else {
    server.send(text1);
    lightElement.setAttribute('placeholder', text2);
    lightStat = true;
  }
});

doors.addEventListener('click', function(){
  if(doorStat === true){
    console.log("Doors Locked")
    doorStat = false;
  } else {
    console.log("Doors Unlocked")
    doorStat = true;
  }
});

// server.onmessage = function(event){
//   const parsedMessage = event.data;
  
// }