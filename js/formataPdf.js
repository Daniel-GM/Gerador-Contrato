function formatacao(id){
  const divSigesisContent = document.querySelector("div" + id)
  divSigesisContent.style.wordBreak = "break-word"
  divSigesisContent.style.maxWidth = "180mm"
  divSigesisContent.style.display = "block"
  divSigesisContent.style.fontFamily = "'Times New Roman', Times, serif"

  const paragrafos = divSigesisContent.querySelectorAll(id + " p")
  paragrafos.forEach(function(paragrafo) {
    paragrafo.style.textAlign = "justify"
    paragrafo.style.fontSize = "14px"
  })

  const titulos = divSigesisContent.querySelectorAll(id + " .sigesis-titulo")
  titulos.forEach(function(titulo) {
    titulo.style.textAlign = "center"
    titulo.style.fontSize = "18px"
  })
}