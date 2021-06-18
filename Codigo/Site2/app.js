function leDados () {   
  let strDados = localStorage.getItem("db");
  let objDados = {}; 

  if ( strDados ) {
       objDados = JSON.parse (strDados);
}
else {
    objDados = { contatos: [ {ocupacao: "     ",    hobbies: "      ", cargahoraria: "        ", horarios: "       "}]}
         }
              
           return objDados;
}



function salvaDados (dados) {
     localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirDados () {
     let objDados = leDados();

     let strOcupacao = document.getElementById ('campoOcupacao').value;
     let strHobbies = document.getElementById ('campoHobbies').value;
     let strCargaHoraria = document.getElementById ('campoCargaHoraria').value;
     let strHorarios = document.getElementById ('campoHorarios').value;
     let novoContato = {
         ocupacao: strOcupacao,
         hobbies: strHobbies,
         cargahoraria: strCargaHoraria,
         horarios: strHorarios
     };
     objDados.contatos.push (novoContato);

     salvaDados (objDados);

     imprimeDados();

}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml = `<p>${objDados.contatos[i].ocupacao} - ${objDados.contatos[i].hobbies}
                     - ${objDados.contatos[i].cargahoraria} - ${objDados.contatos[i].horarios}</p>`
    }

    tela.innerHTML = strHtml;
}


//Botoes
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirDados').addEventListener ('click', incluirDados);