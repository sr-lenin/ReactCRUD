import { useState } from "react"
import { UserType } from "../UserType"



type props = {
    onCancelClick: ()=> void
    onSubmitClick: (data: UserType)=> void
}

const AddUser = (props: props)=>{

    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [gender, setGender]=useState("")

    const{onCancelClick, onSubmitClick}=props;

    const onName =(e:any)=>{
        setName(e.target.value)
    }
    const onEmail=(e:any)=>{
        setEmail(e.target.value)
    }
    const onGender=(e:any)=>{
        setGender(e.target.value)
    }
    const onSubmitBtnClick=(e: any)=>{
        e.preventDefault()
         if (!name || !email || !gender) 
            alert("Todos los campos son obligatorios.");
         const data: UserType = {
            id: new Date().toJSON().toString(),
            name: name,
            email: email,
            gender: gender
         }
         onSubmitClick(data)
    }
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            onSubmitBtnClick(e)
            }}>
            <div>
                <p>This add page</p>
                <label>Name</label>
                <input type="text" id="name" name={name} onChange={onName}></input>
            </div>
            
            <div>
                <label>E-mail</label>
                <input type="email" id="email" name={email} onChange={onEmail}></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="text" id="gender" name={gender} onChange={onGender}></input>
            </div>
            <div>
                <input type="button" value="Cancel" onClick={onCancelClick}></input>
            </div>
            <div>
                <input type="submit" value="Add user"></input>
            </div>
        </form>
    )
}

export default AddUser