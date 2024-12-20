import React, { useState } from "react";
import "./UserList.css";
import { user, UserType } from "../UserType";
import UserModal from "../UserModal";

type props = {
  list: UserType[];
  onDeleteClick: (data: UserType) => void;
};

const UserList: React.FC<props> = (props: props) => {
  const { list, onDeleteClick } = props;
  const [showUserModal, setShowUserModal] = useState(false);
  const [dataShow, setDataShow] = useState(null as UserType | null )

  const viewUser = (data: UserType) => {
    setDataShow(data)
    setShowUserModal(true);
  };

  const onCloseModal = () => setShowUserModal(false);

  return (
    <div>
      This is a User List
      <table>
        <tr>
          <th>Name</th>
          <th>E-mail</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {list.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td></td>
              <td>
                <form>
                  <input
                    type="button"
                    value="view"
                    onClick={()=>viewUser(user)}
                  ></input>
                  <input type="button" value="edit"></input>
                  <input
                    type="button"
                    value="delete"
                    onClick={() => onDeleteClick(user)}
                  ></input>
                </form>
              </td>
            </tr>
          );
        })}
      </table>
      {showUserModal && dataShow !== null && 
      <UserModal onClose={onCloseModal} data={dataShow}/>}
    </div>
  );
};

export default UserList;
