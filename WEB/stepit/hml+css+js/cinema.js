let rezervari = [];
let inputName = document.getElementById("nume");
let inputFilm = document.getElementById("film"); // Corectat din selectFilm
let inputLoc = document.getElementById("loc");
let btnRezervare = document.getElementById("rezerva");
let sala = document.getElementById("sala");
let mesaj = document.getElementById("mesaj");
let total = document.getElementById("total");
let ocupate = document.getElementById("ocupate");
let libere = document.getElementById("libere");

function afiseazaMesaj(text, tip) {
    mesaj.innerText = text;
    mesaj.className = tip; // Scurtătură pentru a reseta clasele
}

function esteOcupat(loc) {
    return rezervari.some(r => r.loc === loc);
}

function gasesteRezervare(loc) {
    return rezervari.find(r => r.loc === loc);
}

function valideazaRezervare(nume, film, loc) {
    let valid = true;
    inputName.classList.remove("input-eroare");
    inputFilm.classList.remove("input-eroare");
    inputLoc.classList.remove("input-eroare");

    if (nume === "") {
        inputName.classList.add('input-eroare');
        afiseazaMesaj("Nu este indicat numele", "eroare");
        valid = false;
    } else if (film === '') {
        inputFilm.classList.add('input-eroare');
        afiseazaMesaj("Nu este indicat filmul", "eroare");
        valid = false;
    } else if (loc < 1 || loc > 20) {
        inputLoc.classList.add('input-eroare');
        afiseazaMesaj("Nu există acest loc", "eroare");
        valid = false;
    } else if (esteOcupat(loc)) {
        inputLoc.classList.add('input-eroare');
        afiseazaMesaj("Acest loc este deja ocupat", "eroare");
        valid = false;
    }
    return valid;
}

function adaugaRezervare() {
    let nume = inputName.value.trim();
    let film = inputFilm.value;
    let loc = Number(inputLoc.value);

    if (!valideazaRezervare(nume, film, loc)) return;

    rezervari.push({ numeClient: nume, film: film, loc: loc });
    afiseazaLocuri();
    actualizeazaStatistica();
    afiseazaMesaj("Rezervare efectuată", "succes");
    inputName.value = '';
    inputLoc.value = '';
}

function anuleazaRezervare(loc) {
    rezervari = rezervari.filter(r => r.loc !== loc);
    afiseazaLocuri();
    actualizeazaStatistica();
    afiseazaMesaj("Rezervare anulată", "succes");
}

function afiseazaLocuri() {
    sala.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
        let btnLoc = document.createElement("button");
        btnLoc.innerText = i;
        btnLoc.classList.add("loc");

        if (esteOcupat(i)) {
            btnLoc.classList.add("ocupat");
        } else {
            btnLoc.classList.add("liber");
        }

        btnLoc.addEventListener("click", function() {
            if (esteOcupat(i)) {
                let r = gasesteRezervare(i);
                if (confirm('Loc ocupat! Client: ' + r.numeClient + '. Anulezi?')) {
                    anuleazaRezervare(i);
                }
            } else {
                inputLoc.value = i;
            }
        });
        sala.appendChild(btnLoc);
    }
}

function actualizeazaStatistica() {
    let nrocupate = rezervari.length;
    let nrlibere = 20 - nrocupate;
    total.innerText = 'Total locuri: 20';
    ocupate.innerText = 'Locuri ocupate: ' + nrocupate;
    libere.innerText = "Locuri libere: " + nrlibere;
}

btnRezervare.addEventListener("click", adaugaRezervare);
afiseazaLocuri();
actualizeazaStatistica();
