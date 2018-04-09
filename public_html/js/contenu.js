/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// creation d'une DIV contenant le input et le bouton ainsi que le texte du cour
var div1=document.createElement("div");
    div1.setAttribute("id", "div1");
    div1.setAttribute("title", "Ma Div 1");
    
var zoneSaisie=document.createElement("input");
    zoneSaisie.setAttribute("id", "entrer");
    zoneSaisie.setAttribute("placeHolder", "Entrer le produit");
    
var titre=document.createElement("h1");
    titre.setAttribute("id", "titre-exo");
    titre.innerHTML+="exercice 1";
    
var boutton=document.createElement("input");
    boutton.setAttribute("type", "submit");
    boutton.setAttribute("value", "Envoyer");
    boutton.setAttribute("onclick", "addToBasket()");

    
var paragraphe=document.createElement("p");
    paragraphe.setAttribute("id", "paraph");



    
var monBody = document.querySelector("body");

monBody.appendChild(div1);


div1.appendChild(titre);
div1.appendChild(paragraphe);
paragraphe.innerHTML+="type de l'exercice";
div1.appendChild(zoneSaisie);
div1.appendChild(boutton);


//console.log(div1);

