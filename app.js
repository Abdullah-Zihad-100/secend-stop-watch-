let intervalId

function startCount(){

    function selectId(id){
  return document.getElementById(id)
}
const number=selectId('number');
number.innerText=0;
let currentNumber=0;
intervalId=setInterval(()=>{
   currentNumber++;
   number.textContent=currentNumber;
},1000);

}
function stopCount(){
    clearInterval(intervalId);
}


function resetCount(){
    clearInterval(intervalId)
    let a=0;
    document.getElementById('number').innerText=a;
}


