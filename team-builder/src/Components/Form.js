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
            <form onSubmit = {submitForm}>
                <label htmlFor = "name">Name</label>
                <input 
                    id = "name"
                    type = "text"
                    name = "name"
                    value={member.name} 
                    onChange ={changeHandler}
                    />

                <label htmlFor ="email">Email</label>
                <input 
                    id = "email"
                    type = "text"
                    name = "email"
                    value={member.email}
                    onChange ={changeHandler} 
                />

                <label htmlFor ="role">Role</label>
                <input 
                    id = "role"
                    type = "text"
                    name = "role"
                    value={member.role}
                    onChange ={changeHandler} 
                /> 
                <button type="submit">Add Member</button>           
                    
            </form>

        </div>
    )
};

export default InputForm;