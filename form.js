    
function validation(){
    
    let titre=document.getElementById("titre").value;
    let auteur=document.getElementById("auteur").value;
    let prix=document.getElementById("prix").value;
    let langue=document.getElementById("langue").value;
    let date=document.getElementById("date").value;
    let type=document.getElementsByName("radio").value;
    
    function stringContainsNumber(auteur) {
      return /\d/.test(auteur);
    }
    
    console.log(stringContainsNumber(auteur)? document.getElementById("labelauteur2").innerHTML="un nom d'auteur ne dois pas contenir des chiffres":"champ validé");
    

    if ( type==null ){
      document.getElementById("typelabel").innerHTML="selectionez un type (*champ obligatoire)";
    }else{
      document.getElementById("typelabel").innerHTML="validé";
    }

    if(titre.length>3){
       document.getElementById("labeltitre").innerHTML="entrez un titre de 30 caractère maximum";
    }else{
      document.getElementById("labeltitre").innerHTML="champ validé"
    }
    if(auteur.length>30){
        document.getElementById("labelauteur").innerHTML="entrez un text de 30 caractère maximum";
     }else{
        document.getElementById("labelauteur").innerHTML="champ validé";
     }
     if(prix<0){
      document.getElementById("labelprix").innerHTML="entrez un prix réel";
    }else{
      document.getElementById("labelprix").innerHTML="champ validé";
    }
    if(langue=="SELECTIONEZ UNE LANGUE"){
      document.getElementById("labelangue").innerHTML="S'il vous plait selectionez une langue (*champ obligatoire)";
    }
    else{
      document.getElementById("labelangue").innerHTML="champ validé";
    }
    if(date==""){
      document.getElementById("labeldate").innerHTML="(*champ obligatoire)";
    }else{
      document.getElementById("labeldate").innerHTML="champ validé";
    }
    if(titre==""){
      document.getElementById("labeltitre").innerHTML="(*champ obligatoire)";
    }else{
      document.getElementById("labeltitre").innerHTML="champ validé";
    }
    if(auteur==""){
      document.getElementById("labelauteur").innerHTML="(*champ obligatoire)";
    }else{
      document.getElementById("labelauteur").innerHTML="champ validé";
    }
    if(prix==""){
      document.getElementById("labelprix").innerHTML="(*champ obligatoire)";
    }else{
      document.getElementById("labelprix").innerHTML="champ validé";
    }
    // if(date==x){
    //   document.getElementById("labeldate").innerHTML="(*champ obligatoire)";
    // }
    // if(prix==""){
    //   document.getElementById("labelprix").innerHTML="(*champ obligatoire)";
    // }
    

     

}