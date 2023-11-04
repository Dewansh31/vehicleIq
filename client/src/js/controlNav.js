  //For climate control value increment.

  // Fan Speed handeling here
  fanSpeedVal = document.querySelector("#fanSpeed");
    
  document.getElementById("fanPlus").addEventListener("click",()=>{
    let fspeed = Number(fanSpeedVal.innerText);
    if(fspeed<4 && acStatus==true){
      fspeed++;
      fanSpeedVal.innerText = fspeed;
    }
  });

  document.getElementById("fanMinus").addEventListener("click",()=>{
    let fspeed = Number(fanSpeedVal.innerText);
    if(fspeed>0 && acStatus==true){
      fspeed--;
      fanSpeedVal.innerText = fspeed;
    }
  });

  
// Temparature handeling here
tempVal = document.querySelector("#temp");

document.getElementById("tempPlus").addEventListener("click",()=>{
    let temp = Number(tempVal.innerText);
    if(temp<24 && acStatus==true){
      temp=temp+0.5;
      tempVal.innerText = temp;
    }
  });

  document.getElementById("tempMinus").addEventListener("click",()=>{
    let temp = Number(tempVal.innerText);
    if(temp>16 && acStatus==true){
      temp = temp-0.5;
      tempVal.innerText = temp;
    }
  });


  // For Auto button
  document.getElementById("autoClimate").addEventListener("click",()=>{     
    if(acStatus==true){
      document.querySelector("#fanSpeed").innerText = 2;
      document.querySelector("#temp").innerText = 18;
    }
  });

  // For Off button
  document.getElementById("offClimate").addEventListener("click",()=>{     
    document.querySelector("#fanSpeed").innerText = 0;
    acStatus = false;
    document.getElementById("offClimate").classList.add("neon-button-toggled")
    document.getElementById("onAC").classList.remove("neon-button-toggled")
  });

  // Logic for AC button
  let acStatus = false;
  document.getElementById("onAC").addEventListener("click",()=>{     
    acStatus = true;
    document.getElementById("onAC").classList.add("neon-button-toggled")
    document.getElementById("offClimate").classList.remove("neon-button-toggled")
  });



// Adding toggle effects to Remote Control

// Engine On btn
document.getElementById("engineOn").addEventListener("click",()=>{     
    document.getElementById("engineOn").classList.add("neon-button-toggled")
    document.getElementById("engineOff").classList.remove("neon-button-toggled")
  });

// Engine Off btn
document.getElementById("engineOff").addEventListener("click",()=>{     
    document.getElementById("engineOff").classList.add("neon-button-toggled")
    document.getElementById("engineOn").classList.remove("neon-button-toggled")
  });

