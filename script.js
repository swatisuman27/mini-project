let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (let item of buttons) {
    
    item.addEventListener('click', (e)=>{
       let buttonText = e.target.innerText;
       
        if (buttonText === 'X' && screen.value!==""){
            buttonText = '*';
            screenValue = screen.value+buttonText;
            screen.value = screenValue;
        }
        else  if (buttonText === 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText === 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText === '=') {
            
            screen.value = eval(screenValue);           
            
        }
        else if(screen.value!=="") {
            screenValue =screen.value+buttonText;
            screen.value = screenValue;
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }

    })
}
