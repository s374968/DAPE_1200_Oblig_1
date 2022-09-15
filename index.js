//////////////////////////////////////////////////////////////////////
/////////////////////////index.js/////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Bytter til index.html når Bilde klikkes på
const Image = document.getElementById("restaurantBilde");

Image.addEventListener("click", function(event){
    window.location.href = "./index.html";
})

//Bytter til index.html når "HOME" klikkes på
const Home = document.getElementById("home");

Home.addEventListener("click", function(event){
    window.location.href = "./index.html";
})

//Bytter til meny.html når "MENY" klikkes på
const Meny = document.getElementById("meny");

Meny.addEventListener("click", function(event){
    window.location.href = "./meny.html";
})

//Bytter til meny.html når KlikkOgHent boksen klikkes på
const KandH = document.getElementById("klikkOgHentBox");

KandH.addEventListener("click", function(event){
    window.location.href = "./meny.html";
})

//Setter variablen dato og henter dagens dato
var dato = new Date()

//Omformer dagens dato til navn på dagen med lokal string (norsk) og spesifiserer at hele navnet skal vises
var dagenidag = dato.toLocaleString("nb-no", { weekday: "long" })

//Definerer variabler for DOM elementer i KlikkOgHentBoksen
var klikkoghenttekst = document.getElementById("dagenidag");

const dagenÅpent = document.getElementById("dagenåpent");

const klokkeslett = document.getElementById("klokkeslett");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Array med mulige navn på dager og matcher dagens dato mot index av array og endrer DOM element til verdi av denne index//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var dager = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag', 'søndag']

const dagenFraArray = dager.indexOf(dagenidag);

dagenÅpent.innerHTML = "Åpningstider " + dager[dagenFraArray] + ":";

if(dagenFraArray == 5 || dagenFraArray == 6){
    klokkeslett.innerHTML = "10:00 - 16:00";
}
else if(dagenFraArray == 1 || dagenFraArray == 2 || dagenFraArray == 3 || dagenFraArray == 4){
    klokkeslett.innerHTML = "10:00 - 19:00";
}
else{
    document.getElementById("klokkeslett").style.color = '#d00'
    klikkoghenttekst.innerHTML = "-";
    klikkoghenttekst.style.color = '#d00';
    klokkeslett.innerHTML = "STENGT";
}