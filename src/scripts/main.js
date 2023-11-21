const dataDoEvento = new Date ("jan 17, 2024 18:00:00")
const timeStampDoEvento = dataDoEvento.getTime();

const contaAshoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();
    const tempoRestante = timeStampDoEvento - timeStampAgora

    const dias = Math.floor(tempoRestante / (1000*60*60*24));
    const horas = Math.floor((tempoRestante % (1000*60*60*24))/(1000*60*60));
    const minutos = Math.floor((tempoRestante % (1000 * 60*  60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById('contador').innerHTML = (`${dias}d ${horas}h ${minutos}m ${segundos}s`)

    console.log(dias)
    console.log(horas)
    console.log(minutos)
    console.log(segundos)
},1000)