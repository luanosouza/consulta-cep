const inputCEP  = document.getElementById("cep-input")
const btn = document.getElementById("btn")
const resultado = document.getElementById("resultado")

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const cep = inputCEP.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;


    fetch(url)
    .then(res=>res.json())
    .then(cep=>{ 

        if(cep.erro){
            resultado.innerHTML='CEP não encontrado'
        } 
         else{         
            resultado.innerHTML=

          `
          <p><strong>CEP:</strong> ${cep.cep}</p>
           <p><strong>Logradouro:</strong> ${cep.logradouro}</p>
          <p><strong>Bairro:</strong> ${cep.bairro}</p>
            <p><strong>Cidade:</strong> ${cep.localidade}</p>
            <p><strong>Estado:</strong> ${cep.uf}</p> </br>
            <a href="/consulta-cep">Nova Pesquisa</a>
            `
            btn.remove()
        }; 
            
    }).catch(e=>console.error(e))
}) 
