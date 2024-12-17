// import { UserType } from "../UserType"
import React from "react"
import "./UserList.css"
import { user, UserType } from "../UserType"


type props = {
  list: UserType[]
}

const UserList: React.FC<props> = (props: props) => {

  const {list} = props
    return(
        <div>This is a User List
            <table>
  <tr>
    <th>Name</th>
    <th>E-mail</th>
    <th>Gender</th>
    <th>Status</th>
    <th>Actions</th>
    
  </tr>
  {list.map((user)=>{
    return(
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.gender}</td>
      <td></td>
      <td>
        <form>
          <input type="button" value="view"></input>
          <input type="button" value="edit"></input>
          <input type="button" value="delete"></input>

        </form>
      </td>
    </tr>)
  })}
  
 
</table>

        </div>
    )
}

export default UserList