import { useState, useEffect } from 'react';
import KcalDiagram from './KcalDiagram/KcalDiagram.jsx'
import Header from './header/header.jsx'
import Modal from './modal/modal.jsx';
import { useDispatch, useSelector } from "react-redux"
import MenuEda from './MenyEda/MenuEda';


function Home() {
    const dispatch = useDispatch();
    const CalloriasAll = useSelector(state => state.CalloriasAll.CalloriasAll)

    const [modalActive, setModalActive] = useState(false)
    useEffect(()=>{
      localStorage.setItem('CalloriasAll',JSON.stringify(CalloriasAll)) 
  }, [JSON.stringify(CalloriasAll)])

    return (
      <div className="Home">
        <Header setModalActive={setModalActive}/>
        <KcalDiagram/>
        <MenuEda/>
        <Modal setModalActive={setModalActive} modalActive={modalActive}/>
      </div>
    );
  }
  
  export default Home;