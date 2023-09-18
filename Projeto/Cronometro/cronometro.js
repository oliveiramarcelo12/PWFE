
//declarando constantes miliseg,seg,min onde eles buscam seu valor no doc querrySelector
const miliseg = document.querySelector('.milissegundos')
const seg = document.querySelector('.segundos')
const min = document.querySelector('.minutos')
const hr = document.querySelector('.horas')

//utilizando função let = função permite alterar seu valor 
//declarando valores iniciais
let miliNum = 0
let segNum = 0
let minNum = 0
let hourNum = 0
let INTERVALO

//função miliseg, inicia seu valor constante até atingir "10" fazendo assim seu valor zerar.
function milissegundos() {
  miliNum++
  if (miliNum < 10) {
    miliseg.innerHTML = '0' + miliNum  //utilizando "innerHTML" para buscar e alterar o valor no hmtl
  } else {
    miliseg.innerHTML = miliNum
  }

  if (miliNum == 99) {
    miliNum = 0
    segundos()
  }
}
// Função para atualizar os segundos
function segundos() {
  segNum++
  if (segNum < 10) { //deixar 0 estatico na frente enquanto for menor que 10
    seg.innerHTML = '0' + segNum
  } else {
    seg.innerHTML = segNum
  }

  if (segNum == 59) {
    segNum = 0
    minutos()
    }
  }
 
  

// Função para atualizar os minutos
function minutos() {
  minNum++
  if (minNum < 10) {
    min.innerHTML = '0' + minNum
  } else {
    min.innerHTML = minNum
  }

  if (minNum == 59) {
    minNum = 0
    horas()
  }
}
// Função para atualizar as horas
function horas() {
  hourNum++
  if (hourNum < 10) {
    hr.innerHTML = '0' + hourNum
  } else {
    hr.innerHTML = hourNum
  }

  
}

// Função para iniciar o cronômetro
function iniciar() {
  clearInterval(INTERVALO) // Limpa qualquer intervalo anterior
  INTERVALO = setInterval(() => {
    milissegundos() // Chama a função de atualização dos milissegundos a cada 10 milissegundos
  }, 10)
}
// Função para parar o cronômetro
function parar() {
  clearInterval(INTERVALO) // Limpa o intervalo, interrompendo o cronômetro
}

// Função para resetar o cronômetro
function resetar() {
  clearInterval(INTERVALO)
  miliNum = 0
  segNum = 0
  minNum = 0
  miliseg.innerHTML = '00'
  seg.innerHTML = '00'
  min.innerHTML = '00'
}
