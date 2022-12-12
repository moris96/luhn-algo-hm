import { useState } from "react";

export default function New() {
    const [errorMessage, setErrorMessage] = useState('enter a number')

    function checkLuhn(num){
        const list = (num + "").split('').reverse('').map(x => parseInt(x))
        const lastDigit = list.shift()
        let sum = list.reduce(
            (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)), 0
        );
        sum += lastDigit
        return sum % 10 === 0
    }

    const validNumber = (num) => {
        if(checkLuhn(num)){
            setErrorMessage('true')
        } else{
            setErrorMessage('false')
        }
    }

    return(
        <div className="box">
            <h2>Enter a credit card number: </h2>
            <input type="text" onChange={(e) => validNumber(e.target.value)}></input><br/>
            <h2 className="tf">{errorMessage}</h2>
        </div>
    )
}

