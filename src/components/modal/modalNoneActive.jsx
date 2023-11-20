import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import { setDataConstruct } from '../../redux/slices/UserSlice'
import React, { useEffect } from 'react';

export default function ModalNoneActive({setModalContent}) {
    const dispatch = useDispatch();

    

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        setModalContent(false)
        dispatch(setDataConstruct(data))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='ModalAccountFlex'>
                <div className='ModalAccountFlexFlex'>
                    <p className='ModalAccountText'>Вес:</p>
                    <input {...register("weight")} className='ModalAccountInput' type="text"/>
                </div>
                <div className='ModalAccountFlexFlex'>
                    <p className='ModalAccountText'>Рост:</p>
                    <input {...register("height")} className='ModalAccountInput' type="text" />
                </div>
                <div className='ModalAccountFlexFlex'>
                    <p className='ModalAccountText'>Возраст:</p>
                    <input {...register("age")} className='ModalAccountInput' type="text" />
                </div>
                <Form.Group  controlId="gender">
                    <Form.Label className='ModalAccountText'>Выберите пол:</Form.Label>
                    <div className="ModalAccountFlexFlex margin-top">
                        <Form.Check
                            id="1"
                            className="radio_gender"
                            type="radio"
                            label="Женский"
                            value="Женский"
                            name="gender"
                            {...register("gender")}
                        />
                        <Form.Check
                            id="2"
                            className="radio_gender"
                            type="radio"
                            label="Мужской"
                            value="Мужской"
                            name="gender"
                            {...register("gender")}
                        />
                    </div>
                    {errors.gender && <p className="errorMsg">{errors.gender.message}</p>}
                </Form.Group>
                {errors.exampleRequired && <p>This field is required</p>}
                <div className="ModalAccountFlexFlex">
                    <input type="submit" value='Изменить' className="ModalAccountBtn"/>
                    <input onClick={() => {setModalContent(false)}} type="button" value='Отменить' className="ModalAccountBtn close"/>
                </div>
                
        </form>
        )
}