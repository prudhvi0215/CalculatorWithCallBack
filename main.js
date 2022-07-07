let ans = 0;

function calculate(num1,num2,sign)
{
    switch(sign)
    {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return (num1 / num2).toFixed(5);
        default:
            return -1;
    }
}

function calculation(callback,sign)
{
    let num1 = parseFloat(document.getElementById('n1').value);
    let num2 = parseFloat(document.getElementById('n2').value);

    ans = callback(num1,num2,sign);
}

function calc(clicked)
{
    let sign = document.getElementById(clicked).innerHTML;
    console.log(sign);
    calculation(calculate,sign);
}

function equal()
{
    document.getElementById('result').value = ans;
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
}