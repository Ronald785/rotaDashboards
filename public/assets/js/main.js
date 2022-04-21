function imprimir(divName) {
    var printContents = document.getElementsByTagName(divName)[0].innerHTML;
    var originalContents = document.body.innerHTML; //Recebe á pagina antes

    document.body.innerHTML = printContents;//Página recebe somente a div a ser imprimida

    let chart =  document.getElementsByClassName("card-chart");
    let expand =  document.getElementsByClassName("expand");

    while (chart.length != 0) { //Remove figuras
        chart[0].remove();
    }

    while (expand.length != 0) { //Remove botões
        expand[0].remove();
    }
    window.print();

    document.body.innerHTML = originalContents;
}
var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("myBtn");
var span = document.getElementsByClassName("close")[0];

// Abrir modal
btn.onclick = function() {
  modal.style.display = "block";
}

//Fechar model
span.onclick = function() {
  modal.style.display = "none";
}

//Clicar fora fecha model
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function pessoasJson() {
    let url = "https://rotadashboard-default-rtdb.firebaseio.com/pessoas.json";

    fetch(url).then(response => response.json())
    .then(pessoas => {
        console.log("Pessoas", pessoas);

        // for(index; index<pessoas.length; index++) {
        //     // console.log(pessoas[index].nome);  
        // }
        // pessoas.forEach(pessoa => {
        //     console.log(pessoa.cpf);
        // })
        return pessoas;
    });
}

function faturasJson() {
  let url = "https://rotadashboards-default-rtdb.firebaseio.com/fatura.json";

  fetch(url).then(response => response.json())
  .then(faturas => {
          console.log("Faturas", faturas);
          createTable(faturas);
        //   return faturas;
      });
}

function createTable(jsonFatura) {
    // let jsonFatura =  faturasJson();
    console.log(jsonFatura);
    var index = (jsonFatura.length - 5);
        
    let divTable = document.querySelector(".table-responsive");
    divTable.innerText = "";

    let table = document.createElement('table');
    let tbody = document.createElement('tbody');

    table.appendChild(tbody);

    for(index; index < jsonFatura.length; index++) {
        let linha_2 = document.createElement('tr');

        let linha_2_data_1 = document.createElement('td');
        let linha_2_data_1_div = document.createElement('div');
        
        if(jsonFatura[index].tipo == "Camisa") {
            var linha_2_data_1_span = document.createElement('span');
            linha_2_data_1_span.setAttribute("class", "las la-tshirt");
            linha_2_data_1_div.appendChild(linha_2_data_1_span);
        }
        else if(jsonFatura[index].tipo == "Calça") {
            var linha_2_data_1_span = document.createElement('img');
            linha_2_data_1_span.src = "https://img.icons8.com/ios/50/000000/trousers.png";
            linha_2_data_1_div.appendChild(linha_2_data_1_span);
        }
        else if(jsonFatura[index].tipo == "Tênis") {
            var linha_2_data_1_span = document.createElement('span');
            linha_2_data_1_span.setAttribute("class", "las la-shoe-prints");
            linha_2_data_1_div.appendChild(linha_2_data_1_span);
        }
        linha_2_data_1.appendChild(linha_2_data_1_div);

        let linha_2_data_2 = document.createElement('td');
        let linha_2_data_2_div = document.createElement('div');
        linha_2_data_2_div.innerHTML = jsonFatura[index].nome;
        linha_2_data_2.appendChild(linha_2_data_2_div);


        let linha_2_data_3 = document.createElement('td');
        let linha_2_data_3_div = document.createElement('div');
        linha_2_data_3_div.innerHTML = jsonFatura[index].quantidade;
        linha_2_data_3.appendChild(linha_2_data_3_div);


        let linha_2_data_4 = document.createElement('td');
        let linha_2_data_4_div = document.createElement('div');
        linha_2_data_4_div.innerHTML = jsonFatura[index].número;
        linha_2_data_4.appendChild(linha_2_data_4_div);


        let linha_2_data_5 = document.createElement('td');
        let linha_2_data_5_div = document.createElement('div');
        let linha_2_data_5_btn = document.createElement('button');
        linha_2_data_5_btn.innerHTML = "Expandir";
        linha_2_data_5_btn.classList.add("expand");
        linha_2_data_5_btn.setAttribute("id", jsonFatura[index].comprador);
        linha_2_data_5_btn.setAttribute("class", "myBtn");
        linha_2_data_5_btn.setAttribute("onclick", `openModal(${jsonFatura[index].comprador})`);
        linha_2_data_5_div.appendChild(linha_2_data_5_btn);
        linha_2_data_5.appendChild(linha_2_data_5_div);


        linha_2.appendChild(linha_2_data_1);
        linha_2.appendChild(linha_2_data_2)
        linha_2.appendChild(linha_2_data_3);
        linha_2.appendChild(linha_2_data_4);
        linha_2.appendChild(linha_2_data_5);
        tbody.appendChild(linha_2);
    }
    divTable.appendChild(table);
}

function openModal(cpfPessoa) {
    let urlPessoas = "https://rotadashboards-default-rtdb.firebaseio.com/pessoas.json";

    fetch(urlPessoas).then(response => response.json())
    .then(pessoas => {
        console.log("Pessoas", pessoas);
        pessoas.forEach(pessoa => {
            console.log(pessoa.cpf);
        })
        return pessoas;
    });
}


pessoasJson();
faturasJson();