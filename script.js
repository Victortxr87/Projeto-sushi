function enviarFormulario() {
  const nome = document.getElementById('nomeesobrenome').value;
  const email = document.getElementById('E-mail').value;
  const telefone = document.getElementById('Telefone').value;
  const mensagem = document.getElementById('mensagem').value;
  const contato = document.querySelector('input[name="contato"]:checked').value;
  const horario = document.querySelector('select').value;

  // Verifica se todos os campos estão preenchidos
  if (nome !== "" && email !== "" && telefone !== "" && contato !== "" && horario !== "") {
    let texto = `Olá, meu nome é ${nome}. Meu email é ${email}, meu telefone é ${telefone} e eu gostaria de ser contatado por ${contato} no horário da ${horario}. `;
    
    if (mensagem) {
      texto += ` Minha mensagem é: ${mensagem}`;
    }
    
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=+351931373069&text=${encodeURIComponent(texto)}`;
    
    window.open(linkWhatsapp, "_blank");
  }
}


