let loginPage=document.getElementById("loginPage");
let dashboardApp=document.getElementById("dashboardApp");

let inputUsername=document.getElementById("username");
let inputPassword=document.getElementById("password");
let inputCaptcha=document.getElementById("captchaAnswer");

let captchaQuestion=document.getElementById("captchaQuestion");
let btnRefreschCaptcha=document.getElementById("refreschCaptcha");
let btnLogin=document.getElementById("btnLogin");
let loginMessage=document.getElementById("loginMessage");
let btnLogout=document.getElementById("btnLogout");




let menu=document.getElementById("menu");
let cards=document.getElementById("cards");
let pageTitle=document.getElementById("pageTitle");

let utilizatorCorect='admin';
let parolaCorect='1234';

let numar1;
let numar2;
let rezultatCaptcha;

function genereazaCaptcha()
{
    numar1=Math.floor(Math.random()*10)+1;
    numar2=Math.floor(Math.random()*10)+1;
    rezultatCaptcha=numar1+numar2;
    captchaQuestion.innerText=numar1+'+'+numar2+" =?";
    inputCaptcha.value='';
}

function afiseazaMesajLoghin(text,tip)
{
    loginMessage.innerText=text;

    loginMessage.classList.remove('eroare');
    loginMessage.classList.remove('succes');
    loginMessage.classList.add(tip);
}

function eliminaErorile()
{
    inputUsername.classList.remove("input-eroare");
    inputPassword.classList.remove("input-eroare");
    inputCaptcha.classList.remove("input-eroare");
}
function valideazaAutentificare()
{
    eliminaErorile();
    let username=inputUsername.value;
    let password=inputPassword.value;
    let captcha=inputCaptcha.value;

    if(username==='')
    {
        inputUsername.classList.add('input-eroare');
        afiseazaMesajLoghin('Introduceti numele utilizatorui','eroare');
        return false;
    }
     if(password==='')
    {
        inputPassword.classList.add('input-eroare');
        afiseazaMesajLoghin('Introduceti parola de acces','eroare');
        return false;
    }
     if(captcha==='')
    {
        inputCaptcha.classList.add('input-eroare');
        afiseazaMesajLoghin('Introduceti rezulatul calcului','eroare');
        return false;
    }
    if(username!==utilizatorCorect)
    {
        inputUsername.classList.add('input-eroare');
        afiseazaMesajLoghin('Numele utilizatorui este incorect','eroare');
        return false;
    }
    if(password!==parolaCorect)
    {
        inputPassword.classList.add('input-eroare');
        afiseazaMesajLoghin('Parola este incorecta','eroare');
        return false;
    }
    if(Number(captcha)!==rezultatCaptcha)
    {
        inputCaptcha.classList.add('input-eroare');
        afiseazaMesajLoghin('Rezulatul captcha este incorect','eroare');
        genereazaCaptcha();
        return false;
    }
    return false;
}

function autenficare()
{
    if(!valideazaAutentificare()){return;}

    afiseazaMesajLoghin("Autentificare reusita","succes");
    dashboardApp.classList.remove('ascuns');
    creazaCard();
    afiseazaDashboard();

    
}
let menuItems=[
    "Dashboard",
    "Studenti",
    "Note",
    "Statistica"
];

function creeazaMeniu()
{
  let logo=document.createElement("div");
      logo.classList.add("logo");
      logo.innerText="SIES App";
      menu.appendChild(logo);

      for(let i=0; i<menuItems.length; i++)
      {
        let btn=document.createElement("button");
        btn.innerText=menuItems[i];
        btn.classList.add("menu-btn");

        if(i===0)
        {btn.classList.add("active");

        }

        btn.addEventListener("click",function(){
            schimbaPagina(menuItems[i]);
            seteazaActiv(btn);
        });

        menu.appendChild(btn);
      }
}

function seteazaActiv(butonCurent){
    let butoane=document.querySelectorAll(".menu-btn");

    for(let i=0; i<butoane.length; i++)
    {
        butoane[i].classList.remove("active");
    }
    butonCurent.classList.add("active");
}

function creazaCard(titlu, valoare, info, culoare)
{
    let card=document.createElement("div");
        card.classList.add("card");
        card.classList.add(culoare);

    let h3 = document.createElement("h3");
        h3.innerText=titlu;

    let pValoare=document.createElement("p");
        pValoare.classList.add("value");
        pValoare.innerText=valoare;

    let pInfo=document.createElement("p");
        pInfo.classList.add("info");
        pInfo.innerText=info;

    card.appendChild(h3);
    card.appendChild(pValoare);
    card.appendChild(pInfo);

    return card;

}

function afiseazaDashboard()
{
    pageTitle.innerText="Dashboard";
    cards.innerHTML="";

    cards.appendChild(creazaCard("Total studenti","128","Inregistrati in sistem","blue"));
    cards.appendChild(creazaCard("Promovati","96","Studenti cu nota >=5","green"));
    cards.appendChild(creazaCard("Restantieri","32","Studenti cu nota <5","red"));
}


function afiseazaStudenti()
{
    pageTitle.innerText="Studenti";
    cards.innerHTML='';

    cards.appendChild(creazaCard("Popescu Ion","LPS2325","Media: 8.75","green"));
    cards.appendChild(creazaCard("Mardari Eleonora","LPS2323","Media: 9.40","green"));
    cards.appendChild(creazaCard("Rusu Alexandru","LPS2325","Media: 4.80","red"));
}

function afiseazaNote()
{
    pageTitle.innerText="Note";
    cards.innerHTML='';

    cards.appendChild(creazaCard("Matematica","9","Student: Popescu Ion","green"));
    cards.appendChild(creazaCard("JavaScript","10","Student: Mardari eleonora","green"));
    cards.appendChild(creazaCard("Fizica","4","Student: Rusu Alexandru","red"));
}

function afiseazaStatistici()
{
    pageTitle.innerText="Statistici";
    cards.innerHTML='';

    cards.appendChild(creazaCard("Media generala","7.65","Determinata pe baza tuturor studentilor","blue"));
    cards.appendChild(creazaCard("Cea mai mare nota","10","la JavaScript","green"));
    cards.appendChild(creazaCard("Cea mai mica nota","4","la Fizica","red"));
    cards.appendChild(creazaCard("Studenti activi","444","Pe parcursul tuturor anilor","orange"));
}

function schimbaPagina(pagina)
{
    switch(pagina)
    {
    case "Dashboard":
        {
           afiseazaDashboard();
            break;
        }
    case "Studenti":
        {
            afiseazaStudenti();
            break;
        }
    case "Note":
        {
            afiseazaNote()
            break;
        }
    case "Statistica":
        {
            afiseazaStatistici();
            break;
        }  
    }
}

function deconectare()
{
    dashboardApp.classList.add('ascuns');
    loginPage.classList.remove('ascuns');

    inputUsername.value='';
    inputPassword.value='';
    inputCaptcha.value='';
    loginMessage.value='';

    eliminaErorile();
    genereazaCaptcha();
}

btnLogin.addEventListener("click",autenficare);
btnRefreschCaptcha.addEventListener('click',genereazaCaptcha);
btnLogout.addEventListener('click',deconectare);

genereazaCaptcha();
 