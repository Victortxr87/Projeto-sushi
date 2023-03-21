function enviarParaWhatsApp() {
    
    const nome = document.getElementById("nomeesobrenome").value;
    const email = document.getElementById("E-mail").value;
    const telefone = document.getElementById("Telefone").value;
    const mensagem = document.getElementById("mensagem").value;
  
    
    const tipoContato = document.querySelector('input[name="contato"]:checked').value;
  
   
    let texto = `Olá, meu nome é ${nome}.`;
  
    if (tipoContato === "E-mail") {
      texto += ` Meu e-mail é ${email}.`;
    } else if (tipoContato === "telefone") {
      texto += ` Meu telefone é ${telefone}.`;
    } else {
      texto += ` Meu número do WhatsApp é ${telefone}.`;
    }
  
    texto += ` Minha mensagem é: ${mensagem}`;
  
   
    const textoCodificado = encodeURIComponent(texto);
  
   
    window.open(`https://wa.me/351931373069?text=${textoCodificado}`);
  }
  
 
  const formulario = document.querySelector("form");
  formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
    enviarParaWhatsApp();
  });
  