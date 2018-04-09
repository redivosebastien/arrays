/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 var monBody = document.querySelector("body");
  var div2 = document.createElement("div");
      div2.setAttribute("id", "test");
      monBody.appendChild(div2);
 
function addToBasket(){
  
  var divAjout= document.createElement("div");
    divAjout.setAttribute("id", "divAjout");
    divAjout.setAttribute("class", "liste");
    div2.appendChild(divAjout);
    
    var recup = [];
    recup.push(document.getElementById("entrer").value);
    
    divAjout.innerHTML+= recup;
    console.log(divAjout);
};

function majVue(){
  
};
majVue();