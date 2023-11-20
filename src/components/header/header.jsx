import { BiLeaf } from 'react-icons/bi';
import { VscAccount } from 'react-icons/vsc';
import './header.css'

function Header({setModalActive}) {
    return (
      <div className="Header">
        <h1>Just Healty <BiLeaf/></h1>
        <button className='headerAccountFlex' onClick={() => {setModalActive(true)}}>
            <VscAccount size={28}/>
            <p>Мой Аккаунт</p>
         </button>
      </div>
    );
  }
  
  export default Header;