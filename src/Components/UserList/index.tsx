// import { UserType } from "../UserType"
import React from "react"
import "./UserList.css"
import { user, UserType } from "../UserType"


type props = {
  list: UserType[];
  onDeleteClick: (data: UserType )=>void
}

const UserList: React.FC<props> = (props: props) => {

  const {list, onDeleteClick} = props
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
          <input type="button" value="delete" onClick={()=>onDeleteClick(user)}></input>

        </form>
      </td>
    </tr>)
  })}
  
 
</table>

        </div>
    )
}

export default UserList