import React, {useState} from "react";

const InputForm = props =>{

    const [member, setMember] = useState ({name: "", email: "", role: ""});

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value})
     };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    }

    return (
        <div>
            <form onSubmit = {submitForm} className = "form">
                <div className ="inputFields">
                <label htmlFor = "name">name</label>
                <input 
                    id = "name"
                    type = "text"
                    name = "name"
                    value={member.name} 
                    onChange ={changeHandler}
                    />
                </div>

                <div className ="inputFields">
                <label htmlFor ="email">e-mail</label>
                <input 
                    id = "email"
                    type = "text"
                    name = "email"
                    value={member.email}
                    onChange ={changeHandler} 
                />
                </div>
                
                <div className ="inputFields">
                <label htmlFor ="role">role</label>
                <input 
                    id = "role"
                    type = "text"
                    name = "role"
                    value={member.role}
                    onChange ={changeHandler} 
                /> 
                </div>
                
                <div className = "buttonContainer">
                <button className = "addMemberButton"type="submit">Add Member</button> 
                </div>          
                    
            </form>

        </div>
    )
};

export default InputForm;