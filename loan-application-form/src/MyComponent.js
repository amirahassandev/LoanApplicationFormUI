
import { useContext } from "react"
import { loanInputContext } from "./Contexts/LoanInputDataContext"



export default function MyComponent(){
    const useLoanInputContext = useContext(loanInputContext)
    // console.log(useLoanInputContext)

    return(
        <>
            <label className="labelText">{useLoanInputContext.lebelText}</label>
            <input className="inputText" type="text" 
                value= {useLoanInputContext.inputValue} 
                onChange={(e) => {useLoanInputContext.handleInputChange(e.target.value)}}/>
        </>
    )
}