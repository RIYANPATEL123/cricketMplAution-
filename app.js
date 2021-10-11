var teama = 0;
var teamb = 0;
var teamc = 0;
var teamd = 0;
var teame = 0;
var teamf = 0;
var teamg = 0;
var teamh = 0;
var total  = 0;
var pointa = 0;
var pointb = 0;
var pointc = 0;
var pointd = 0;
var pointe = 0;
var pointf = 0;
var pointg = 0;
var pointh = 0;
var countera = 0;
var counterb = 0;
var counterc = 0;
var counterd = 0;
var countere = 0;
var counterf = 0;
var counterg = 0;
var counterh = 0;
var mpla = 40000;
var mplb = 41500;
var mplc = 41500;
var mpld = 41500;
var mple = 41500;
var mplf = 41500;
var mplg = 43500;
var mplh = 43500;

//add button 
function teamab() {
  teama += 500;
  document.getElementById("teama").innerHTML = teama;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;

};

function teambb() {
  teamb += 500;
  document.getElementById("teamb").innerHTML = teamb;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teamcb() {
  teamc += 500;
  document.getElementById("teamc").innerHTML = teamc;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teamdb() {
  teamd += 500;
  document.getElementById("teamd").innerHTML = teamd;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teameb() {
  teame += 500;
  document.getElementById("teame").innerHTML = teame;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teamfb() {
  teamf += 500;
  document.getElementById("teamf").innerHTML = teamf;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teamgb() {
  teamg += 500;
  document.getElementById("teamg").innerHTML = teamg;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

function teamhb() {
  teamh += 500;
  document.getElementById("teamh").innerHTML = teamh;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

//total button
function totall() {
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
};

//minus button 
function teamba() {
  teama -= 100;
  document.getElementById("teama").innerHTML = teama;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambbb() {
  teamb -= 100;
  document.getElementById("teamb").innerHTML = teamb;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambc() {
  teamc -= 100;
  document.getElementById("teamc").innerHTML = teamc;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambd() {
  teamd -= 100;
  document.getElementById("teamd").innerHTML = teamd;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambe() {
  teame -= 100;
  document.getElementById("teame").innerHTML = teame;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambf() {
  teamf -= 100;
  document.getElementById("teamf").innerHTML = teamf;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambg() {
  teamg -= 100;
  document.getElementById("teamg").innerHTML = teamg;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
function teambh() {
  teamh -= 100;
  document.getElementById("teamh").innerHTML = teamh;
  total = teama+teamb+teamc+teamd+teame+teamf+teamg+teamh;
  document.getElementById("total").innerHTML = total;
  
};
//points of one team 
function pointsa(){
  
  countera +=1;
  document.getElementById("countera").innerHTML = countera;
  mpla -= total;
  document.getElementById("mpla").innerHTML = mpla;
  mpla += 500;
  document.getElementById("mpla").innerHTML = mpla;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsb(){
  counterb +=1;
  document.getElementById("counterb").innerHTML = counterb;
  mplb -= total;
  document.getElementById("mplb").innerHTML = mplb;
  mplb += 500;
  document.getElementById("mplb").innerHTML = mplb;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsc(){
  counterc +=1;
  document.getElementById("counterc").innerHTML = counterc;
  mplc -= total;
  document.getElementById("mplc").innerHTML = mplc;
  mplc += 500;
  document.getElementById("mplc").innerHTML = mplc;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsd(){
  counterd +=1;
  document.getElementById("counterd").innerHTML = counterd;
  mpld -= total;
  document.getElementById("mpld").innerHTML = mpld;
  mpld += 500;
  document.getElementById("mpld").innerHTML = mpld;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointse(){
  countere +=1;
  document.getElementById("countere").innerHTML = countere;
  mple -= total;
  document.getElementById("mple").innerHTML = mple;
  mple += 500;
  document.getElementById("mple").innerHTML = mple;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsf(){
  counterf +=1;
  document.getElementById("counterf").innerHTML = counterf;
  mplf -= total;
  document.getElementById("mplf").innerHTML = mplf;
  mplf += 500;
  document.getElementById("mplf").innerHTML = mplf;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsg(){
  counterg +=1;
  document.getElementById("counterg").innerHTML = counterg;
  mplg -= total;
  document.getElementById("mplg").innerHTML = mplg;
  mplg += 500;
  document.getElementById("mplg").innerHTML = mplg;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsh(){
  counterh +=1;
  document.getElementById("counterh").innerHTML = counterh;
  mplh -= total;
  document.getElementById("mplh").innerHTML = mplh;
  mplh += 500;
  document.getElementById("mplh").innerHTML = mplh;
  teama = 0;
  document.getElementById("teama").innerHTML = teama;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  teamh = 0;
  document.getElementById("teamh").innerHTML = teamh;
  total = 0;
  document.getElementById("total").innerHTML = total;
};



//image grid
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}