const server = new WebSocket('ws://localhost:9876/websocket');

const engineOn = document.getElementById('engineOn');
const engineOff = document.getElementById('engineOff');
const lights = document.getElementById('lightStatus');
const doors = document.getElementById('doorStatus');

let doorStat = new Boolean(false);
let lightStat = new Boolean(false);


engineOn.addEventListener('click', function(){
  server.send("Engine On");
  // engineStat = true;
});

engineOff.addEventListener('click', function(){  
    server.send("Engine Off");
});

lights.addEventListener('click', function(){
  // Lights btn toggle
  if (lights.classList.contains("neon-button-toggled")) {
    lights.classList.remove("neon-button-toggled");
  } else {
      lights.classList.add("neon-button-toggled");
  }


  if(lightStat === true){
    server.send("Lights Off");
    lightStat = false;
  } else {
    server.send("Lights On");
    lightStat = true;
  }
});

doors.addEventListener('click', function(){
  // Doors btn toggle
  if (doors.classList.contains("neon-button-toggled")) {
    doors.classList.remove("neon-button-toggled");
  } else {
      doors.classList.add("neon-button-toggled");
  }

  if(doorStat === true){
    server.send("Doors Locked");
    doorStat = false;
  } else { 
    server.send("Doors Unlocked")
    doorStat = true;
  }
});


// Climate control elements
const fanPlus = document.getElementById('fanPlus');
const fanMinus = document.getElementById('fanMinus');
const tempPlus = document.getElementById('tempPlus');
const tempMinus = document.getElementById('tempMinus');
const auto = document.getElementById('autoClimate');
const onAC = document.getElementById('onAC');
const offClimate = document.getElementById('offClimate');


auto.addEventListener('click', function(){
  server.send("AutoBtn");
});

offClimate.addEventListener('click', function(){
  server.send("AcOff");
});

onAC.addEventListener('click', function(){
  server.send("AcOn");
});

fanPlus.addEventListener('click', function(){
  server.send("FanPlus");
});

fanMinus.addEventListener('click', function(){
  server.send("fanMinus");
});

tempPlus.addEventListener('click', function(){
  server.send("tempPlus");
});

tempMinus.addEventListener('click', function(){
  server.send("tempMinus");
});

