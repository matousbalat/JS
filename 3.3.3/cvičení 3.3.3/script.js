let totalPrice = 300;
console.log("Cena zboží v košíku: " + totalPrice + " Kč.");

if (totalPrice > 100) {
    console.log("Cena je větší než 100 Kč.")
    let cenaPoSlevě = (totalPrice / 100 * 70);
    console.log("Cena po slevě je: " + cenaPoSlevě + " Kč.");
} else if (totalPrice < 100) {
    console.log("Cena je menší než 100 Kč.")
    let kolikchybí = totalPrice - (100 - totalPrice);
    console.log("Chybí vám " + kolikchybí + " Kč do slevy.")
}
