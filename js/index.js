let input = document.getElementById('inputText');
let data = input.value;

document.getElementById('buttonText').addEventListener('click', ()=>{
   
   //localStorage.clear();
localStorage.setItem("data", input.value);
input.value = "";
})

