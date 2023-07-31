const btnPdf = document.querySelector('#generate-pdf')

const nomeFantasia = document.querySelector('#input-nome')
const empresaContratante = document.querySelector('#input-nome')
const cnpj = document.querySelector('#input-cnpj')
const inscricaoEstadual = document.querySelector('#input-IE')
const rua = document.querySelector('#input-rua')
const numeroRua = document.querySelector('#input-numero-rua')
const bairro = document.querySelector('#input-bairro')
const cidade = document.querySelector('#input-cidade')
const cep = document.querySelector('#input-cep')
const representante = document.querySelector('#input-representante')
const cidadania = document.querySelector('#input-cidadania')
const estadoCivil = document.querySelector('#input-civil')
const Profissao = document.querySelector('#input-profissao')
const cpf = document.querySelector('#input-cpf')
const rg = document.querySelector('#input-rg')

let data = new Date() /* gerado pelo sistema */
let dia = String(data.getDate()).padStart(2, '0')
let mes = String(data.getMonth() + 1).padStart(2, '0')
let ano = data.getFullYear()
data = dia + '/' + mes + '/' + ano

const representanteAssinatura = document.querySelector('#representante-assinatura')

btnPdf.addEventListener("click", () => {

  document.querySelector('#nome-fantasia').textContent = nomeFantasia.value.toUpperCase()
  document.querySelector('#empresa-contratante').textContent = empresaContratante.value
  document.querySelector('#cnpj').textContent = cnpj.value
  
  if(inscricaoEstadual.value != '')
    document.querySelector('#inscricao-estadual').textContent = "e inscrição estadual " + inscricaoEstadual.value

  document.querySelector('#rua').textContent = rua.value
  document.querySelector('#numero-rua').textContent = numeroRua.value
  document.querySelector('#bairro').textContent = bairro.value
  document.querySelector('#cidade').textContent = cidade.value
  document.querySelector('#cep').textContent = cep.value
  document.querySelector('#representante').textContent = representante.value
  document.querySelector('#cidadania').textContent = cidadania.value
  document.querySelector('#estado-civil').textContent = estadoCivil.value
  document.querySelector('#profissao').textContent = Profissao.value
  document.querySelector('#cpf').textContent = cpf.value
  document.querySelector('#rg').textContent = rg.value
  document.querySelector('#data').textContent = data
  document.querySelector('#representante-assinatura').textContent = representante.value

  geraPdf()
})