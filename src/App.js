import "./styles.css";
import LuhnCheckForm from "./components/LuhnCheckForm";

export default function App() {
    return(
        <div className="App">
            <h1>Luhn Algorithm Credit Card Number Validator</h1>
            <LuhnCheckForm /> 
        </div>
    )
}