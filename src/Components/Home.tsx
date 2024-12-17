import React, { useState } from "react";
import { user, UserType} from "./UserType";
import UserList from "./UserList";
import AddUser from "./AddUser";


 const Home: React.FC = () => {

    const [userList, setUserList] = useState(user as UserType[])
    return( <>

            <ul>
                <li>
                    <a>Lista de usuarios</a>
                </li>
                <li>
                    <a>Crear usuarios</a>
                </li>
                <li>
                    <a>Editar usuarios</a>
                </li>
                <li>
                    <a>Eliminar usuarios</a>
                </li>
            </ul>

            <UserList list={userList}/>
            <AddUser></AddUser>
    </>
    );

    
};

export default Home;