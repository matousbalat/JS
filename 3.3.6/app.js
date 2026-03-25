let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter++;
}

let i = 1;

while (i <= 10) {
    let message = i

     if (i === 7) {
        message ="Číslo 7 je moje fav číslo.";
    }

    console.log(message);
    i++;
}
    
for (let a = 0; a < 10; a++) {
    console.log(a);
}

for (let c = 0; c < 10; c++) {               
    if (c === 7) continue;
    console.log(c);
}