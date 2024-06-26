const btn = document.querySelector("#buscar");

btn.addEventListener("click", function(e){
    e.preventDefault();
    const valor = document.querySelector("#cep");
    const cep = valor.value;

    let url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url).then((response) => {
        response.json().then((dados) => {
            //console.log(dados);
            let endereco = dados.logradouro;
            let bairro = dados.bairro;
            let localidade = dados.localidade;
            let uf = dados.uf;
            let ibge = dados.ibge;
            let log = dados.erro;
            //console.log(localidade);
            if(log != true){
                document.getElementById("logradouro").value = endereco; 
                document.getElementById("bairro").value = bairro;
                document.getElementById("cidade").value = localidade;
                document.getElementById("ibge").value = ibge;
                document.getElementById("uf").value = uf;
            }               
        })
    })
});