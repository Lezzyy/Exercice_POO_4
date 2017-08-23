// objet client -> stock la liste de clients
// methode pour trier la liste des clients
// methode qui montre les clients
// objet pour gerer la requete ajax (existe voir w3school)
// objet qui gere le html : -une methode pour creer ligne et
//                          -une autre pour creer cellules
//                          - ajouter lignes
//                          - effacer
//                          - recuperer la valeur du select
// requete ajax appelle la methode montrer

var x = "";
var tab = document.getElementById('tab');
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var liste = JSON.parse(this.responseText);
    for (i in liste) {
      x += "<tr><td>" + liste[i].name + "</td>";
      x += "<td>" + liste[i].age + "</td> ";
      x += "<td>" + liste[i].city + "</td></tr>";
    }
    tab.innerHTML = x;
    console.log(x);
  }
};

xhttp.open("GET", "liste.json", true);
xhttp.send();
