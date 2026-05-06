function jeSude(cislo) {
  if (cislo % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// testy
console.log(jeSude(20)); // true
console.log(jeSude(7));  // false