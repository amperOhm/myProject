/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState('>');

    const navStyle = {
        position: 'fixed',
        width: '150px',
        height: '100%',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '99999',
        marginLeft: '-150px',

        backgroundColor: '#83B1C9'
    }

    const toggleStyle = {
        position: 'absolute',
        width: '40px',
        height: '40px',
        top: '50%',
        left: '100%',
        right: '0',
        zIndex: '99999',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'fantasy',
        fontSize: '3rem',
        backgroundColor: '#838BB2',
        cursor: 'pointer',
        userSelect: 'none',
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }

    const changeToggle = () => {
        const navDiv = document.getElementById("navDiv");
        if (navDiv.classList.contains("navActive") === true) {
            navDiv.classList.add("navClose");
            navDiv.classList.remove("navActive");
        } else {
            navDiv.classList.add("navActive");
            navDiv.classList.remove("navClose");
        }

        if (toggle === '>') {
            setToggle('<');
        } else {
            setToggle('>');
        }
    }

    return (
        <div>
            <nav id='navDiv' style={navStyle}>
                <div style={{ position: 'relative', height: '100%' }}>
                    <h1>導覽頁</h1>
                    <ul style={{ textAlign: 'left' }}>
                        <li>
                            <a onClick={() => { navigate('/') }}>首頁</a>
                        </li>
                        {/* <li>
                            <a onClick={() => { navigate('/AppHome') }}>動畫頁</a>
                        </li>
                        <li>
                            <a onClick={() => { navigate('/ActionForm1') }}>redux練習</a>
                        </li> */}
                        <li>
                            <a onClick={() => { navigate('/ActionForm2') }}>登入</a>
                        </li>
                        {/* <li>
                            <a onClick={() => { navigate('/ActionForm3') }}>redux練習3</a>
                        </li> */}
                        {/* <li>
                            <a onClick={() => { navigate('/PageSize') }}>控制元件縮放</a>
                        </li> */}
                        <li>
                            <a onClick={() => { navigate('/Sticky') }}>留言板</a>
                        </li>
                        {/* <li>
                            <a onClick={() => { navigate('/Sticky2') }}>Sticky練習2</a>
                        </li> */}
                        <li>
                            <a onClick={() => { navigate('/Table') }}>Table</a>
                        </li>
                        <li>
                            <a onClick={() => { navigate('/ColorPalette') }}>調色盤</a>
                        </li>
                        <li>
                            <a onClick={() => { navigate('/PickGame') }}>打地鼠</a>
                        </li>

                    </ul>
                    <div style={toggleStyle} onClick={changeToggle}>
                        {toggle}
                    </div>
                </div>
            </nav>

        </div>
    )
}
