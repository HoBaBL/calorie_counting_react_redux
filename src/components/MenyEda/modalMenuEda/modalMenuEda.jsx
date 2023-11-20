import { useEffect, useState } from "react";
import './modalMenuStyle.css'
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {RxCrossCircled} from 'react-icons/rx'
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";

function ModalMenuEda({modalMenuEdaActive, setmodalMenuEdaActive, titleIndex, setCountProduct, countProduct, meal, setMeal, setMyBasket, myBasket}) {
    const [products, setProducts] = useState([])
    const [myProductActive, setMyProductActive] = useState(true)
    const [newProduct, setNewProduct] = useState([])
    const [newProductActive, setNewProductActive] = useState(true)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        const search = searchValue ?  `&search=${searchValue}` : ''

        fetch(`https://6541009545bedb25bfc30b92.mockapi.io/products?${search}`)
        .then((res) => {
            return res.json();
        })
        .then((arr) => {
            setProducts(arr)
        })
    }, [searchValue])
    
    function basketAdd(product, kcal, carbohydrates, proteins, fats, text) {
        let copy = [...meal]
        let count = 0

        if (titleIndex === 'Завтрак') {
            count = 0
        }
        
        if (titleIndex === 'Обед') {
            count = 1
        } 

        if (titleIndex === 'Ужин') {
            count = 2
        } 

        if (titleIndex === 'Перекус') {
            count = 3
        }
        const BasketProduct = {
            Product: product,
            Kcal: kcal,
            Carbohydrates: carbohydrates,
            Proteins: proteins,
            Fats: fats,
            text: text,
            id: Math.random()
        }
        copy[count].product.push(BasketProduct)
        setCountProduct(copy[count].product.length)

        setMeal(copy)
    }

    function deleteProduct(id) {
        let minusKcal = 0;
        let count = 0

        if (titleIndex === 'Завтрак') {
            count = 0
        }
        
        if (titleIndex === 'Обед') {
            count = 1
        } 

        if (titleIndex === 'Ужин') {
            count = 2
        } 

        if (titleIndex === 'Перекус') {
            count = 3
        }

        let copyDelete = [...meal]
        const masProduct = copyDelete[count].product
        copyDelete[count].product = masProduct.filter(o => o.id !== id)

        copyDelete[count].calorias = minusKcal

        setMeal(copyDelete)
        setMyBasket(meal[count].product)
        setCountProduct(copyDelete[count].product.length)
    }

    function RenderProduct() {
        let count = 0
        let sum = 0;
        let sumCarbohydrates = 0;
        let sumProteins = 0;
        let sumFats = 0
        let copy = [...meal]

        if (titleIndex === 'Завтрак') {
            count = 0
        }
        if (titleIndex === 'Обед') {
            count = 1
        }
        if (titleIndex === 'Ужин') {
            count = 2
        } 
        if (titleIndex === 'Перекус') {
            count = 3
        }

        let sumCarbohydratesBreakfast =  copy[count].product.map(v => v.Carbohydrates)
            sumCarbohydratesBreakfast.forEach((num) => {sumCarbohydrates += num})

            let sumProteinsBreakfast =  copy[count].product.map(v => v.Proteins)
            sumProteinsBreakfast.forEach((num) => {sumProteins += num})

            let sumFatsBreakfast =  copy[count].product.map(v => v.Fats)
            sumFatsBreakfast.forEach((num) => {sumFats += num})

            let sumKcalBreakfast =  copy[count].product.map(v => v.Kcal)
            sumKcalBreakfast.forEach((num) => {sum += num})

            copy[count].calorias = sum
            copy[count].carbohydrates = sumCarbohydrates
            copy[count].proteins = sumProteins
            copy[count].fats = sumFats
            setMyBasket(meal[count].product)
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        let count = 0
        let copy = [...meal]
        if (titleIndex === 'Завтрак') {
            count = 0
        }
        if (titleIndex === 'Обед') {
            count = 1
        }
        if (titleIndex === 'Ужин') {
            count = 2
        } 
        if (titleIndex === 'Перекус') {
            count = 3
        }
        const BasketProduct = {
            Product: data.description,
            Kcal: Number(data.kcal),
            Carbohydrates: Number(data.сarbohydrates),
            Proteins: Number(data.proteins),
            Fats: Number(data.fats),
            text: '',
            id: Math.random()
        }
        copy[count].product.push(BasketProduct)
        setCountProduct(copy[count].product.length)

        setMeal(copy)
        setMyBasket(meal[count].product)
        setNewProduct(data)
        RenderProduct()
    };
    console.log(newProduct)
    return (
        <div className={modalMenuEdaActive ? "modal active" : 'modal'} onClick={() => {setmodalMenuEdaActive(false); setMyProductActive(true); setNewProductActive(true) }}>
                <div className='ModalMenuContent' onClick={e => e.stopPropagation()}>
                    <div className="Modal_close">
                        <button onClick={() => setmodalMenuEdaActive(false)} className="ModalMenuBtn"><IoMdClose size={32}/></button>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px'}}>
                        <h2>{titleIndex}</h2>
                        <button className="circleCountProduct" onClick={() => setMyProductActive(myProductActive =>  !myProductActive)}>
                            <p style={{fontSize:'24px', margin:'0'}}>{countProduct}</p>
                        </button>
                    </div>  
                        <div className={myProductActive && newProductActive ? "ProductActive" : "NoneProductActive"}>
                            <input className="inputModalMenu" type="text" placeholder="Что вы ищете?" value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                            <div className="ScrollContent">
                                {
                                    products.length > 0 &&(
                                        products.map(product =>
                                            <div key={product.id} className="product-style">
                                                <div>
                                                    <h4 className="product-title">{product.title}</h4>
                                                    <p className="product-text">{product.text}</p>
                                                </div>
                                                <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                                                    <p className="product-kcal">{product.kcal} ккал</p>
                                                    <button value={titleIndex} onClick={() => {basketAdd(product.title, product.kcal, product.carbohydrates, product.proteins, product.fats, product.text);RenderProduct()}} className="ModalMenuBtn"><AiOutlinePlusCircle size={30}/></button>
                                                </div>
                                                
                                            </div>
                                        )
                                    )
                                }
                            
                            </div>
                           
                        </div>
                        
                        <div className={myProductActive || !(newProductActive && !myProductActive) ? "NoneProductActive" : "xProductActive"}>
                            <div className="ScrollContent">
                                { 
                                    myBasket.length > 0 && (
                                        myBasket.map(basket => 
                                            <div key={basket.id} className="product-style">
                                                <div>
                                                    <h4 className="product-title">{basket.Product}</h4>
                                                    <p className="product-text">{basket.text}</p>
                                                </div>
                                                <div style={{display:'flex', gap:'10px', alignItems:'center'}}>
                                                    <p className="product-kcal">{basket.Kcal} ккал</p>
                                                    <button onClick={() => {deleteProduct(basket.id); RenderProduct()}} className="ModalMenuBtn"><RxCrossCircled size={30}/></button>
                                                </div>
                                            </div>

                                        )
                                    )
                                }
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className= {newProductActive ? "NoneProductActive" : "ModalAccountFlex"}>
                            <div className='ModalAccountFlexFlex'>
                                <input {...register("description")} placeholder="Описание" className='ModalNewProductInput' type="text" />
                            </div>
                            <div className='ModalAccountFlexFlex'>
                                <input {...register("kcal")} placeholder="Калорийность (ккал)" className='ModalNewProductInput' type="text" />
                            </div>
                            <div className='ModalAccountFlexFlex'>
                                <input {...register("сarbohydrates")} placeholder="Углеводы (г)" className='ModalNewProductInput' type="text" />
                            </div>
                            <div className='ModalAccountFlexFlex'>
                                <input {...register("proteins")} placeholder="Белки (г)" className='ModalNewProductInput' type="text" />
                            </div>
                            <div className='ModalAccountFlexFlex'>
                                <input {...register("fats")} placeholder="Жиры (г)" className='ModalNewProductInput' type="text" />
                            </div>
                            <div className='ModalAccountFlexFlex'>
                                <input type="submit" className="ModalAccountBtn" onClick={() => setNewProductActive(newProductActive => !newProductActive)}/>
                                <input type="button" value="Отменить" onClick={() => setNewProductActive(newProductActive => !newProductActive)} className="ModalAccountBtn close" />
                            </div>
                            
                        </form>
                    <button className={newProductActive ? "ModalEdaAccountBtn" : 'NoneProductActive'} onClick={() => setNewProductActive(newProductActive => !newProductActive)}>Добавить свой продукт</button>
                   
                </div>
            
        </div>
    )
}

export default ModalMenuEda


