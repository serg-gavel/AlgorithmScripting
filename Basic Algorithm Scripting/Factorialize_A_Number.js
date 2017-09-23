function factorialize(n) {
    if (n){
        return n * factorialize(n - 1);
    }else{
        return 1;
    }
}

// another way

function factorialize(n) {
  return n ? n * factorialize(n - 1) : 1;
}

factorialize(5);
factorialize(5); //should return a number.
factorialize(5); //should return 120.
factorialize(10); //should return 3628800.
factorialize(20); //should return 2432902008176640000.
factorialize(0); //should return 1.