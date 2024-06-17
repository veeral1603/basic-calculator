'use script';

let string = "";
const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('input');

let resultDisplayed = false;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (e) => {
        
        let btnText = e.target.innerHTML;

        let lastChar = string[string.length-1];

        if(e.target.innerHTML == '=')
        {
            if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '%' || lastChar ==='*')
            {
                // Do Nothing
            }
            else
            {
            string = +eval(string).toFixed(4);
            input.value = string;
            resultDisplayed = true;
            }
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = String(string).substring(0, string.length-1);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC')
        {
            string = '';
            input.value = string;
        }
        else
        {
            if(resultDisplayed == true && btnText !== '+' && btnText !== '-' && btnText !== '/' && btnText !== '%' && btnText !== '*' )
            {
                string = '';
                string = string + e.target.innerHTML;
                input.value = string;
                resultDisplayed = false;

            }
            else if (btnText === '+' || btnText === '-' || btnText === '/' || btnText === '%' || btnText === '*')
            {   
                if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '%' || lastChar ==='*')
                {   if (lastChar !== '-')
                    {
                    string = string.substring(0, string.length-1) + btnText;
                    input.value = string;
                    }
    
                }
                else if(string.length == 0)
                {
                    if(btnText === '-')
                    {
                        string = string + btnText;
                        input.value = string;
                    }
                    // Do Nothing
                }
                else 
                {
                    string = string +  e.target.innerHTML;
                    input.value = string;
                    resultDisplayed = false;
                }
            }   
            else
            {
                string = string +  e.target.innerHTML;
                input.value = string;
                resultDisplayed = false;
            }
        }
    })
})

