const form = document.querySelector("form");
const body = document.querySelector("body");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#cm").value);
    const weight = parseInt(document.querySelector("#kg").value);
    const result = document.querySelector("#result");

    console.log(height);
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `${height} Not a Valid Height`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `${weight} not a Valid Weight`;
    }
    else
    {
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        
        if(bmi < 18.6){
            result.innerHTML = `You're Under Weight ${bmi}`
            body.style.backgroundColor = 'red'
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `It's Good ${bmi}`
            body.style.backgroundColor = 'green'
        }
        else
        {
            result.innerHTML = `You're Overweight ${bmi}`
            body.style.backgroundColor = 'red'
        }
    }
    


})