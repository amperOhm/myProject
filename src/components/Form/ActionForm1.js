/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import '../../App.css';
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { coffeeOrdered, coffeeRestocked } from '../../app/action/counterSlice';
import { saveFormData } from '../../app/action/formSlice';

export default function ActionForm1() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.counter.numOfCoffee);
    const dataForm = useSelector((state) => state.form);

    useEffect(() => {
        console.log('in:' + data);
    }, []);

    const [formState, setFormState] = useState({
        forminput: '',
        name: '',
        age: ''
    });

    const divStyle = {
        backgroundColor: '#D18063',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: '50%',
        height: '100%',
        border: 'solid #AAAAAA',
        minHeight: '100vh',
        color: 'black',
        borderRadius: '50px',
        position: 'relative'
    };

    const handleChange = (event) => {
        // console.log(`${event.target.name} : ` + event.target.value);
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        console.log(formState);

        // dispatch(coffeeOrdered(2));
        dispatch(saveFormData(formState));

        event.preventDefault();
    };

    const checkData = () => {
        // dispatch(coffeeRestocked(2));
        console.log(`dataForm : ${dataForm.forminput}`);
    };

    return (
        <div>
            <div className="myTestContent">
                <div style={divStyle}>
                    <h1 className="shape-ex3">練習Action</h1>

                    <form onSubmit={(e) => { handleSubmit(e) }} >
                        <div style={{ fontSize: '20px', margin: '20px', minHeight: '80vh', position: 'relative' }}>
                            {/* <label>
                                <div style={{ textAlign: 'left' }}>Name:</div>
                                <input name='forminput' type="text"
                                    className="input"
                                    value={formState.forminput}
                                    onChange={(e) => { handleChange(e) }} />
                            </label> */}
                            <Input
                                label='Forminput'
                                name='forminput'
                                value={formState.forminput}
                                handleChange={handleChange}
                            ></Input>

                            <Input
                                label='Name'
                                name='name'
                                value={formState.name}
                                handleChange={handleChange}
                            ></Input>

                            <Input
                                label='Age'
                                name='age'
                                value={formState.age}
                                handleChange={handleChange}
                            ></Input>
                            <h2>{data}</h2>
                            <h2>name : {dataForm.name}</h2>
                            <h2>age : {dataForm.age}</h2>

                            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                                <input className="button" type="submit" value="Submit" />
                                <input className="button" onClick={() => { checkData(); }} defaultValue={'data'} />
                            </div>
                        </div>

                    </form>

                </div>

                <p></p>
                <div style={divStyle}>
                    <h1 className="shape-ex3">練習Action</h1>

                </div>
            </div>
        </div>
    );
}