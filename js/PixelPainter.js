//'use strict';

var eraseButton = document.createElement('button');
    eraseButton.id = 'erase';
    eraseButton.innerHTML = 'ERASE';
    eraseButton.addEventListener('click',storeColorPicker);
    pixelPainter.appendChild(eraseButton);
var straightLineBtn = document.createElement('button');
    straightLineBtn.id = 'straightLineBtn';
    straightLineBtn.innerHTML = 'Straight Line';
    straightLineBtn.addEventListener('click',fooo);
    pixelPainter.appendChild(straightLineBtn);
//******Clear Button*******
var clearButton = document.createElement('button');
    clearButton.id ='clear';
    clearButton.innerHTML = 'CLEAR';
    pixelPainter.appendChild(clearButton);
var currentColor= null;
var palletteDiv = document.createElement('div');
var palletteColorArr = ['#ffff00', '#0000ff', '#009900', '#ff3399','#663300', '#ff0000', '#000000', '#66ffff', '#ff8000', '#c6ff1a'];
var onOffBool = null;


//******************************
//********Color Pallette********
function gridPallette(height, width){
palletteDiv.id = 'palletteDiv';
for(var cellNumber=0; cellNumber<height;cellNumber++){
   var palletteCell = document.createElement('div');
   palletteDiv.appendChild(palletteCell);
   palletteCell.classList.add('palletteCell');
   palletteCell.style.backgroundColor = palletteColorArr[cellNumber];
//****Event Listeners****
   palletteCell.addEventListener('click', storeColorPicker);
  }
pixelPainter.appendChild(palletteDiv);
}
gridPallette(10);
// ****************************
//********Drawing Table********
function gridTable(height, width){
  var displayDiv = document.createElement('div');
  displayDiv.id = 'displayDiv';
  for(var rowNumber=0; rowNumber<height;rowNumber++){
     for(var columnRow=0; columnRow<width; columnRow++){
     var displayCell = document.createElement('div');
     displayDiv.appendChild(displayCell);
     displayCell.classList.add('displayCell');
//****Event Listener
     displayCell.addEventListener('click', injectColorPicker);
     displayCell.addEventListener('mousedown', mouseDown);
     displayCell.addEventListener('mouseover', mouseOver);
     displayCell.addEventListener('mouseup', mouseUp);
     }
  }
pixelPainter.appendChild(displayDiv);
}
gridTable(100, 100);

//*******Color PalletteFunctions*******
//***ColorPick***
function storeColorPicker (event){
  currentColor = event.target.style.backgroundColor;

}
//***injectColorPicker***
function injectColorPicker (event){
  if(event.target.style.backgroundColor === 'white'){
    event.target.style.backgroundColor = currentColor;
  }else if(event.target.style.backgroundColor != 'white'){
    event.target.style.backgroundColor = currentColor;
    }
}

//********Drag Color Functions
function mouseDown(){
  onOffBool = true;
  if(onOffBool === true ){
    this.style.backgroundColor = currentColor;
  }
}
function mouseOver(){
  if(onOffBool === true){
    this.style.backgroundColor = currentColor;
  }
}

function mouseUp(){
  onOffBool = false;
  if (onOffBool === false){
    this.style.backgroundColor = currentColor;
  }
}
//*********Straight Line Function********
function straightLine(){}
//*********
//*********EventListeners
clearButton.addEventListener('click', function(event){
  var gridClear = document.querySelectorAll('.displayCell');
  for( var x = 0; x<gridClear.length; x++){
    if(gridClear[x].style.backgroundColor !== 'white'){
      gridClear[x].style.backgroundColor = 'white';
    }
  }
});


