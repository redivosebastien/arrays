/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var monBody = document.querySelector("body");
var div2 = document.createElement("div");
div2.setAttribute("id", "test");
monBody.appendChild(div2);
var listeUl = document.createElement("ul");
div2.appendChild(listeUl);
var panier = [];
var quantite = [];


// creation de la function pannier qui permet de traiter l'ajout du produit
function addToBasket() {
    var content = document.getElementById("entrer").value;// insertion du nom de produit

    // verification si le produit exite ou non dans le pannier en appelant la function isAlreadyIn 
    // on lui attribut 3 parametre taille du panier le conteu du panier et l'element entré par l'utilisateur
    if (!isAlreadyIn(panier.length, panier, content)) {
        panier.push(content); // ajout du produit si il n'est pas présent dans le panier
        majVue(); // mise à jours de la vue à chaque ajout de produit


    } else {

        console.log("c'est un doublon");

    }

}

// creation d'une function qui pêrmet de verifier l'existance d'un doublon dans le pannier
function isAlreadyIn(taille, produits, entrer) {
    // creation d'une boucle for qui parcour la taille du tableau contenant les produits dans le panier
    for (var i = 0; i <= taille; i++) {
        // creation d'une condition qui veriffie en comparant les valeur entrer par l'utilisateur et le produits présent dans le tableau
        if (entrer === produits[i]) {
            return true;
        }
    }

}


// creation d'une function updateQuantity qui permet de verifier et de modifier la quantité du produit deans le panier
function updateQuantity(index) {
    var quanti = document.getElementById("quant-" + index);
    quanti.innerHTML = quantite[index];


}

//creation d'une function qui ajoute une nouvelle quantitée du produit concerné
function add(index) {
    //incrementation on ajoute 1 à chaque fois que l'on utilise la function
    quantite[index]++;
    updateQuantity(index); // appelle de la fonction updatequantity qui met à jour la quantité du produit dans le panier

}

// function qui supprime une quantité ou/et un produit
function remove(index) {

    // condition qui dit que si quantité de produit est à zero alors on le supprime
    if (quantite[index] <= 1) {
        document.getElementById("item-" + index).remove();
        panier.splice(index, 1);// supprime le produit 

    } else { // sinon on décremente 1 de la quantité produit

        quantite[index]--;  // decrementation de la quantite
        updateQuantity(index); // appelle de la function qui met à jours la quantitée
    }
}

// function qui permet de creer des boutons dans le DOM
function addControllers(index) {

    return "<input type=submit value= -  onclick=remove(" + index + ")>   <input type=submit value= + onclick=add(" + index + ")>";

}


function majVue() {

    listeUl.innerHTML = "";
    //creation d'une boucle qui permet de parcourir les produits dans le pannier dans le tableau 'panier'
    for (var k = 0; k < panier.length; k++) {
        // condition qui permet de verifier si un produit est absent alors on lui attribut automatiquement une quantité à 1
        if (quantite[k] === undefined || quantite[k] <= 1) {
            quantite[k] = 1;
        }
        // creation d'une liste de type 'li' qui creera une ligne pour le produit
        var listeLi = document.createElement("li");
        listeLi.setAttribute("id", "item-" + k);
        listeLi.innerHTML += addControllers(k);
        listeLi.innerHTML += " -----> ";
        listeLi.innerHTML += panier[k];
        
        var nbre = document.createElement("span");
        nbre.setAttribute("id", "quant-" + k);
        nbre.innerHTML = " " + quantite[k];
 
        listeUl.appendChild(listeLi);
        listeLi.appendChild(nbre);
        updateQuantity(k);
    }
    

}