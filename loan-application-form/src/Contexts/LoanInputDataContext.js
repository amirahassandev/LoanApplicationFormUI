
import { createContext } from "react"

export let loanInputContext = createContext({
    lebelText: "",
    inputValue: "",
    handleInputChange: null
})