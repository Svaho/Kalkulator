let temaToggle = document.getElementById('tema');

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));


temaToggle.onclick = () => {
    temaToggle.classList.toggle("fa-sun");

    if(temaToggle.classList.contains("fa-sun")) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
};

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                    console.log("Error")
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});