let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'AC':
                display.value = '';
                break;

            case 'DE':
                display.value = display.value.slice(0,-1);   
                break;
                
            case '=':
                try{
                    display.value = eval(display.value);
                }catch{
                    display.value = "Error!";
                }
                break;

            default:
                display.value += e.target.innerText;   
        }
    })
})