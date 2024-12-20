import { UserType } from "../UserType";
import "./userModal.css";

type props = {
  onClose: () => void; 
  data: UserType
};

const UserModal = (props: props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
          <div>
            <label>
              Name: {data.name}
            </label>
          </div>
          <div>
            <label>
              E-mail: {data.email}
            </label>
          </div> <div>
            <label>
              Gender: {data.gender}
            </label>
          </div>

      </div>
    </div>
  );
  
};


export default UserModal;
