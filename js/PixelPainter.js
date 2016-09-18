//'use strict';

var eraseButton = document.createElement('button');
    eraseButton.id = 'erase';
    eraseButton.innerHTML = 'ERASE';
    eraseButton.addEventListener('click',storeColorPicker);
    pixelPainter.appendChild(eraseButton);
//******Clear Button*******
var clearButton = document.createElement('button');
    clearButton.id ='clear';
    clearButton.innerHTML = 'CLEAR';
    pixelPainter.appendChild(clearButton);
var currentColor= null;
var palletteDiv = document.createElement('div');
var palletteColorArr = ['#ffff00', '#0000ff', '#009900', '#ff3399','#663300', '#ff0000', '#000000', '#66ffff', '#ff8000', '#c6ff1a'];
var onOffBool = null;

//*******Functions*******
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



//********Drag Color Functions
function mouseDown(){
  onOffBool = true;
  console.log('downBool: ', onOffBool);
  if(onOffBool === true ){
    this.style.backgroundColor = currentColor;
  }
}
function mouseOver(){
  console.log('mouseOver: ', onOffBool);
  if(onOffBool === true){
    this.style.backgroundColor = currentColor;
  }
}
function mouseUp(){
  onOffBool = false;
  console.log('mouseUp: ', onOffBool);
  if (onOffBool === false){
    this.style.backgroundColor = currentColor;
  }
}


clearButton.addEventListener('click', function(event){
  var gridClear = document.querySelectorAll('.displayCell');
  for( var x = 0; x<gridClear.length; x++){
    if(gridClear[x].style.backgroundColor !== 'white'){
      gridClear[x].style.backgroundColor = 'white';
    }
  }
});


