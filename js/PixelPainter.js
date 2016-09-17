//'use strict';

var eraseButton = document.createElement('button');
eraseButton.id = 'erase';
eraseButton.innerHTML = 'ERASE';
eraseButton.addEventListener('click', function(){

});
pixelPainter.appendChild(eraseButton);

var clearButton = document.createElement('button');
clearButton.id ='clear';
clearButton.innerHTML = 'CLEAR';
clearButton.addEventListener('click', function(){

});
pixelPainter.appendChild(clearButton);


var colorPallette = document.createElement('div');
colorPallette.id = 'grid';
pixelPainter.appendChild(colorPallette);

var tablePallette = document.createElement('div');
tablePallette.className = 'colorCell';
colorPallette.appendChild(tablePallette);

for(var z=0; z<3;z++){
  var palletteRow = document.createElement('div');
  palletteRow.id ='colorTr' + z;
  palletteRow.className = 'colorTrClass';
  colorPallette.appendChild(palletteRow);
for(var i=0; i<3; i++){
  var palletteColumn= document.createElement('div');
  palletteColumn.id = 'colorTd' + i;
  palletteColumn.className = 'colorTdClass';
  palletteRow.appendChild(palletteColumn);
  }
}


function gridTable(height, width){
this.height = height;
this.width = width;
}




