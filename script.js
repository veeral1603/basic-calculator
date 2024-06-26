'use script';

let string = "";
const buttons = document.querySelectorAll('.btn');
const input = document.querySelector('input');

let resultDisplayed = false;

Array.from(buttons).forEach((button) => {
    button.addEventListener('click' , (e) => {
        
        let btnText = e.target.innerHTML;

        let lastChar = string[string.length-1];

        if(btnText == '=')
        {
            if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '%' || lastChar ==='*')
            {
                // Do Nothing
            }
            else
            {
            string = +eval(string).toFixed(3);
            input.value = string;
            resultDisplayed = true;
            }
        }
        else if(btnText == 'DEL')
        {   
            if(resultDisplayed === true)
                {
                    resultDisplayed = false;
                }
            string = String(string).substring(0, string.length-1);
            input.value = string;
        }
        else if (btnText == 'AC')
        {
            string = '';
            input.value = string;
        }
        else
        {
            if(resultDisplayed == true && btnText !== '+' && btnText !== '-' && btnText !== '/' && btnText !== '%' && btnText !== '*' )
            {
                string = '';
                string = string + btnText;
                input.value = string;
                resultDisplayed = false;

            }
            else if (btnText === '+' || btnText === '-' || btnText === '/' || btnText === '%' || btnText === '*' || btnText === '.')
            {   

                if(lastChar === '+' || lastChar === '-' || lastChar === '/' || lastChar === '%' || lastChar ==='*' || lastChar === '.')
                {   if (lastChar !== '-')
                    {
                    string = string.substring(0, string.length-1) + btnText;
                    input.value = string;
                    }
                    else if(lastChar === '.')
                    {
                        // do nothing
                        console.log('. was inputt')
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
                else if(btnText === '%')
                {
                    string = string + '*(0.01)';
                    string = +eval(string).toFixed(3);
                    input.value = string;
                }

                else 
                {
                    string = string +  btnText;
                    input.value = string;
                    resultDisplayed = false;
                }
            }   
            else
            {
                string = string +  btnText;
                input.value = string;
                resultDisplayed = false;
            }
        }
    })
    
}
)


