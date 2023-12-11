const variaveis = document.querySelectorAll('[data-time]')

setInterval(() => {
  const date = new Date()
  
  const time ={
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  }
  
  for (let i = 0; i < variaveis.length; i++) {
    let valor = variaveis[i].getAttribute('data-time')
    let variavel = variaveis[i]
    let novoValor = time[valor] < 10 ?`0${time[valor]}`:`${time[valor]}`
    variavel.innerHTML = novoValor
  }
}, 1000)
