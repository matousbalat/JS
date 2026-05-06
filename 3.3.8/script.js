function dejMi3() {
    return 3;
}

console.log(dejMi3());

 //funkce s logem 
function nasobic(a,b) {
    console.log(a * b);
}

let r = nasobic(5, 6);
console.log(r);

//funkce s returnem

function nasobic2(a,b) {
    return (a * b);
}

let r2 = nasobic2(5, 6);
console.log(r2 + 1);

//return  ukončí funkci

function konec() {
    console.log("A");
    return "Hotovo";
    console.log("B"); //toto neprojde
}

let konec2 = konec();
console.log(konec());