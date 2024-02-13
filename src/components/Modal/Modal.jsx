import "./modal.css";
import { Link } from 'react-router-dom'
import { CgCloseO } from "react-icons/cg";


const Modal = ({isOpen, setModalClose, children}) => {

    if(isOpen){
        return(
            <div className="background">
                <div className="modalStyle">
                    <div className="containerButton">
                        <button onClick={setModalClose}><CgCloseO /></button>
                    </div>
                    {children}
                </div>
            </div>
        )
    } else {
        return null
    }


}

export default Modal;