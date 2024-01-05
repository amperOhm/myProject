/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import '../App.css'
import { useNavigate } from "react-router-dom";


function AppHome() {
    const navigate = useNavigate();

    const myTest = {
        backgroundColor: '#282c34',
        display: 'flex',
        width: '100%',
        height: '100%',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        minHeight: '100vh',
        // maxHeight: '100vh'
    };
    // { backgroundColor: '#ABBAEA', height: '30%' }

    const myTest2 = {
        backgroundColor: '#282c34',
        display: 'flex',
        width: '100%',
        height: '200px',
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        // minHeight: '100vh',
        margin: '10px',
    };

    const divTestStyle = (color) => {
        let myStyle = {
            backgroundColor: color,
            width: '100%',
            height: '100%',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // minHeight: '30vh',
            margin: '10px',
            borderRadius: '50px',
            fontFamily: 'fantasy',
            fontSize: '3rem'
        };

        return myStyle;
    }

    const textStyle = {
        color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const clickFunc = () => {
        // const btn = document.getElementById("btn");
        const textbox = document.getElementById("textbox");
        // btn.addEventListener("click", function () {
        if (textbox.classList.contains("testActive") === true) {
            textbox.classList.add("testClose");
            textbox.classList.remove("testActive");
        } else {
            textbox.classList.add("testActive");
            textbox.classList.remove("testClose");
        }
        // });
    }

    return (
        <div className="App">
            <div style={myTest}>
                <div style={myTest2}>
                    <div style={divTestStyle('#ABBAEA')}>
                        {/* <button onClick={onClick}>BACK to AppFrontPage</button> */}
                        <a id="goToAppHome" href="" onClick={() => { navigate('/') }} style={textStyle}>
                            BACK to AppFrontPage
                        </a>
                    </div>
                </div>

                <div id='textbox2' className='App-logo' style={{ width: '100px', height: '100px', backgroundColor: '#B57FB3', margin: '40px' }}></div>

                <button id='btn' style={{ padding: '10px' }} className='tooltip' onClick={clickFunc}>
                    animate
                    <span className="tooltiptextBottom">會有方塊跑出來歐</span>
                </button>
                <div style={{ width: '100%', alignItems: 'left' }}>
                    <div id='textbox' style={{ width: '100px', height: '100px', backgroundColor: '#ABBAEA', marginLeft: '-100px' }}></div>
                </div>
            </div>
        </div>
    );
}

export default AppHome;
