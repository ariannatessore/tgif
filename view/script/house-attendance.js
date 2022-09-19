import {houseData} from './houseData.js';
console.log(houseData);


let members = houseData.results[0].members;

let Attmembers = members.sort(function(a, b) {
  return a.missed_votes - b.missed_votes;
});
console.log(Attmembers)

let Attmembers1 = Attmembers.slice(-10);


let Attmembers2 = Attmembers1.sort(function(a,b){
  return b.votes_with_party_pct - a.votes_with_party_pct;
})


let Attmembers3 = Attmembers2.slice(0,10);

//create function to build a table in js 
GenerateTable2(Attmembers1);

function GenerateTable2(membersArr) {
//    console.log(membersArr,'ooo')
//     for(let i =0;i<membersArr.length;i++){
       
//         let row = document.createElement("tr");
//         let link = document.createElement("a"); 
//         link.textContent = membersArr[i].first_name + membersArr[i].last_name;
       
//         link.setAttribute("href", membersArr[i].url);
//         row.insertCell().append(link);
//         row.insertCell().innerHTML = membersArr[i].missed_votes;
//         row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
//         console.log(row,'daviiii');
//         document.getElementById("tbody2").append(row);

//     }
     //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (let i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
    console.log(membersArr.length,'lll');
    console.log(membersArr[i].id,'id')
    document.getElementById("tbodyHouse").innerHTML = "";
    let row = document.createElement("tr"); //let row crear un elemento tr
    console.log("hola",row);
    console.log(i,'indx')
    let link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
    link.textContent = membersArr[i].first_name + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbody2").append(row) //nos traemos tbody y le añadimos row
          }

        
};



GenerateTable3(Attmembers3);
function GenerateTable3(membersArr) {
  document.getElementById("tbodyHouse").innerHTML = ""; //traemos el elemento con id tbody y dentro le añadimos un texto vacio
  for (var i = 0; i < membersArr.length; i++) { //para cada i menor que array.length
      var row = document.createElement("tr"); //let row crear un elemento tr
      var link = document.createElement("a"); //let link crear un elemento a normalmente es un hipervinculo o algo parecido
      link.textContent = membersArr[i].first_name + membersArr[i].last_name; //el contenido de text content es el first middle y last name en cada indice i del array
      link.setAttribute("href", membersArr[i].url) //link que es crear un elemento a tiene a su vez un setAttribute que le da un atributo id name role href etc al elemento
      row.insertCell().append(link); //a row que es crear un tr le aplicamos insertCell que crea una celda y con append añadimos link dentro de la celda
      row.insertCell().innerHTML = membersArr[i].missed_votes;
      row.insertCell().innerHTML = membersArr[i].missed_votes_pct;
      document.getElementById("tbodyHouse").append(row) //nos traemos tbody y le añadimos row
  }
}









