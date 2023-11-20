import { useSelector } from "react-redux"


export default function ModalActive({setModalContent}) {
    const dataConstruct = useSelector(state => state.UserSlice.dataConstruct)

    return (
        <div className='ModalAccountFlex'>
            <div className='ModalAccountFlexFlex'>
                <p className='ModalAccountText'>Вес: {dataConstruct.weight}</p>
            </div>
            <div className='ModalAccountFlexFlex'>
                <p className='ModalAccountText'>Рост: {dataConstruct.height}</p>
            </div>
            <div className='ModalAccountFlexFlex'>
                <p className='ModalAccountText'>Возраст: {dataConstruct.age}</p>
            </div>
            <div className='ModalAccountFlexFlex'>
                <p className='ModalAccountText'>Пол: {dataConstruct.gender}</p>
            </div>
            <button className="ModalAccountBtn" onClick={() => setModalContent(true)}>Исправить</button>
        </div>
        )
}