/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import '../../App.css';
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { saveUserData } from "../../app/action/usersData";
import { useNavigate } from "react-router-dom";

export default function ActionForm3() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const usersData = useSelector((state) => state.usersData);

    const [accountWarningMsg, setAccountWarningMsg] = useState('');
    const [passwordWarning, setPasswordWarning] = useState('hidden');

    const timer = useRef();

    useEffect(() => {
        console.log('in:' + usersData);
    }, []);

    const [formState, setFormState] = useState({
        account: '',
        password: '',
        password2: '',
    });

    const divStyle = {
        backgroundColor: '#D18063',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        width: '400px',
        // height: '100%',
        border: 'solid #AAAAAA',
        color: 'black',
        borderRadius: '50px',
        position: 'relative',
        marginBottom: '100px'
    };

    const handleChange = (event) => {
        // console.log(`${event.target.name} : ` + event.target.value);
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {

        if (formState.password !== formState.password2) {
            setAccountWarningMsg('密碼比對錯誤，請重新輸入');
            setPasswordWarning('visible');
            event.preventDefault();
            return;
        } else if (formState.password === '' || formState.password2 === '') {
            setAccountWarningMsg('密碼不可為空');
            setPasswordWarning('visible');
            event.preventDefault();
            return;
        }

        let pass = false;
        for (let i = 0; i < usersData.length; i++) {
            if (usersData[i].account === formState.account) {
                pass = true;
                break;
            }
        }

        if (pass) {
            setAccountWarningMsg('帳號重複註冊，請重新輸入');
            setPasswordWarning('visible');
            event.preventDefault();
            return;
        } else {
            setPasswordWarning('hidden');
        }

        dispatch(saveUserData(formState));

        event.preventDefault();

        setAccountWarningMsg('註冊成功，3秒後跳轉頁面');
        setPasswordWarning('visible');
        timer.current = setTimeout(() => {
            clearTimeout(timer.current);
            navigate('/ActionForm2');
        }, 3000);
    };

    return (
        <div>
            <div className="myTestContent">
                <div style={divStyle}>
                    <h1 className="shape-ex3">註冊</h1>

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

                            <Input
                                label='確認密碼'
                                name='password2'
                                value={formState.password2}
                                handleChange={handleChange}
                            ></Input>
                            <p style={{ color: 'red', visibility: passwordWarning, margin: '0px' }}>{accountWarningMsg}</p>

                            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                                <input className="button" type="submit" value="註冊" />
                                <input className="button" onClick={() => { navigate('/ActionForm2'); }} defaultValue={'登入'} />
                            </div>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}