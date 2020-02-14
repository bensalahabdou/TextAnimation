
const text = document.getElementById('text')
const textAuto = 'je vais sortir pour de bon'


let index= 0;
const play = () => {
    text.innerHTML = textAuto.slice(0,index)
   index++;
   if (index > textAuto.length)
  { index=0}
}

let timer = setInterval(play,300)