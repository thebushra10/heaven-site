
 window.addEventListener("load", function() {
    document.getElementById("loading-popup").style.display = "none";
  });
  
$(document).ready(function() {
	
var riverSound = new Audio("audio/river.wav");
riverSound.volume = 0.1;

var  birdsSound = new Audio("audio/bird.wav");

 document.addEventListener("click", () => {
riverSound.play();
birdsSound.play();


  }, { once: true });
  
const params = new URLSearchParams(window.location.search);
var tasbih = params.get("tasbih");
var ikhlas = params.get("ikhlas");
var hawkala = params.get("hawkala");


renderPalms();
renderCastles();
renderTreasures();

window.addEventListener("beforeunload", function (e) {
riverSound.pause();
riverSound.currentTime = 0;
birdsSound.pause();
birdsSound.currentTime = 0;  
});



function renderPalms () {
if (tasbih >= 100) {
if (tasbih >= 900) {
$('.img-palm.img-900').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 800) {
$('.img-palm.img-800').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 700) {
$('.img-palm.img-700').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 600) {
$('.img-palm.img-600').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 500) {
$('.img-palm.img-500').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 400) {
$('.img-palm.img-400').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 300) {
$('.img-palm.img-300').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 200) {
$('.img-palm.img-200').addClass("active");
tasbih = tasbih - 100;
}
if (tasbih >= 100) {
$('.img-palm.img-100').addClass("active");
tasbih = tasbih - 100;
}
} else if (tasbih > 9) {
if (tasbih >= 90 && tasbih < 100) {
$('.img-palm.img-90').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 80 && tasbih < 90) {
$('.img-palm.img-80').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 70 && tasbih <= 80) {
$('.img-palm.img-70').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 60 && tasbih < 70) {
$('.img-palm.img-60').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 50 && tasbih < 60) {
$('.img-palm.img-50').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 40 && tasbih < 50) {
$('.img-palm.img-40').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 30 && tasbih < 40) {
$('.img-palm.img-30').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 20 && tasbih < 30) {
$('.img-palm.img-20').addClass("active");
tasbih = tasbih - 10;
}
if (tasbih >= 10 && tasbih < 20) {
$('.img-palm.img-10').addClass("active");
tasbih = tasbih - 10;
}
} else {
switch (tasbih) {
case "10":
$('.img-palm.img-10').addClass("active");
tasbih = -tasbih - 1;
case "9":
$('.img-palm.img-9').addClass("active");
tasbih = -tasbih - 1;
case "8":
$('.img-palm.img-8').addClass("active");
tasbih = -tasbih - 1;
case "7":
$('.img-palm.img-7').addClass("active");
tasbih = -tasbih - 1;
case "6":
$('.img-palm.img-6').addClass("active");
tasbih = -tasbih - 1;

case "5":
$('.img-palm.img-5').addClass("active");
tasbih = -tasbih - 1;

case "4":
$('.img-palm.img-4').addClass("active");
tasbih = -tasbih - 1;

case "3":
$('.img-palm.img-3').addClass("active");
tasbih = -tasbih - 1;

case "2":
$('.img-palm.img-2').addClass("active");
tasbih = -tasbih - 1;

case "1":
$('.img-palm.img-1').addClass("active");
tasbih = -tasbih - 1;
default: break;
}
}

}

function renderCastles () {

if (ikhlas >= 100) {
if (ikhlas >= 900) {
$('.img-castle.img-900').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 800) {
$('.img-castle.img-800').addClass("active");
$('.img-castle.img-80').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 700) {
$('.img-castle.img-700').addClass("active");
$('.img-castle.img-70').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 600) {
$('.img-castle.img-600').addClass("active");
$('.img-castle.img-60').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 500) {
$('.img-castle.img-500').addClass("active");
$('.img-castle.img-50').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 400) {
$('.img-castle.img-400').addClass("active");
$('.img-castle.img-40').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 300) {
$('.img-castle.img-300').addClass("active");
$('.img-castle.img-30').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 200) {
$('.img-castle.img-200').addClass("active");
$('.img-castle.img-20').addClass("active");
ikhlas = ikhlas - 100;
}
if (ikhlas >= 100) {
$('.img-castle.img-100').addClass("active");
$('.img-castle.img-10').addClass("active");
ikhlas = ikhlas - 100;
}
} else if (ikhlas > 9) {
if (ikhlas >= 90 && ikhlas < 100) {
$('.img-castle.img-90').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 80 && ikhlas < 90) {
$('.img-castle.img-80').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 70 && ikhlas <= 80) {
$('.img-castle.img-70').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 60 && ikhlas < 70) {
$('.img-castle.img-60').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 50 && ikhlas < 60) {
$('.img-castle.img-50').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 40 && ikhlas < 50) {
$('.img-castle.img-40').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 30 && ikhlas < 40) {
$('.img-castle.img-30').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 20 && ikhlas < 30) {
$('.img-castle.img-20').addClass("active");
ikhlas = ikhlas - 10;
}
if (ikhlas >= 10 && ikhlas < 20) {
$('.img-castle.img-10').addClass("active");
ikhlas = ikhlas - 10;
}
} else if (ikhlas < 10) {
switch (ikhlas) {
case "10":
$('.img-castle.img-10').addClass("active");
ikhlas = -ikhlas - 1;

case "9":
$('.img-castle.img-9').addClass("active");
ikhlas = -ikhlas - 1;

case "8":
$('.img-castle.img-8').addClass("active");
ikhlas = -ikhlas - 1;

case "7":
$('.img-castle.img-7').addClass("active");
ikhlas = -ikhlas - 1;

case "6":
$('.img-castle.img-6').addClass("active");
ikhlas = -ikhlas - 1;

case "5":
$('.img-castle.img-5').addClass("active");
ikhlas = -ikhlas - 1;

case "4":
$('.img-castle.img-4').addClass("active");
ikhlas = -ikhlas - 1;

case "3":
$('.img-castle.img-3').addClass("active");
ikhlas = -ikhlas - 1;

case "2":
$('.img-castle.img-2').addClass("active");
ikhlas = -ikhlas - 1;

case "1":
$('.img-castle.img-1').addClass("active");
ikhlas = -ikhlas - 1;
default: break;
}
}

}

function renderTreasures () {

if (hawkala >= 100) {
if (hawkala >= 900) {
$('.img-treasure.img-900').addClass("active");
$('.img-treasure.img-90').addClass("active");
$('.img-treasure.img-9').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 800) {
$('.img-treasure.img-800').addClass("active");
$('.img-treasure.img-80').addClass("active");
$('.img-treasure.img-8').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 700) {
$('.img-treasure.img-700').addClass("active");
$('.img-treasure.img-70').addClass("active");
$('.img-treasure.img-7').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 600) {
$('.img-treasure.img-600').addClass("active");
$('.img-treasure.img-60').addClass("active");
$('.img-treasure.img-6').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 500) {
$('.img-treasure.img-500').addClass("active");
$('.img-treasure.img-50').addClass("active");
$('.img-treasure.img-5').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 400) {
$('.img-treasure.img-400').addClass("active");
$('.img-treasure.img-4').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 300) {
$('.img-treasure.img-300').addClass("active");
$('.img-treasure.img-30').addClass("active");
$('.img-treasure.img-3').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 200) {
$('.img-treasure.img-200').addClass("active");
$('.img-treasure.img-20').addClass("active");
$('.img-treasure.img-2').addClass("active");
hawkala = hawkala - 100;
}
if (hawkala >= 100) {
$('.img-treasure.img-100').addClass("active");
$('.img-treasure.img-10').addClass("active");
$('.img-treasure.img-1').addClass("active");
hawkala = hawkala - 100;
}
} else if (hawkala > 9) {
if (hawkala >= 90 && hawkala < 100) {
$('.img-treasure.img-90').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 80 && hawkala < 90) {
$('.img-treasure.img-80').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 70 && hawkala <= 80) {
$('.img-treasure.img-70').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 60 && hawkala < 70) {
$('.img-treasure.img-60').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 50 && hawkala < 60) {
$('.img-treasure.img-50').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 40 && hawkala < 50) {
$('.img-treasure.img-4').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 30 && hawkala < 40) {
$('.img-treasure.img-30').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 20 && hawkala < 30) {
$('.img-treasure.img-20').addClass("active");
hawkala = hawkala - 10;
}
if (hawkala >= 10 && hawkala < 20) {
$('.img-treasure.img-10').addClass("active");
hawkala = hawkala - 10;
}
} else {
switch (hawkala) {
case "10":
$('.img-treasure.img-10').addClass("active");
hawkala = -hawkala - 1;

case "9":
$('.img-treasure.img-9').addClass("active");
hawkala = -hawkala - 1;

case "8":
$('.img-treasure.img-8').addClass("active");
hawkala = -hawkala - 1;

case "7":
$('.img-treasure.img-7').addClass("active");
hawkala = -hawkala - 1;

case "6":
$('.img-treasure.img-6').addClass("active");
hawkala = -hawkala - 1;

case "5":
$('.img-treasure.img-5').addClass("active");
hawkala = -hawkala - 1;

case "4":
$('.img-treasure.img-4').addClass("active");
hawkala = -hawkala - 1;

case "3":
$('.img-treasure.img-3').addClass("active");
hawkala = -hawkala - 1;

case "2":
$('.img-treasure.img-2').addClass("active");
hawkala = -hawkala - 1;
case "1":
$('.img-treasure.img-1').addClass("active");
hawkala = -hawkala - 1;
default: break;
}
}

}

});