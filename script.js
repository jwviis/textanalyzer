function imie() {
    let imieZm = document.getElementById("im").value;
    alert(imieZm);
}
function nazwisko() {
    let nazwiskoZm = document.getElementById("na").value;
    console.log(nazwiskoZm);
}
function dodaj() {
    let losNum = document.getElementById("num").value;
    const wynik = document.getElementById("wynik");
    let numDzien = 6;
    if (losNum >= 100 && losNum <= 200) {
        dodanie = parseInt(numDzien) + parseInt(losNum);
        wynik.innerHTML = dodanie;
    }else{
        wynik.innerHTML = "Liczba nie jest w przedziale od 100 do 200!";
    }
    // dodanie = parseInt(numDzien) + parseInt(losNum);
    // wynik.innerHTML = dodanie;
}
function noweWart() {
    imieZm = prompt("Wpisz nowe imie:");
    nazwiskoZm = prompt("Wpisz nowe nazwisko:");
    numDzien = prompt("Wpisz nowy numer w dzienniku:");

    console.log("Imie: " + imieZm);
    console.log("Nazwisko: " + nazwiskoZm);
    console.log("Num. w dzienniku: " + numDzien);
}
function oblicz() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const dzialanie = document.getElementById("dzialanie").value;
    const wynikDod = document.getElementById("wynikDod");

    // if (dzialanie == "+") {
    //     wynikDod.innerHTML = parseInt(num1) + parseInt(num2);
    // } else if (dzialanie == "-") {
    //     wynikDod.innerHTML = parseInt(num1) - parseInt(num2);
    // } else if (dzialanie == "*") {
    //     wynikDod.innerHTML = parseInt(num1) * parseInt(num2);
    // } else if (dzialanie == "/") {
    //     wynikDod.innerHTML = parseInt(num1) / parseInt(num2);
    // } else if (dzialanie == "%") {
    //     wynikDod.innerHTML = parseInt(num1) % parseInt(num2);
    // }
    switch(dzialanie){
        case "+":
            wynikDod.innerHTML = parseInt(num1) + parseInt(num2);
            break;
        case "-":
            wynikDod.innerHTML = parseInt(num1) - parseInt(num2);
            break;
        case "*":
            wynikDod.innerHTML = parseInt(num1) * parseInt(num2);
            break;
        case "/":
            wynikDod.innerHTML = parseInt(num1) / parseInt(num2);
            break;
        case "%":
            wynikDod.innerHTML = parseInt(num1) % parseInt(num2);
            break;
        // default:
        //     wynikDod.innerHTML = "error!";
    }
}