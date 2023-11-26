// javascript for calculator
let num = '';
function one(){
  num = num + '1';
  document.getElementById("value").value = num;
}
function two(){
  num = num + '2';
  document.getElementById("value").value = num;
}
function three(){
  num = num + '3';
  document.getElementById("value").value = num;
}
function four(){
  num = num + '4';
  document.getElementById("value").value = num;
}
function five(){
  num = num + '5';
  document.getElementById("value").value = num;
}
function six(){
  num = num + '6';
  document.getElementById("value").value = num;
}
function seven(){
  num = num + '7';
  document.getElementById("value").value = num;
}
function eight(){
  num = num + '8';
  document.getElementById("value").value = num;
}
function nine(){
  num = num + '9';
  document.getElementById("value").value = num;
}
function zero(){
  num = num + '0';
  document.getElementById("value").value = num;
}

function doublezero(){
  num = num + '00';
  document.getElementById("value").value = num;
}
function point(){
  num = num + '.';
  document.getElementById("value").value = num;
}
function plus(){
  num = num + '+';
  document.getElementById("value").value = num;
}
function minus(){
  num = num + '-';
  document.getElementById("value").value = num;
}
function multiply(){
  num = num + '*';
  document.getElementById("value").value = num;
}
function divide(){
  num = num + '/';
  document.getElementById("value").value = num;
}

function remove(){
  num =  0;
  document.getElementById("value").value = num;
}
function total(){
  if(num === ''){
      document.getElementById("value").value = '0';
  }
  else{
  num = eval(num);
  num = num.toFixed(2);
  document.getElementById("value").value = num;
  }
}

// background color change 

let menustate = 1;
function change(){
  if(menustate === 0){
    menustate = 1; 
    document.getElementById("background").style.background = 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)';
  }
  else if(menustate === 1){
    menustate = 2;
    document.getElementById("background").style.background = 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)';
  }
  else if (menustate === 2) {
    menustate = 3;
    document.getElementById("background").style.background = 'linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)';
  }
  else if (menustate === 3) {
    menustate = 4;
    document.getElementById("background").style.background = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)';
  }
  else if (menustate === 4) {
    menustate = 0;
    document.getElementById("background").style.background = 'linear-gradient(to top, #30cfd0 0%, #330867 100%)';
  }
}