// stampare in console numeri da 1 a 100
const listtowrite = document.getElementById("list");

for (let i = 1; i < 100; i++) {

    if (i % 3 == 0)
        console.log(i)
    listtowrite.innerHTML += "Fizz";
    if (i % 5 == 0)
        console.log(i)
    listtowrite.innerHTML += "Buzz";
}

// poi stampa  i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// poi per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz