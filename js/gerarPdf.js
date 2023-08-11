function geraPdf() {
  let headerSigesis = document.querySelector('#sigesis-headerSigesis')
  let footerSigesis = document.querySelector('#sigesis-footerSigesis')
  let radio = document.querySelector('#sigesis-radio-contrato input[type="radio"]:checked')
  let idContrato = radio.id.replace("sigesis", "#contrato")
  let texto = document.querySelector(idContrato)
  formatacao(idContrato)

  const options = {
    margin: [50, 30, 50, 30],
    filename: "teste.pdf",
    html2canvas: { dpi: 192, scale: 3, letterRendering: true, scrollY: 0  },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pagebreak: { mode: 'avoid-all', before: '#page2el' },
    pageBreak: { mode: 'legacy' },
  }

  html2pdf().from(texto).set(options).toPdf().get('pdf').then(function (pdf) {
    let totalPages = pdf.internal.getNumberOfPages()
    let pageWidth = pdf.internal.pageSize.getWidth()
    let pageHeight = pdf.internal.pageSize.getHeight()
    let imageWidth = 150
    let imageX = (pageWidth - imageWidth) / 2
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i)
      pdf.addImage(headerSigesis.src, 'PNG', (imageX = (pageWidth - imageWidth) / 2), 10, imageWidth, 30)
      pdf.addImage(footerSigesis.src, 'PNG', (imageX = (pageWidth - 200) / 2), pageHeight - 50, 200, 20)
    }
  }).save()
}