// stampare in console numeri da 1 a 100
const listtowrite = document.getElementById("list");


for (let i = 1; i < 100; i++) {
    const listitem = document.createElement("li");

    if (i % 3 == 0) { //poi stampa  i multipli di 3 stampi in console "Fizz
        console.log(i);
        listitem.innerHTML = "Fizz";
        listitem.classList.add("red");
        listtowrite.append(listitem);
    }
    else if (i % 5 == 0) { // " al posto del numero e per i multipli di 5 stampi "Buzz".
        console.log(i)
        listitem.innerHTML = "Buzz" + i;

        listitem.classList.add("blu");
        listtowrite.append(listitem);

    }

    else if (i % 5 % 3 == 0) { // poi per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz
        console.log(i)
        listitem.innerHTML = "fizz99uzz";

        listitem.classList.add("green");
        listtowrite.append(listitem);


    }
    else {
        listitem.innerHTML += i;
        listitem.classList.add("grey");
        listtowrite.append(listitem);

    }

}

