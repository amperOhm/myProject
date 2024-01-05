/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import '../../App.css';
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveSignIn } from "../../app/action/signIn";

export default function ActionForm2() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.usersData);

    const timer = useRef();

    const [accountWarningMsg, setAccountWarningMsg] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('hidden');

    useEffect(() => {
        console.log('in:' + usersData);
    }, []);

    const [formState, setFormState] = useState({
        account: '',
        password: '',
    });

    const divStyle = {
        backgroundColor: '#D18063',
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        border: 'solid #AAAAAA',
        color: 'black',
        borderRadius: '50px',
        position: 'relative',
        marginBottom: '100px'
    };

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        let pass = false;
        for (let i = 0; i < usersData.length; i++) {
            if (usersData[i].account === formState.account && usersData[i].password === formState.password) {
                pass = true;
                break;
            }
        }

        if (!pass) {
            setAccountWarningMsg('登入失敗');
            setPasswordWarning('visible');
            event.preventDefault();
            return;
        } else {
            setPasswordWarning('hidden');
        }

        event.preventDefault();

        dispatch(saveSignIn(formState));

        setAccountWarningMsg('登入成功，3秒後跳轉頁面');
        setPasswordWarning('visible');
        timer.current = setTimeout(() => {
            clearTimeout(timer.current);
            navigate('/Sticky');
        }, 3000);
    };

    return (
        <div>
            <div className="myTestContent">
                <div style={divStyle}>
                    <h1 className="shape-ex3">登入</h1>

                    <form onSubmit={(e) => { handleSubmit(e) }} >
                        <div style={{ fontSize: '20px', margin: '20px', minHeight: '50vh', position: 'relative' }}>
                            <Input
                                label='帳號'
                                name='account'
                                value={formState.account}
                                handleChange={handleChange}
                            ></Input>

                            <Input
                                label='密碼'
                                name='password'
                                value={formState.password}
                                handleChange={handleChange}
                            ></Input>
                            <p style={{ color: 'red', visibility: passwordWarning, margin: '0px' }}>{accountWarningMsg}</p>

                            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                                <input className="button" type="submit" value="登入" />
                                <input className="button" onClick={() => { navigate('/ActionForm3'); }} defaultValue={'註冊'} />
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}