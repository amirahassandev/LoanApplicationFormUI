
    import { useState } from "react"
    import "./Form.css"
    import Popup from"./Popup"
    import MyComponent from "./MyComponent"
    import { loanInputContext } from "./Contexts/LoanInputDataContext"

    export default function FormLoan(){
    const [formInputs, setFormInputs] = useState({
            name: "",
            phoneNumber: "",
            age: "",
            isEmployee: false,
            salary: ""
    })

    const [popupMsg, setPopupMsg] = useState({
        msg:"",
        color:"red"
    })

    function validationInputs(name, phone, age) {
        if (name.length < 3) {
            setPopupMsg({...popupMsg, msg:"Name must be at least 3 characters"})
            return
        }
        if (phone.length < 10 || phone.length > 12) {
            setPopupMsg({...popupMsg, msg:"Phone number must be at least 10 digits"})
            return
        }
        if (age <= 18 || age >= 100) {
            setPopupMsg({...popupMsg, msg:"User must be at least 18 years old"})
            return
        }

        setPopupMsg({msg:"Form submitted successfully", color:"green"})
    }

    function handlePhoneChange(phoneValue){
        setFormInputs({...formInputs, phoneNumber: phoneValue})
    }

    function handleNameChange(nameValue){
        setFormInputs({...formInputs, name: nameValue})
    }

    function handleAgeChange(ageValue){
        setFormInputs({...formInputs, age: ageValue})
    }

        var isNotNull = (formInputs.name && formInputs.phoneNumber && formInputs.age)
        var isbtnDisabled = isNotNull ? false : true;
        var colorBtnStyle = isNotNull ? "rgb(211, 0, 127)" : "gray";
        

        return ( 
            
            <div onClick={() => (popupMsg.msg != null) ? setPopupMsg({...popupMsg, msg:""}): setPopupMsg({...popupMsg, msg:"------"})}>
                <div className="formStyle" onSubmit={(e) => 
                    {
                        e.preventDefault()
                        if(formInputs.name && formInputs.phoneNumber && formInputs.age){
                            validationInputs(formInputs.name, formInputs.phoneNumber, formInputs.age)
                        }
                    }}
                    
                    >
                    <p className="titleStyle">Requesting a Loan</p>
                    <form className="inputsStyle">
                        <span className="lineStyle"></span>

                        <loanInputContext.Provider 
                            value = 
                                {{
                                    lebelText:"Name", 
                                    inputValue: formInputs.name, 
                                    handleInputChange: handleNameChange
                                }}>
                            <MyComponent />
                        </loanInputContext.Provider>

                        <loanInputContext.Provider 
                            value =
                                {{
                                    lebelText:"Phone Number", 
                                    inputValue: formInputs.phoneNumber, 
                                    handleInputChange: handlePhoneChange
                                }}>
                            <MyComponent />
                        </loanInputContext.Provider>

                        <loanInputContext.Provider 
                            value =
                                {{
                                    lebelText:"Age", 
                                    inputValue: formInputs.age, 
                                    handleInputChange: handleAgeChange
                                }}>
                            <MyComponent />
                        </loanInputContext.Provider>
                        
                            <label className="labelText">Are you an employee?</label>
                            <input className="inputText" type="checkbox" checked = {formInputs.isEmployee} onChange={(e) => {setFormInputs({...formInputs, isEmployee: e.target.checked})}}/>

                            <label className="labelText">Salary</label>
                            <select className="inputText" style={{fontSize: "12px"}} value={formInputs.salary} onChange={(e) => {setFormInputs({...formInputs, salary: e.target.value})}}>
                                <option>Less Than 500$</option>
                                <option>Between 500$ and 2000$</option>
                                <option>Above 2000$</option>
                            </select>
                        {/* </div> */}
                        <div>
                            <button className="btnStyle" style={{backgroundColor: colorBtnStyle}} disabled={isbtnDisabled} type="submit">Submit</button>

                        </div>
                    </form>
                </div>
                <Popup msg={popupMsg.msg} colorText={popupMsg.color}  />
            </div>
        )
    }