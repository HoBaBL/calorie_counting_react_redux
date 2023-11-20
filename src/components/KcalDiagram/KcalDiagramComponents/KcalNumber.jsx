import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setCalloriasAll } from '../../../redux/slices/CalloriasAll'

function KcalNumber() {
    const dispatch = useDispatch();
    const CalloriasAll = useSelector(state => state.CalloriasAll.CalloriasAll)
    const dataConstruct = useSelector(state => state.UserSlice.dataConstruct)
    const CalloriasSum = useSelector(state => state.CalloriasSum.CalloriasSum)
    const proteins = 1.5 * dataConstruct.weight
    const fats = 1 * dataConstruct.weight
    const carbohydrates = 2 * dataConstruct.weight

    useEffect(() => {
        if (dataConstruct.gender === 'Мужской') {
            dispatch(setCalloriasAll((10 * dataConstruct.weight) + (6.25 * dataConstruct.height) - (5 * dataConstruct.age) + 5))
        } else if (dataConstruct.gender === 'Женский') {
            dispatch(setCalloriasAll((10 * dataConstruct.weight) + (6.25 * dataConstruct.height) - (5 * dataConstruct.age) - 161))
        }
    }, [dataConstruct])

    return (
        <div className='KcalNumber'>
            
            <p className="CaloriasAll">{Math.round(CalloriasAll)}<span className="CaloriasMini">ккал</span></p>
            <div className='FPC-Flex'>
                <div className='FPC'>
                    <p>Жиры</p>
                    <progress className='LineBlue' id="line1" max={fats} value={CalloriasSum.sumFats}></progress>
                    <span>{Math.round(CalloriasSum.sumFats)} / {Math.round(fats)} г</span>
                </div>
                <div className='FPC'>
                    <p>Белки</p>
                    <progress className='LineOrang' id="line1" max={proteins} value={CalloriasSum.sumProteins}></progress>
                    <span>{Math.round(CalloriasSum.sumProteins)} / {Math.round(proteins)} г</span>
                </div>
                <div className='FPC'>
                    <p>Углеводы</p>
                    <progress className='LineRed' id="line1" max={carbohydrates} value={CalloriasSum.sumCarbohydrates}></progress>
                    <span>{Math.round(CalloriasSum.sumCarbohydrates)} / {Math.round(carbohydrates)} г</span>
                </div>
            </div>
        </div>
    );
  }
  
  export default KcalNumber;