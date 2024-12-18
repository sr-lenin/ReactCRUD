import React, { useState } from "react";
import { pageEnum, user, UserType} from "./UserType";
import UserList from "./UserList";
import AddUser from "./AddUser";


 const Home: React.FC = () => {
    const [userList, setUserList] = 
        useState(user as UserType[])

    const [showPageUser, setShowPageUser] = 
        useState(pageEnum.home)

    const onAddUser = () =>{
        setShowPageUser(pageEnum.add)
    }

    const showHomePage = ()=>{
        setShowPageUser(pageEnum.home)
    }
    
    const addUsers = (data: UserType) =>{
        setUserList([...userList,data])
        console.log("Usuario añadido:", data);
    }

    const deleteUser = (data: UserType)=>{

        const deleteIndex = userList.indexOf(data);
        const tempList = [...userList]

        tempList.splice(deleteIndex,1)
        setUserList(tempList)

    }
    return( <>

            <ul>
                <li>
                    <a>Lista de usuarios</a>
                </li>
                <li>
                    {showPageUser===pageEnum.home && 
                (<><input type="button" value="Add Users" onClick={onAddUser}>
                </input></>)}
                </li>
                <li>
                    <a>Editar usuarios</a>
                </li>
                <li>
                    <a>Eliminar usuarios</a>
                </li>
            </ul>

            <section>
                
                <UserList list={userList} onDeleteClick={deleteUser}/>

                {showPageUser===pageEnum.add && 
                <AddUser onCancelClick={showHomePage} onSubmitClick={addUsers}/>}
            </section>

            
    </>
    );

    
};

export default Home;