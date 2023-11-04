const server = new WebSocket('ws://localhost:9876/websocket');

var fan_speed = 0;
var temprature = 24;
var acStatus = false;

server.onmessage = function(event){ // updating doors status as locked/unlocked
    const data = (event.data)

    if(data === "AutoBtn"){
        temprature = 18;
        document.getElementById('tempraturePh').innerText = "18°C";
        fan_speed = 2;
        document.getElementById('fanSpeedPh').innerText = "2";
    }

    if(data === "AcOff"){
        acStatus = false;
        document.getElementById('ACPh').innerText = "Off";
        document.getElementById('ACPh').style.color="red";
        document.getElementById('tempraturePh').innerText = "*";
        document.getElementById('tempraturePh').style.color="red";
        document.getElementById('fanSpeedPh').innerText = "*";
        document.getElementById('fanSpeedPh').style.color="red";
    }

    if(data === "AcOn"){
        acStatus = true;
        document.getElementById('ACPh').innerText = "On";
        document.getElementById('ACPh').style.color="lime";
        document.getElementById('fanSpeedPh').innerText = fan_speed;
        document.getElementById('fanSpeedPh').style.color="white";
        document.getElementById('tempraturePh').innerText = temprature + "°C";
        document.getElementById('tempraturePh').style.color="white";
        
    }

    if(data === "Doors Locked"){
        document.getElementById('DoorStatPh').innerText = "Locked";       
    }

    if(data === "Doors Unlocked"){
        document.getElementById('DoorStatPh').innerText = "Unlocked";       
    }

    if(data === "Engine On"){
        document.getElementById('EngineStatPh').innerText = "On";   
        document.getElementById('EngineStatPh').style.color="lime";
    
    }

    if(data === "Engine Off"){
        document.getElementById('EngineStatPh').innerText = "Off";
        document.getElementById('EngineStatPh').style.color="red";      
    }

    if(data === "Lights Off"){
        document.getElementById('LightsStatPh').innerText = "Off";
        document.getElementById('LightsStatPh').style.color="red";      
    }

    if(data === "Lights On"){
        document.getElementById('LightsStatPh').innerText = "On";
        document.getElementById('LightsStatPh').style.color="lime";      
    }

    if(data === "FanPlus"){
        if(fan_speed<4 && acStatus==true){
            fan_speed++;
            document.getElementById('fanSpeedPh').innerText = fan_speed;
          }
    }

    if(data === "fanMinus"){
        if(fan_speed>0 && acStatus==true){
            fan_speed--;
            document.getElementById('fanSpeedPh').innerText = fan_speed;
          }
    }

    if(data === "tempPlus"){
        if(temprature<24 && acStatus==true){
            temprature = temprature+0.5;
            document.getElementById('tempraturePh').innerText = temprature + "°C";
          }
    }

    if(data === "tempMinus" && acStatus==true){
        if(temprature>16){
            temprature = temprature-0.5;
            document.getElementById('tempraturePh').innerText = temprature + "°C";
          }
    }



  }