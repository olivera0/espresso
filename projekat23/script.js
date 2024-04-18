let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex >= slides.length) {slideIndex = 0}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let ime= prompt("Unesite Vase ime da bi se ulogovali:");
function login(){
  
  if(ime ==""|| ime==null){
    alert("Niste se ulogovali!")
  }else{
  alert("Dobar dan "+ime )}
}
login(ime);



function ispis(x){
let naslovi = ["Iron Flame", "Covek po imenu Uve", "All of us Villan", "Then she was gone","The Vampire Lestat","Holly"];
let opisi = [
"Ova knjiga nije široko poznata, pa nemam konkretne informacije o njoj. Potrebno je više informacija o autoru ili sadržaju kako bih mogao dati detaljniji pregled.",
"Roman švedskog autora Fredrika Backmana, prati priču o Oveu, starijem muškarcu koji živi po strogoj rutini i čvrstim uvjerenjima, ali koji se mijenja kroz neobična susretanja s novim susjedima.",
"Roman američke spisateljice Bryn Greenwood, istražuje kompleksne odnose i moralne dileme kroz priču o Kelliju, djevojčici koja odrasta u teškim okolnostima, i njenom odnosu s muškarcem znatno starijim od nje.",
"Triler britanske spisateljice Lisa Jewell, prati priču o majci koja traži istinu o nestanku svoje kćeri deset godina kasnije, kada se čini da su se pronašli tragovi koji otkrivaju šokantne tajne.",
"Roman američkog autora Anne Ricea, drugi je dio serijala Kronike Vampira. Fokusira se na priču o Lestatu de Lioncourt-u, vampiru iz 18. stoljeća, koji postaje centralna figura u vampirskom svijetu.",
"Holly je kriminalistički roman američkog autora Stivena Kinga, objavljen 2023. godine. Radnja se odvija u fiktivnom gradu Swope, Mejn, i prati privatnog detektiva Hodža koji je unajmljen da istraži nestanak mlade devojčice po imenu Holiv Gibni. Dok Hodž istražuje ovaj slučaj, dublje se zaranja u mračne tajne i zlokobne zavere koje vrebaju ispod površine navodno mirnog grada."];
let cene=[2400,1300,2125,1800,1680,1450];
  
alert(`<h1>${naslovi[x]}</h1>
    <p>Opis knjige: ${opisi[x]}</p>
    <h3>Cena: ${cene[x]} dinara</h3> `)
}