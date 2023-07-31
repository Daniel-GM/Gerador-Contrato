const headerSigesis = document.querySelector('#headerSigesis')
const footerSigesis = document.querySelector('#footerSigesis')

function geraPdf() {
  let texto = document.querySelector('#content');
  texto.style.display = 'block';
  
  const options = {
    margin: [50, 50, 50, 50],
    filename: "teste.pdf",
    html2canvas: { dpi: 192, scale: 3, letterRendering: true },
    jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    pagebreak: { mode: 'avoid-all', before: '#page2el' },
    pageBreak: { mode: 'legacy' },
  }

  html2pdf().from(texto).set(options).toPdf().get('pdf').then(function (pdf) {
    let totalPages = pdf.internal.getNumberOfPages()
    let pageWidth = pdf.internal.pageSize.getWidth()
    let pageHeight = pdf.internal.pageSize.getHeight()
    let imageWidth = 100
    let imageX = (pageWidth - imageWidth) / 2
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i)
      pdf.addImage(headerSigesis.src, 'JPEG', (imageX = (pageWidth - imageWidth)/2), 10, imageWidth, 30)
      pdf.addImage(footerSigesis.src, 'JPEG', (imageX = (pageWidth - 200)/2), pageHeight - 50, 200, 20)
    }
  }).save().then(() => {
    texto.style.display = 'none';
  })
}