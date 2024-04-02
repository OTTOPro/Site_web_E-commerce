
var glisser = new Array("images/orange_shoes.jpg", "images/blue_shoes.jpg", "images/red_shoes.jpg");
var image = 0;
function carousel(autre) {

    image = image + autre;
    if (image < 0)
        image = glisser.length - 1;
    if (image > glisser.length - 1)
        image = 0;
    document.getElementById("carouselJs1").src = glisser[image];
}
setInterval("carousel(1)", 2000);

function validateForm() {
  var mailForme = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (document.Fform.fname.value == "") {
      alert("il faut remplir la caisse prenom");
      return false;
    }
    
    if (document.Fform.lname.value == "") {
        alert("il faut remplir la caisse nom");
        return false;
      }
      if (document.Fform.numtel.value == "") {
        alert("il faut remplir la caisse numero de telephone");
        return false;
      }
      if (document.Fform.gmail.value == "") {
        alert("il faut remplir la caisse courriel du client ");
        return false;
      }
      if(!(document.Fform.gmail.value.match(mailForme))){
        alert("votre adresse email est invalide");
        return false;
      }
      if (document.Fform.commentaire.value == "") {
        alert("il faut remplir la caisse commentaire");
        return false;
      }
      if (document.Fform.commentaire.value == "") {
        alert("Name must be filled out");
        return false;
      }
      if (document.Fform.mdp.value == "") {
        alert("Name must be filled out");
        return false;
      }
      if (document.Fform.cmdp.value == "") {
        alert("Name must be filled out");
        return false;
      }
      
  }
  function validateForm1() {
    if (document.Fform.gmail.value == "") {
        alert("il faut remplir la caisse E-mail");
        return false;
      }
      if (document.Fform.mdp.value == "") {
        alert("il faut inserer le mot de passe");
        return false;
      }
    }
    function validateForm2() {
        // let x = document.forms["myForm"]["fname"].value;
         if (document.Fform.fname.value == "") {
           alert("il faut remplir la caisse prenom");
           return false;
         }
         
         if (document.Fform.lname.value == "") {
             alert("il faut remplir la caisse nom");
             return false;
           }
           if (document.Fform.numtel.value == "") {
             alert("il faut remplir la caisse numero de telephone");
             return false;
           }
           if (document.Fform.gmail.value == "") {
             alert("il faut remplir la caisse courriel du client ");
             return false;
           }
           if (document.Fform.mdp.value == "") {
            alert("il faut inserer le mot de passe");
            return false;
          }
          if (document.Fform.cmdp.value == "") {
            alert("il faut confirmer le mot de passe");
            return false;
          }
          if(document.Fform.mdp.value !=document.Fform.cmdp.value ){
            alert("le mot de passe et la confirmation du mot de passe doit avoir le meme contenu");
            return false;
          }
        }
        function changerCouleur() {
            var element1 = document.getElementById("table1");
            element1.style.backgroundColor='red';
            
            }
        function changerCouleur1() {
                var element2 = document.getElementById("table2");
                element2.style.backgroundColor='blue';
            }
        function normalCouleur() {
            var element1 = document.getElementById("table1");
            element1.style.backgroundColor='antiquewhite';
        }
        function normalCouleur1() {
                var element2 = document.getElementById("table2");
                element2.style.backgroundColor='antiquewhite';
            }
         window.onload = function () {
              alert("chargement de la page HTML");
            }
        function imgAlerte() {
          alert("on passe sur une image");
        }
        function btnAlerte() {
          alert("on clique sur un bouton");
        }
        /*
        var x=document.getElementById("bouton");
        x.addEventListener("mouseenter",changerCouleurEvent());   
        function changerCouleurEvent() {
          var element1 = document.getElementById("bouton");
          element1.style.backgroundColor='black';
          }
        */

        /*const variable = document.getElementsByClassName("bouton").item;
        variable.addEventListener('click', fonction);

        function fonction()  {
          this.style.background="black";
        }*/
        var variable = document.getElementsByClassName('bouton');

for(let i = 0; i < variable.length; i++) {
  variable[i].addEventListener("mouseover", fonction);
}
function fonction()  {
  this.style.background="black";
  this.style.color="white";
}
for(let i = 0; i < variable.length; i++) {
  variable[i].addEventListener("mouseleave", fonction1);
}
function fonction1()  {
  this.style.background="white";
  this.style.color="black";
}
        
