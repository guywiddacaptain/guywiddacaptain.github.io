var canvas = document.getElementById("vcscanvas-crosshair-mini");
var ctx = canvas.getContext('2d');
var width = document.getElementById("strokeWidth");

//Variables
// var strokewidth = 2;
// var strokelength = 10;
// var gap = 5;
// var color = "red";
// var angle = 0;
// var round = "none";
// var radius = 3;
// var outline = 3;

function redraw() {
  //dimensions
  canvas.width = 200;
  canvas.height = 200;

  // center
  var x = canvas.width / 2;
  var y = canvas.height / 2;

  //ctx.lineCap = round; //Rounds the line ends

  //Rotating the crosshair
  ctx.translate(x, y); // Translate context
  ctx.rotate(rotate.value * Math.PI/180); // Rotate context
  ctx.translate(-x, -y); // Restore context's original position

  //Top Stroke Outline
  ctx.beginPath();
  ctx.lineWidth = +(strokeWidth.value) + (+outlineLength.value);
  ctx.moveTo(x , y - (+gapLength.value) + ((+outlineLength.value) / 2));
  ctx.lineTo(x , y - (+gapLength.value) - (+crosshairLength.value) - ((+outlineLength.value) / 2));
  ctx.strokeStyle = outlinecolorhex.value;
  ctx.stroke();
  //Right Stroke Outline
  ctx.beginPath();
  ctx.lineWidth = +(strokeWidth.value) + (+outlineLength.value);
  ctx.moveTo(x - (+gapLength.value) + ((+outlineLength.value) / 2) , y);
  ctx.lineTo(x - (+gapLength.value) - (+crosshairLength.value) - ((+outlineLength.value) / 2), y);
  ctx.strokeStyle = outlinecolorhex.value;
  ctx.stroke();
  //Bottom stroke Outline
  ctx.beginPath();
  ctx.lineWidth = +(strokeWidth.value) + (+outlineLength.value);
  ctx.moveTo(x , y + (+gapLength.value) - ((+outlineLength.value) / 2));
  ctx.lineTo(x , y + (+gapLength.value) + (+crosshairLength.value) + ((+outlineLength.value) / 2));
  ctx.strokeStyle = outlinecolorhex.value;
  ctx.stroke();
  //Left Stroke Outline
  ctx.beginPath();
  ctx.lineWidth = +(strokeWidth.value) + (+outlineLength.value);
  ctx.moveTo(x + (+gapLength.value) - ((+outlineLength.value) / 2) , y);
  ctx.lineTo(x + (+gapLength.value) + (+crosshairLength.value) + ((+outlineLength.value) / 2) , y);
  ctx.strokeStyle = outlinecolorhex.value;
  ctx.stroke();
  //Dot Outline
  ctx.beginPath();
  ctx.arc(x, y, (+dotradius.value + (+outlineLength.value / 2)), 0, 2 * Math.PI, false);
  ctx.fillStyle = outlinecolorhex.value;
  ctx.fill();
  
  //Top Stroke
  ctx.beginPath();
  ctx.lineWidth = strokeWidth.value;
  ctx.moveTo(x , y - (+gapLength.value));
  ctx.lineTo(x , y - (+gapLength.value) - (+crosshairLength.value));
  ctx.strokeStyle = fillcolorhex.value;
  ctx.stroke();
  //Right Stroke
  ctx.beginPath();
  ctx.lineWidth = strokeWidth.value;
  ctx.moveTo(x - (+gapLength.value) , y);
  ctx.lineTo(x - (+gapLength.value) - (+crosshairLength.value), y);
  ctx.strokeStyle = fillcolorhex.value;
  ctx.stroke();
  //Bottom stroke
  ctx.beginPath();
  ctx.lineWidth = strokeWidth.value;
  ctx.moveTo(x , y + (+gapLength.value));
  ctx.lineTo(x , y + (+gapLength.value) + (+crosshairLength.value));
  ctx.strokeStyle = fillcolorhex.value;
  ctx.stroke();
  //Left Stroke
  ctx.beginPath();
  ctx.lineWidth = strokeWidth.value;
  ctx.moveTo(x + (+gapLength.value) , y);
  ctx.lineTo(x + (+gapLength.value) + (+crosshairLength.value) , y);
  ctx.strokeStyle = fillcolorhex.value;
  ctx.stroke();
  //Dot
  ctx.beginPath();
  ctx.arc(x, y, dotradius.value, 0, 2 * Math.PI, false);
  ctx.fillStyle = fillcolorhex.value;
  ctx.fill();
}

document.addEventListener('input', redraw);

redraw();

function DownloadCanvasAsImage(){
	let downloadLink = document.createElement('a');
	downloadLink.setAttribute('download', 'AimX Crosshair.png');
	let canvas = document.getElementById('vcscanvas-crosshair-mini');
  let dataURL = canvas.toDataURL('image/png');
  let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
	downloadLink.setAttribute('href',url);
	downloadLink.click();
}


//https://stackoverflow.com/questions/13475016/how-to-update-html5-range-on-change-of-a-text-input