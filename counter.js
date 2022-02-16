const methods = document.querySelectorAll("input");
const container = document.querySelector(".main_ctn");
const body = document.querySelector(".body");
const add_counter = document.querySelector(".add_counter");
const ctn = document.querySelector(".container");

let id_rst=0, id_dc =0, id_ic =0, cm =0;
let id =0, acum =0; id_ctn = 0;

ctn.addEventListener("click", e =>{
    console.log(e.target);
        if(e.target  && e.target.className ==="input") validElement(e);
        if(e.target && e.target.className ==="add_counter") newCounter(e);
        if(e.target && e.target.className ==="dell_counter") dellCounter(e);
});

function validElement(e){
    e.stopPropagation();
    let result = "", comment = "";
    let element = e.target.id;
    result = document.getElementById(`1${element}`);
    comment = document.getElementById(`0${element}`);
     
        if(e.target.value ==="decrement"){
            acum = parseInt(result.innerHTML)-1;
            result.innerHTML = acum;
            comment.innerHTML = validCounter(acum);
        }

        if(e.target.value === "reset"){
            acum = 0; 
            result.innerHTML = acum; 
            comment.innerHTML = validCounter(acum);
        }

        if(e.target.value ==="increment"){
            acum = parseInt(result.innerHTML)+1;
            result.innerHTML = acum;
            comment.innerHTML = validCounter(acum);
        }
}
function validCounter(value){
   
    if(value < -11) return `Deberia estar muerto 💀`;
    if(value <=-6 && value <= 11 ) return `Me estoy congelando 🥶`;
    if(value > -6 && value < 11) return `demasiado frio 😬`;
    if(value >10 &&value <19)  return `Temperatura agradable 😊`;
    if(value >18 && value < 25)  return `Hace calor 😓`;
    if(value >24 && value < 30 ) return `Me estoy Azando 🥵`;
    if(value >29 ) return `Deberia estar muerto 💀`;
}

function newCounter(e){
    e.stopPropagation();
    console.log(e);
    let div_counter = document.createElement("DIV");
    div_counter.setAttribute("class","main_ctn");
    div_counter.setAttribute("id",`ctn${id_ctn+=1}`);
    let  new_ctn =""; 
    new_ctn = `     <h1 class="_result" id="1${id+=1}">0</h1>
                    <div class="_comment" id="0${cm+=1}"></div>
                    <div class = "_sub_ctn">
                        <input type="submit" value="decrement" class="input" id="${id_dc+=1}">
                        <input type="submit" value="reset" class="input" id="${id_rst+=1}">    
                        <input type="submit" value="increment" class="input" id="${id_ic+=1}">
                    </div>
                    <div class="counter">
                    <div class="add_counter">➕</div>  
                    <div class="dell_counter" id="${id_ctn}">🧺</div>
                    </div>
                `;
     div_counter.innerHTML += new_ctn;
     ctn.appendChild(div_counter);
}

function dellCounter(e){
    e.stopPropagation();
    let dell_ctn = document.getElementById(`ctn${e.target.id}`);
    dell_ctn.remove();
}






 










