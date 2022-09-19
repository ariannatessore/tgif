import {data} from './senateData.js';

console.log(data);

let members = data.results[0].members; 
let Attmembers = members.sort(function(a, b) {
    return a.missed_votes - b.missed_votes;
  });

let Attmembers1 = Attmembers.slice(-10);

let Attmembers2= Attmembers1.sort(function(a,b){
    return b.votes_with_party_pct - a.votes_with_party_pct;
})
let Attmembers3 = Attmembers.slice (0,10); 

GenerateTable2(Attmembers2);
function GenerateTable2(membersArr) {
  document.getElementById("tbody2").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbody2").append(row) //nos traemos tbody y le añadimos row

  }
}

GenerateTable3(Attmembers3);
function GenerateTable3(membersArr) {
  document.getElementById("tbody3").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + " " + (membersArr[i].middle_name || "") + " " + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbody3").append(row) //nos traemos tbody y le añadimos row
  }
}

GenerateTable4(members);
function GenerateTable4(membersArr) {
  document.getElementById("tbody4").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  let rep = membersArr.filter(function(members){
    return members.party === "R"
  })
  let dem = membersArr.filter(function(members){
    return members.party === "D"
  })
  let ind = membersArr.filter(function(members){
    return members.party === "ID"
  })
  let promediorep = rep.map((votes) => votes["votes_with_party_pct"]).reduce((a,c)=> (a+c) / (rep.length));
  let promediodem = dem.map((votes) => votes["votes_with_party_pct"]).reduce((a,c)=> (a+c) / (dem.length));
  let promedioind = ind.map((votes) => votes["votes_with_party_pct"]).reduce((a,c)=> (a+c) / (ind.length));
  
  console.log(promediorep)
  for (var i = 0; i < 3; i++) { //para cada i menor que array.length
    var row = document.createElement("tr"); //let row crear un elemento tr
    if (i==0) {
      row.insertCell().innerHTML = "Republican";
      row.insertCell().innerHTML = rep.length;
      row.insertCell().innerHTML = promediorep+"%";
      document.getElementById("tbody4").append(row)
    }
    if (i==1) {
      row.insertCell().innerHTML = "Democrat";
      row.insertCell().innerHTML = dem.length;
      row.insertCell().innerHTML = promediodem+"%";
      document.getElementById("tbody4").append(row)
    }
    if (i==2) {
      row.insertCell().innerHTML = "Independent";
      row.insertCell().innerHTML = ind.length;
      row.insertCell().innerHTML = promedioind+"%";
      document.getElementById("tbody4").append(row)
    }
  }
}


  
