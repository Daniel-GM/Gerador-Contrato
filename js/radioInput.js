document.addEventListener('DOMContentLoaded', () => {
  const radioContrato = document.querySelector("#sigesis-radio-contrato")
  const contratos = {
    e1: { id: "sigesis-e1", nome: "E1" },
    emissor: { id: "sigesis-emissor", nome: "Emissor" },
    g1: { id: "sigesis-g1", nome: "G1" },
    menufa: { id: "sigesis-menufa", nome: "MENU - COM FISCAL E COM APP DELIVERY" },
    menuf: { id: "sigesis-menuf", nome: "MENU - COM FISCAL E SEM APP DELIVERY" },
    menua: { id: "sigesis-menua", nome: "MENU - SEM FISCAL E COM APP DELIVERY" },
    menu: { id: "sigesis-menu", nome: "MENU - SEM FISCAL E SEM APP DELIVERY" },
    n1: { id: "sigesis-n1", nome: "N1" },
    n2pedidos: { id: "sigesis-n2pedidos", nome: "N2 PEDIDOS" },
    n2vendas: { id: "sigesis-n2vendas", nome: "N2 VENDAS" },
    n3: { id: "sigesis-n3", nome: "N3 SOB MEDIDA" },
    aditivo: { id: "sigesis-aditivo", nome: "MODELO ADITIVO" },
  }

  for (const contrato in contratos) {
    const id = contratos[contrato].id
    const nome = contratos[contrato].nome

    const divRadio = document.createElement('div')

    const radioInput = document.createElement('input')
    radioInput.id = id
    radioInput.type = 'radio'
    radioInput.name = "sigesis-radio-contrato"

    const radioLabel = document.createElement('label')
    radioLabel.htmlFor = id

    const labelText = document.createTextNode(nome)
    radioLabel.appendChild(labelText)
    divRadio.appendChild(radioInput)
    divRadio.appendChild(radioLabel)
    radioContrato.appendChild(divRadio)
  }
})