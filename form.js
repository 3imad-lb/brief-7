    
    var titre=document.getElementById("titre");
    var auteur=document.getElementById("auteur");
    var prix=document.getElementById("prix").value;
    var langue=document.getElementById("langue");
    var date=document.getElementById("date");
    var type=document.getElementsByName("type");
    var table = document.getElementById("table");


function validation(){
    
    let titre=document.getElementById("titre").value; 
    let auteur=document.getElementById("auteur").value;
    let prix=document.getElementById("prix").value;
    let langue=document.getElementById("langue").value;
    let date=document.getElementById("date").value;
    let type=document.getElementsByName("type");
    let label=document.getElementsByClassName("valid");
    var validation=0;
    var table = document.getElementsByTagName("table")[0];
    
    


    
    
    function stringContainsNumber(auteur) {
      return /\d/.test(auteur);
    }
    
    console.log(stringContainsNumber(auteur)? document.getElementById("labelauteur2").innerHTML="un nom d'auteur ne dois pas contenir des chiffres":"champ validé");
    

    if (type[0].checked || type[1].checked || type[2].checked || type[3].checked){
      document.getElementById("typelabel").innerHTML="champ validé";
      document.getElementById("typelabel").style.color = "rgb(23, 214, 39)";
      validation++;
    }else{
      document.getElementById("typelabel").innerHTML="selectionez un type (*champ obligatoire)";
      document.getElementById("typelabel").style.color = "red";
    }

    if(titre.length>0 && titre.length<=30){
      document.getElementById("labeltitre").innerHTML="champ validé";
      document.getElementById("labeltitre").style.color = "rgb(23, 214, 39)";
      validation++;
    }else if(titre.length>30){
      document.getElementById("labeltitre").innerHTML="entrez un titre de 30 caractère maximum";
      document.getElementById("labeltitre").style.color = "red";
    }else{
      document.getElementById("labeltitre").innerHTML="(*champ obligatoire)";
      document.getElementById("labeltitre").style.color = "red";
    }
    

    if(auteur.length<=30 && auteur.length>0){
      document.getElementById("labelauteur").innerHTML="champ validé";
      document.getElementById("labelauteur").style.color = "rgb(23, 214, 39)";
      validation++;
    }
    else if(auteur.length>30){
        document.getElementById("labelauteur").innerHTML="entrez un text de 30 caractère maximum";
        document.getElementById("labelauteur").style.color = "red";
     }else{
      document.getElementById("labelauteur").innerHTML="(*champ obligatoire)";
      document.getElementById("labelauteur").style.color = "red";
    }
     

    if(prix>0){
      document.getElementById("labelprix").innerHTML="champ validé";
      document.getElementById("labelprix").style.color = "rgb(23, 214, 39)";
      validation++;
    }else if(prix<0){
      document.getElementById("labelprix").innerHTML="entrez un prix réel";
      document.getElementById("labelprix").style.color = "red";
    }else{
      document.getElementById("labelprix").innerHTML="(*champ obligatoire)";
      document.getElementById("labelprix").style.color = "red";
    }
     

    if(langue=="SELECTIONEZ UNE LANGUE"){
      document.getElementById("labelangue").innerHTML="S'il vous plait selectionez une langue (*champ obligatoire)";
      document.getElementById("labelangue").style.color = "red";
    }
    else{
      document.getElementById("labelangue").innerHTML="champ validé";
      document.getElementById("labelangue").style.color = "rgb(23, 214, 39)";
      validation++;
    }
    if(date==""){
      document.getElementById("labeldate").innerHTML="(*champ obligatoire)";
      document.getElementById("labeldate").style.color = "red";
    }else{
      document.getElementById("labeldate").innerHTML="champ validé";
      document.getElementById("labeldate").style.color = "rgb(23, 214, 39)";
      validation++;
    }
    if(validation==6){
            var row = table.insertRow(-1);
            row.insertCell(0).innerHTML = titre;
            row.insertCell(1).innerHTML = auteur;
            row.insertCell(2).innerHTML = prix;
            row.insertCell(3).innerHTML = langue;
            row.insertCell(4).innerHTML = date;
            for(i=0;i<=3;i++){
              if(type[i].checked){
                row.insertCell(5).innerHTML = type[i].value;
              }
            }
            row.insertCell(6).innerHTML = `<button onClick="modifier(this)">MODIFIER</button>
                                           <button onClick="supprimer(this)">SUPPRIMER</button>`;
          }
     

}
function modifier(td) {
  selectedRow = td.parentElement.parentElement;
    document.getElementById("titre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("auteur").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("langue").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    for(i=0;i<=3;i++){
      if(type[i].value == selectedRow.cells[5].innerHTML){
        type[i].checked = type[i].value ;
      }
    }


    function  UpdateBtn(){

      
      // var checkedValue;
      selectedRow.cells[0].innerHTML =  titre.value;
      selectedRow.cells[1].innerHTML = auteur.value;
      selectedRow.cells[2].innerHTML = prix.value;
      selectedRow.cells[3].innerHTML =  date.value;
      selectedRow.cells[4].innerHTML =  langue.value;
      
      // for(var radios of type){
      //     if(radios.checked)
      //     {
      //       checkedValue = radios.value;
      //     }
      //   }
      
      //   selectedRow.cells[5].innerHTML=checkedValue;
      
}




function supprimer(r){
  var j=r.parentNode.parentNode.rowIndex;
  table.deleteRow(j);
}



/*function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    document.getElementsByTagName("input").value ="";
  }
*/
}