import { useEffect, useState } from 'react';
import './modal.css'
import ModalActive from './modalActive';
import ModalNoneActive from './modalNoneActive';
import { useDispatch, useSelector } from "react-redux"
import { IoMdClose } from "react-icons/io";

function Modal({modalActive, setModalActive}) {
    const dispatch = useDispatch();
    const dataConstruct = useSelector(state => state.UserSlice.dataConstruct)

    const [modalContent, setModalContent] = useState(false)
    
    useEffect(()=>{
        localStorage.setItem('localUser',JSON.stringify(dataConstruct)) 
    }, [JSON.stringify(dataConstruct)])

    return (
      <div className={modalActive ? "modal active" : 'modal'} onClick={() => {setModalActive(false)}}>
        <div className='ModalContent' onClick={e => e.stopPropagation()}>
          <div className="Modal_close">
              <button onClick={() => setModalActive(false)} className="ModalMenuBtn"><IoMdClose size={32}/></button>
          </div>
            {
                modalContent ? (<ModalNoneActive setModalContent={setModalContent}/>):  <ModalActive setModalContent={setModalContent}/>
            }
        </div>
      </div>
    );
  }
  
  export default Modal;