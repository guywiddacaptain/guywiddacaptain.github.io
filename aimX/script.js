//Info Modal
const infomodal = document.querySelector(".info-modal");
function infomodalopen(){
  infomodal.showModal();
}
infomodal.addEventListener("click", e => {
  const infoDialogDimensions = infomodal.getBoundingClientRect()
  if (
    e.clientX < infoDialogDimensions.left ||
    e.clientX > infoDialogDimensions.right ||
    e.clientY < infoDialogDimensions.top ||
    e.clientY > infoDialogDimensions.bottom
  ) {
    infomodal.close()
  }
})

//Info Stuff
const about = document.querySelector('#info-about');
const about_btn = document.querySelector('#info-about-btn');
const changelog = document.querySelector('#info-changelog');
const changelog_btn = document.querySelector('#info-changelog-btn');
const upnext = document.querySelector('#info-upnext');
const upnext_btn = document.querySelector('#info-upnext-btn');
const contact = document.querySelector('#info-contact');
const contact_btn = document.querySelector('#info-contact-btn');

function showabout(){
  if(about.style.display = "block"){
    changelog.style.display = "none";
    upnext.style.display = "none";
    contact.style.display = "none";
    about_btn.classList.add('active');
    changelog_btn.classList.remove('active');
    upnext_btn.classList.remove('active');
    contact_btn.classList.remove('active');
  }
  else{
    about.style.display = "none";
  }
}
function showchangelog(){
  if(changelog.style.display = "block"){
    about.style.display = "none";
    upnext.style.display = "none";
    contact.style.display = "none";
    changelog_btn.classList.add('active');
    about_btn.classList.remove('active');
    upnext_btn.classList.remove('active');
    contact_btn.classList.remove('active');
  }
  else{
    changelog.style.display = "none";
  }
}
function showupnext(){
  if(upnext.style.display = "block"){
    about.style.display = "none";
    changelog.style.display = "none";
    contact.style.display = "none";
    upnext_btn.classList.add('active');
    about_btn.classList.remove('active');
    changelog_btn.classList.remove('active');
    contact_btn.classList.remove('active');
  }
  else{
    upnext.style.display = "none";
  }
}
function showcontact(){
  if(contact.style.display = "block"){
    about.style.display = "none";
    changelog.style.display = "none";
    upnext.style.display = "none";
    contact_btn.classList.add('active');
    about_btn.classList.remove('active');
    changelog_btn.classList.remove('active');
    upnext_btn.classList.remove('active');
  }
  else{
    contact.style.display = "none";
  }
}

//Rating Modal
const ratingModal = document.querySelector(".rating-modal");
function ratingmodalopen(){
  ratingModal.showModal();
}
ratingModal.addEventListener("click", e => {
  const ratingDialogDimensions = ratingModal.getBoundingClientRect()
  if (
    e.clientX < ratingDialogDimensions.left ||
    e.clientX > ratingDialogDimensions.right ||
    e.clientY < ratingDialogDimensions.top ||
    e.clientY > ratingDialogDimensions.bottom
  ) {
    ratingModal.close()
  }
})

//Star Rating
function rating(){
  const thanks = document.querySelector('#thanks');
  const stars = document.querySelector('.stars-cont');
  thanks.style.display = "block";
  setTimeout(function hide(){
    thanks.style.display = "none";
    stars.style.pointerEvents = "none";
  },1700)
}

//Canvas Draw 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
function redraw() {
  //dimensions
  canvas.width = 200;
  canvas.height = 200;
  // center
  var x = canvas.width / 2;
  var y = canvas.height / 2;
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
  if (dotradius.value == 0){}
  else{
    function dotoutline() {

      ctx.beginPath();
      ctx.arc(x, y, (+dotradius.value + (+outlineLength.value / 2)), 0, 2 * Math.PI, false);
      ctx.fillStyle = outlinecolorhex.value;
      ctx.fill();
    }
    dotoutline();
  }
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

//Theme buttons
function themetoggle() {
  var theme = document.getElementById("theme-btn");
  if(theme.classList.contains("theme-light")) {
    theme.classList.remove("theme-light");
    document.querySelector(".canvas-cont").style.backgroundColor = "#eee";
  }
  else {
    theme.classList.add("theme-light");
    document.querySelector(".canvas-cont").style.backgroundColor = "#222";
  }
}

//Download canvas as image
function DownloadCanvasAsImage(){
  let downloadLink = document.createElement('a');
  downloadLink.setAttribute('download', 'AimX Crosshair.png');
  let canvas = document.querySelector('#canvas');
  let dataURL = canvas.toDataURL('image/png');
  let url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
  downloadLink.setAttribute('href',url);
  downloadLink.click();
}

//Presets
function preset1(){
  const width_preset = 2;
  const length_preset = 6;
  const gap_preset = 3;
  const outline_preset = 2;
  const rotate_preset = 0;
  const dot_preset = 0;
  const fill_preset = '#00ff00';
  const outfill_preset = '#000000';
  strokeWidth.value = width_preset;
  strokeWidthval.value = width_preset;
  crosshairLength.value = length_preset;
  crosshairLengthval.value = length_preset;
  gapLength.value = gap_preset;
  gapLengthval.value = gap_preset;
  outlineLength.value = outline_preset;
  outlineLengthval.value = outline_preset;
  rotate.value = rotate_preset;
  rotateval.value = rotate_preset;
  dotradius.value = dot_preset;
  dotradiusval.value = dot_preset;
  fillcolorhex.value = fill_preset;
  fillcolorhexval.value = fill_preset;
  outlinecolorhex.value = outfill_preset;
  outlinecolorhexval.value = outfill_preset;
}
function preset2(){
  const width_preset = 2;
  const length_preset = 4;
  const gap_preset = 4;
  const outline_preset = 0;
  const rotate_preset = 0;
  const dot_preset = 1;
  const fill_preset = '#00ffff';
  const outfill_preset = '#000000';
  strokeWidth.value = width_preset;
  strokeWidthval.value = width_preset;
  crosshairLength.value = length_preset;
  crosshairLengthval.value = length_preset;
  gapLength.value = gap_preset;
  gapLengthval.value = gap_preset;
  outlineLength.value = outline_preset;
  outlineLengthval.value = outline_preset;
  rotate.value = rotate_preset;
  rotateval.value = rotate_preset;
  dotradius.value = dot_preset;
  dotradiusval.value = dot_preset;
  fillcolorhex.value = fill_preset;
  fillcolorhexval.value = fill_preset;
  outlinecolorhex.value = outfill_preset;
  outlinecolorhexval.value = outfill_preset;
}
function preset3(){
  const width_preset = 1;
  const length_preset = 1;
  const gap_preset = 0;
  const outline_preset = 3;
  const rotate_preset = 0;
  const dot_preset = 1;
  const fill_preset = '#ffffff';
  const outfill_preset = '#000000';
  strokeWidth.value = width_preset;
  strokeWidthval.value = width_preset;
  crosshairLength.value = length_preset;
  crosshairLengthval.value = length_preset;
  gapLength.value = gap_preset;
  gapLengthval.value = gap_preset;
  outlineLength.value = outline_preset;
  outlineLengthval.value = outline_preset;
  rotate.value = rotate_preset;
  rotateval.value = rotate_preset;
  dotradius.value = dot_preset;
  dotradiusval.value = dot_preset;
  fillcolorhex.value = fill_preset;
  fillcolorhexval.value = fill_preset;
  outlinecolorhex.value = outfill_preset;
  outlinecolorhexval.value = outfill_preset;
}
