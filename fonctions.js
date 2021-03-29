// Fonctions simples :
👉 SELECTIONNER UN ELEMENT
// var langage = "JavaScript";
// console.log(langage[0] + langage[4]);
-----------------------------------
👉 COUPER UNE CHAINE DE CARACTERE
  // var dessert = "corbeille de fruits frais";
  // console.log(dessert.slice(13, 19));
  ----------------------------------
  👉 METTRE EN MAJUSCULE OU MINUSCULE
    // var name = "John Doe";
  // console.log(name.toUpperCase());
  // console.log(name.toLowerCase());
  ------------------------------------
  👉 QUELQUE SOIT LA LONGUEUR
  // var contact = ["Vanessa", "Hugo", "Michael"];
  // console.log(contact.length);
  // console.log(contact[contact.length - 1]);
  ------------------------------------
  👉 PUSH UN OBJET DANS UN TABLEAU ET AVOIR UN DETAIL DU TABLEAU
  // var contact2 = [
  //   {
  //     prenom: "Vanessa",
  //     phone: "0612345678",
  //     email: "vanessa@gmail.com",
  //   },
  // ];

  // contact2.push({ nom: "Anna", phone: "0123456789", email: "anna@gmail.com" });
  // console.log(JSON.stringify(contact2));
  --------------------------------------
  👉 BOUCLE FOR ET VARIANTE FOR OF
  // var students = ['Antoine Gobert', 'Joe David', 'Jacky Miel', 'Asterix Gravier', 'John Doe']

  // for ( var i = 0; i < students.length; i++){
  //     students[i] ='disparu'
  // }

  // console.log(students);

  // for ( var i = 0; i <students.length; i++){
  //     students[i] = students[i][0] + '...'
  // }

  // console.log(students);

  // var newTab = []
  // for ( var element of students){
  //     console.log(element);
  //     newTab.push(`${element[0]}...`)
  // }
  //     console.log(newTab);
  ---------------------------------------
  👉 MODIFIER UN ELEMENT DU TABLEAU ET EN FAIRE UN NOUVEAU TABLEAU
    // var contacts = ["john", "vanessa", "FRANCK", "aNTOINE"];

    // var newTab = []
    // for (var i = 0 ; i < contacts.length ; i++){
    //     newTab.push(contacts[i][0].toUpperCase() + contacts[i].toLowerCase().slice(1));
    // }
    // console.log(contacts);
    // console.log(newTab);

    // var newTab = []
    // for (var element of contacts){

    //     newTab.push(element[0].toUpperCase() + element.toLowerCase().slice(1));
    // }
    // console.log(newTab);
    ---------------------------------------
    👉 COMPTAGE DE MOTS DANS UNE CHAINE DE CARACTERE SELON LA LONGUEUR
        // var myText = "Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien";

    // var myTextSplit = myText.split(' ');

    // console.log(myTextSplit);

    // var countWord = myTextSplit.length;

    // console.log(countWord);

    // var countWordFiltered = [];

    // for ( var i=0 ; i < myTextSplit.length ; i++){
    //     if(myTextSplit[i].length>2){
    //         countWordFiltered.push(myTextSplit[i])
    //     }
    // }
    // console.log(countWordFiltered);
    // console.log(countWordFiltered.length);
    -----------------------------------------
    👉 CONDITIONS IF ELSE
      // var contacts = [
      //   {
      //     prenom: "john",
      //     telephone: "0611223344",
      //   },
      //   {
      //     prenom: "elise",
      //     telephone: "0655667799",
      //   },
      //   {
      //     prenom: "franck",
      //     telephone: "0612345678",
      //   },
      //   {
      //     prenom: "elisa",
      //     telephone: "0612345678",
      //   },
      // ];
      // var tab = [];

      // for (var i = 0; i < contacts.length; i++) {
      //   console.log(contacts[i]);
      //   tab.push({
      //     prenom: contacts[i].prenom,
      //     telephone: "+33" + contacts[i].telephone.slice(1),
      //   });
      // }

      // console.log(tab);
      // var result = [];

      // for (var i = 0; i < tab.length; i++) {
      //   if (tab[i].prenom === "john") {
      //     result.push({
      //       prenom: tab[i].prenom,
      //       telephone: tab[i].telephone,
      //       admin: true,
      //     });
      //   } else {
      //     result.push({
      //       prenom: tab[i].prenom,
      //       telephone: tab[i].telephone,
      //       admin: false,
      //     });
      //   }
      // }
-----------------------------------------------------
👉 FUNCTION
// function conversion(degCel) {
//    var Fahrenheit = degCel * (9 / 5) + 32;
//    if (typeof degCel === "number"){
//     return Fahrenheit;
//    }else{
//        return "Données en entrée non correctes."
//    }
// }
// console.log(conversion(30));
// console.log(conversion("trois"));
------------------------------------------------
👉 FUNCTION RETOURNE UNE PHRASE
// function retourneLaPhrase (texte){
//     var result = texte.split("").reverse().join("");
//     return result
// }
// console.log(retourneLaPhrase("bonjour a tous"));
----------------------------------------------
👉 FUNCTION COMPARAISON
// function finSimilaire (mot,lettres){
//   if (mot.slice(2) === lettres){
//     return finSimilaire = "La fin est similaire"
//   }else{
//     return finSimilaire = "La fin ne correspond pas"
//   }
// }

// console.log(finSimilaire ('hello','llo'));
-----------------------------------------------
👉 FUNCTION VALEUR MAX DANS UN TABLEAU CONTENANT PLUSIEURS TABLEAUX
// function plusGrandNb(arr) {
//   let tabMax = [];
//   for (tab of arr) {
//     tabMax.push(Math.max(...tab));
//   }
//   return tabMax;
// }

// console.log(
//   plusGrandNb([
//     [1, 5, 8, 3],
//     [15, 47, 88, 26],
//     [32, 35, 37, 39],
//     [3000, 1001, 857, 1],
//   ])
// );
------------------------------------------------
👉 PALINDROME = MOT QUON PEUT LIRE DE GAUCHE A DROITE ET DE DROITE A GAUCHE
// var tableau = [
//   "bonjour",
//   "kayak",
//   "salut",
//   "ressasser",
//   "toto",
//   "javascript",
//   "été",
//   "algo",
// ];

// var result = [];

// for (var i = 0; i < tableau.length; i++) {

//   if (tableau[i] === tableau[i].split("").reverse().join("")) {
//     result.push(tableau[i]);
//     console.log(result)
//   }
// }

// console.log(result);