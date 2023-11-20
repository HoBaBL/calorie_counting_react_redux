import { useEffect, useState } from 'react';
import './MenuEda.css'
import coffe from '../../data/img/coffe.png'
import buter from '../../data/img/buter.png'
import ovosh from '../../data/img/ovosh.png'
import sushi from '../../data/img/sushi.png'
import { useDispatch, useSelector } from "react-redux"
import ModalMenuEda from './modalMenuEda/modalMenuEda';
import { setCalloriasSum } from '../../redux/slices/CalloriasSum';


function MenuEda() {
    const CalloriasAll = useSelector(state => state.CalloriasAll.CalloriasAll);
    const dispatch = useDispatch();

    const [modalMenuEdaActive, setmodalMenuEdaActive] = useState(false)
    const [titleIndex, setTitleIndex] = useState('')
    const [myBasket, setMyBasket] = useState([])
    const [countProduct, setCountProduct] = useState(0)
    const [meal, setMeal] = useState(JSON.parse(localStorage.getItem('localMeal')) || [
        {
            title:'Завтрак',
            img: coffe,
            allCalorias: 0,
            calorias: 0,
            carbohydrates: 0,
            proteins: 0,
            fats: 0,
            product: [],
            color: 'red'
        },
        {
            title:'Обед',
            img: buter,
            allCalorias: 0,
            calorias: 0,
            carbohydrates: 0,
            proteins: 0,
            fats: 0,
            product: [],
            color: 'yellow'
        },
        {
            title:'Ужин',
            img: ovosh,
            allCalorias: 0,
            calorias: 0,
            carbohydrates: 0,
            proteins: 0,
            fats: 0,
            product: [],
            color: 'blue'
        },
        {
            title:'Перекус',
            img: sushi,
            allCalorias: 0,
            calorias: 0,
            carbohydrates: 0,
            proteins: 0,
            fats: 0,
            product: [],
            color: 'green'
        }
    ])

    

    useEffect(() => {
        let copy = [...meal]
        copy[0].allCalorias = Math.round(CalloriasAll * 0.25)
        copy[1].allCalorias = Math.round(CalloriasAll * 0.40)
        copy[2].allCalorias = Math.round(CalloriasAll * 0.20)
        copy[3].allCalorias = Math.round(CalloriasAll * 0.15)
        setMeal(copy)
    }, [CalloriasAll])

    useEffect(() => {
        localStorage.setItem('localMeal',JSON.stringify(meal)) 
    }, [JSON.stringify(meal)])

    useEffect(() => {

        let sumCarbohydrates = 0
        let sumCarbohydratesSum = meal.map(v => v.carbohydrates)
        sumCarbohydratesSum.forEach((num) => {
            sumCarbohydrates += num
        })

        let sumProteins = 0
        let sumProteinsSum = meal.map(v => v.proteins)
        sumProteinsSum.forEach((num) => {
            sumProteins += num
        })

        let sumFats = 0
        let sumFatsSum = meal.map(v => v.fats)
        sumFatsSum.forEach((num) => {
            sumFats += num
        })

        let sumKcal = 0
        let MealSum = meal.map(v => v.calorias)
        MealSum.forEach((num) => {
            sumKcal += num
        })

        const KCPFAll = {
            sumKcal: sumKcal,
            sumCarbohydrates: sumCarbohydrates,
            sumProteins: sumProteins,
            sumFats: sumFats
        }
        dispatch(setCalloriasSum(KCPFAll))
        
    }, [meal])
    
    function MenuClick(event) {
        let ff = event.target.value
        setTitleIndex(ff)
        setmodalMenuEdaActive(true)
        if (ff === 'Завтрак') {
            setCountProduct(meal[0].product.length)
            setMyBasket(meal[0].product)
        } 
        if (ff === 'Обед') {
            setCountProduct(meal[1].product.length)
            setMyBasket(meal[1].product)
        } 
        if (ff === 'Ужин') {
            setCountProduct(meal[2].product.length)
            setMyBasket(meal[2].product)
        } 
        if (ff === 'Перекусы') {
            setCountProduct(meal[3].product.length)
            setMyBasket(meal[3].product)
        }
    }

    return (
    <div>
        <div className="MenuEda">
            {
                meal.length > 0 &&(
                    meal.map(eat =>
                        <div key={eat.title} className={eat.color}>
                            <div className='mealFlex'>
                                <div>
                                    <h3 className='mealH3'>{eat.title}</h3>
                                    {eat.product.map(v => <p className='mealP' key={Math.random()}>{v.Product}</p>)}
                                </div>
                                <img className='meanImg' src={eat.img} alt="" />
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', flex:'0 0 auto'}}>
                                <p className='mealNumber'>{eat.calorias} / {eat.allCalorias}<span>ккал</span></p>
                                <button value={eat.title} onClick={MenuClick} className='mealMore'>Больше</button>
                            </div>
                        </div>

                    )
                )
            }
        </div>
        <ModalMenuEda titleIndex={titleIndex}
            modalMenuEdaActive={modalMenuEdaActive}
            setmodalMenuEdaActive={setmodalMenuEdaActive}
            countProduct={countProduct}
            setCountProduct={setCountProduct}
            meal={meal}
            setMeal={setMeal}
            myBasket={myBasket}
            setMyBasket={setMyBasket}
            />
        
    </div>
      
    );
  }
  
  export default MenuEda;