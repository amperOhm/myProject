import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveSignOut } from "../app/action/signIn";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signIn = useSelector((state) => state.signIn);

    const header = {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '99999',
        width: '100%',
        height: '100px',
        backgroundColor: '#D5E1DF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const divHead = {
        backgroundColor: '#282c34',
        margin: '100px 0px 0px 0px'
    };

    return (
        <div>
            <header style={header} className="shape-ex3">
                <div style={{ flex: '10', textAlign: 'center' }}>
                    <h1 style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => { navigate('/') }}>OHM.STUDIO</h1>
                </div>
                {!signIn.signin ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', flex: '1', position: "absolute", right: '0px' }}>
                        <a style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => { navigate('/ActionForm2') }}>登入</a>
                        <a style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => { navigate('/ActionForm3') }}> 註冊</a>
                    </div>
                )
                    : (
                        <a style={{ marginRight: '10px', cursor: 'pointer' }} onClick={() => { dispatch(saveSignOut()); }}> 登出</a>
                    )
                }
            </header >
            <div style={divHead}></div>
        </div >
    );
}