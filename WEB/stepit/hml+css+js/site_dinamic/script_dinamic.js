let contentArea=document.getElementById("contentArea");

let btnMesaj=document.getElementById("btnMesaj");
let btnDate=document.getElementById("btnDate");
let btnMasa=document.getElementById("btnMasa");

function showForm(type){
let html="";

switch(type)
{
   case "mesaje":{
    html=
    `
            <h2>MESAJE</h2>

            <div class="mesaj-card">
              <p><b>05.06.2026</b> - Avem intilnire in Teams.</p>
            </div>

            <div class="mesaj-card">
              <p><b>06.06.2026</b> - Nu uita sa faci tema pe acasa.</p>
            </div>

            <div class="mesaj-card">
              <p><b>075.06.2026</b> - Astazi verificam cunostintele acumulate la JS.</p>
            </div>
    `;
    break; 
   }//end case


   case "date":
    {
      html=
     `
        <h2>Date personale</h2> 

        <div class="form-group">
         <label>Nume:</label>
         <input type="text" id="nume" placeholder="Ex: Popescu Ion">   
        </div>

        <div class="form-group">
         <label>Data nasterii:</label>
         <input type="date" id="dataNasterii">   
        </div>


        <div class="form-group">
         <label>Gen:</label>
         <select id="gen">
            <option value="">Alege genul</option>
            <option value="Masculin">Masculin</option>
            <option value="Feminin">Feminin</option>
         </select>
        </div>

        <button class="btn-green" id="salveazaDate">Salveaza </button>
        <p id="rezultatDate"></p>

      `;
      break;
    }//end case


   case "masa":
    {
      html=
      `
       <h2>Adauga masa</h2> 

        <div class="form-group">
         <label>Denumire aliment:</label>
         <input type="text" id="aliment" placeholder="Ex: Orez fiert">   
        </div>

        <div class="form-group">
         <label>Calorii:</label>
         <input type="number" id="calorii" placeholder="Ex: 250">   
        </div>


        <div class="form-group">
         <label>Tip masa:</label>
         <select id="tipMasa">
            <option value="">Alege tipul mesei</option>
            <option value="Mic dejun">Mic dejun</option>
            <option value="Pranz">Pranz</option>
            <option value="Cina">Cina</option>
         </select>
        </div>

        <button class="btn-green" id="salveazaMasa">Salveaza masa</button>
        <p id="rezultatMasa"></p>
      `;
      break;
    }//end case

    default:{html="<p>Optiune necunoscuta</p>"}

}//switch

  contentArea.innerHTML=html;

  if(type==="date"){
    activeazaFormDate();
  }

  if(type==="masa"){
    activeazaFormMasa();
  }


}//function


function activeazaFormDate(){
let btn=document.getElementById("salveazaDate");

btn.addEventListener("click", function(){
    let nume=document.getElementById("nume");
    let data=document.getElementById("dataNasterii"); 
    let gen=document.getElementById("gen"); 
    let rezultat=document.getElementById("rezultatDate"); 

    nume.classList.remove("input-eroare");
    data.classList.remove("input-eroare");
    gen.classList.remove("input-eroare");

    rezultat.classList.remove("eroare");
    rezultat.classList.remove("succes");

    if(nume.value===""){
         nume.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Introduceti numele";
    }
    else if(data.value===""){
         data.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Introduceti data nasterii.";
    }
    else if(gen.value===""){
         gen.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Introduceti genul";
    }
    else{
         rezultat.classList.add("succes");
         rezultat.innerText="Datele inregistrate cu succes";
         nume.value="";
         data.value="";
         gen.value="";
    }

});

}


function activeazaFormMasa(){
let btn=document.getElementById("salveazaMasa");

btn.addEventListener("click", function(){
    let aliment=document.getElementById("aliment");
    let calorii=document.getElementById("calorii"); 
    let tipMasa=document.getElementById("tipMasa"); 
    let rezultat=document.getElementById("rezultatMasa"); 

    aliment.classList.remove("input-eroare");
    calorii.classList.remove("input-eroare");
    tipMasa.classList.remove("input-eroare");

    rezultat.classList.remove("eroare");
    rezultat.classList.remove("succes");

    if(aliment.value===""){
         aliment.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Introduceti denumirea alimentului.";
    }
    else if(calorii.value==="" || Number(calorii.value)<=0){
         calorii.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Introduceti un numar valid de calorii.";
    }
    else if(tipMasa.value===""){
         tipMasa.classList.add("input-eroare");
         rezultat.classList.add("eroare");
         rezultat.innerText="Alegeti tipul mesei";
    }
    else{
         rezultat.classList.add("succes");
         rezultat.innerText="Masa a fost salvata cu succes";
         aliment.value="";
         calorii.value="";
         tipMasa.value="";
    }

});
}

btnMesaj.addEventListener("click", function(){showForm("mesaje")});
btnDate.addEventListener("click", ()=>{showForm("date")});
btnMasa.addEventListener("click", function(){showForm("masa")});
