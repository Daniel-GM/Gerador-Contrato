document.addEventListener('DOMContentLoaded', () => {
  const btnPdf = document.querySelector('#sigesis-generate-pdf')

  const nomeFantasia = document.querySelector('#sigesis-input-nome')
  const empresaContratante = document.querySelector('#sigesis-input-nome')
  const cnpj = document.querySelector('#sigesis-input-cnpj')
  const inscricaoEstadual = document.querySelector('#sigesis-input-IE')
  const rua = document.querySelector('#sigesis-input-rua')
  const numeroRua = document.querySelector('#sigesis-input-numero-rua')
  const bairro = document.querySelector('#sigesis-input-bairro')
  const cidade = document.querySelector('#sigesis-input-cidade')
  const cep = document.querySelector('#sigesis-input-cep')
  const representante = document.querySelector('#sigesis-input-representante')
  const cidadania = document.querySelector('#sigesis-input-cidadania')
  const estadoCivil = document.querySelector('#sigesis-input-civil')
  const Profissao = document.querySelector('#sigesis-input-profissao')
  const cpf = document.querySelector('#sigesis-input-cpf')
  const rg = document.querySelector('#sigesis-input-rg')

  /* gerado pelo sistema */
  let data = new Date()
  let dia = String(data.getDate()).padStart(2, '0')
  let mes = String(data.getMonth() + 1).padStart(2, '0')
  let ano = data.getFullYear()
  data = dia + '/' + mes + '/' + ano

  btnPdf.addEventListener("click", () => {
    let radio = document.querySelector('#sigesis-radio-contrato input[type="radio"]:checked')
    let idContrato = radio.id.replace("sigesis", "#contrato")

    document.querySelector(idContrato + ' .sigesis-nome-fantasia').textContent = nomeFantasia.value.toUpperCase()
    document.querySelector(idContrato + ' .sigesis-empresa-contratante').textContent = empresaContratante.value
    document.querySelector(idContrato + ' .sigesis-cnpj').textContent = cnpj.value

    if (inscricaoEstadual.value != ''){
      let iE = document.querySelector(idContrato + ' .sigesis-inscricao-estadual')
      let iEValue = document.createElement('span')
      
      iE.textContent = "e inscrição estadual "
      iEValue.classList.add("sigesis-negrito")
      iEValue.textContent = inscricaoEstadual.value
      iE.appendChild(iEValue)
    }

    document.querySelector(idContrato + ' .sigesis-rua').textContent = rua.value
    document.querySelector(idContrato + ' .sigesis-numero-rua').textContent = numeroRua.value
    document.querySelector(idContrato + ' .sigesis-bairro').textContent = bairro.value
    document.querySelector(idContrato + ' .sigesis-cidade').textContent = cidade.value
    document.querySelector(idContrato + ' .sigesis-cep').textContent = cep.value
    document.querySelector(idContrato + ' .sigesis-representante').textContent = representante.value
    document.querySelector(idContrato + ' .sigesis-cidadania').textContent = cidadania.value
    document.querySelector(idContrato + ' .sigesis-estado-civil').textContent = estadoCivil.value
    document.querySelector(idContrato + ' .sigesis-profissao').textContent = Profissao.value
    document.querySelector(idContrato + ' .sigesis-cpf').textContent = cpf.value
    document.querySelector(idContrato + ' .sigesis-rg').textContent = rg.value
    document.querySelector(idContrato + ' .sigesis-data').textContent = data
    document.querySelector(idContrato + ' .sigesis-representante-assinatura').textContent = representante.value

    geraPdf()
  })
})