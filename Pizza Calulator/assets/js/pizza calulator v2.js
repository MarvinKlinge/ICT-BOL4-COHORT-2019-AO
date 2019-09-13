// Marvin Klinge - Pizza Calularor V2 (Clean version)

var pizzaKlein = prompt("Hoeveel pizza's wilt je?","Aantal"); //vraagt om het aantal kleine pizza's 
var pizzaMedium = prompt("Hoeveel pizza's wilt je?","Aantal"); //vraagt om het aantal medium pizza's
var pizzaGroot = prompt("Hoeveel pizza's wilt je?","Aantal"); //vraagt om het aantal grote pizza's

var prijsKlein = 9.95; //prijs kleine pizza's
var prijsMedium = 19.95; //prijs medium pizza's
var prijsGroot = 29.95; //prijs grote pizza's

document.write("Totaal Klein pizza's: €", pizzaKlein*prijsKlein,"<br/>"); //rekend de prijs voor de kleine pizza's uit
document.write ("Totaal Medium pizza's: €", pizzaMedium*prijsMedium,"<br/>"); //rekend de prijs voor de medium pizza's uit
document.write("Totaal Groot pizza's: €", pizzaGroot*prijsGroot,"<br/>"); //rekend de prijs voor de grote pizza's uit

var totaalKlein = pizzaKlein*prijsKlein; //berekent het aantal kleine pizza's met de aangegeven prijs
var totaalMedium = pizzaMedium*prijsMedium; //berekent het aantal meduim pizza's met de aangegeven prijs
var totaalGroot = pizzaGroot*prijsGroot; //berekent het aantal grote pizza's met de aangegeven prijs

document.write("Prijs: €",totaalKlein+totaalMedium+totaalGroot); //beschijft de berekening uit in texst