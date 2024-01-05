import '../App.css';
import { useRef, useState } from 'react';

export default function PickGame() {
    const [count, setCount] = useState(0);
    const numberNow = useRef(5);

    const timer = useRef();

    // const [buttonColor, setButtonColor] = useState('#A2B59F');

    const myTest = {
        backgroundColor: '#282c34',
        width: '100%',
        height: '100%',
        color: 'white',
        display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        // maxHeight: '100vh'
        position: 'relative',
        flexWrap: 'wrap',
    };

    const tableDivStyle = {
        // position: 'relative',
        width: '100vw',
        height: '50vw',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: '#CB8A90',
        maxHeight: '80vh',
        minHeight: '70vh',
        borderRadius: '50px'
    };

    const pickStyle = {
        width: '30%',
        minHeight: '150px',
        backgroundColor: '#A2B59F',
        margin: '10px',
        borderRadius: '50px',
        overFlow: 'hidden'
    };

    const buttonStyle = {
        borderRadius: '50px',
        width: '100%',
        height: '100%',
        backgroundColor: '#A2B59F', // '#A2B59F'
        fontSize: '20px',
        lineHeight: '5',
        border: '0px'
    };


    const click = (number) => {

        // 如果之前的計時器存在，則先清除
        if (timer.current) {
            clearTimeout(timer.current);
        }

        if (numberNow.current === number) {
            // 按到的是哪個按鈕
            const myButton = document.getElementById('but' + number);
            // 將顏色設定回預設的顏色
            myButton.style.backgroundColor = '#A2B59F';

            // 目前的分數+1
            setCount((value) => value + 1);

            // 取得下一個按鈕號碼 : 1~9號
            let randomInt = Math.floor(Math.random() * (9)) + 1;

            // 生成隨機的顏色
            // const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
            // 固定顏色
            const randomColor = '#D18063';

            // 更新按钮顏色
            const myButton2 = document.getElementById('but' + randomInt);
            myButton2.style.backgroundColor = randomColor;

            // 儲存下一個正確按鈕編號
            numberNow.current = randomInt;

            // 重新設定計時器
            timer.current = setTimeout(() => {
                console.log('TIME OUT');
                clearTimeout(timer.current);
                const countDiv = document.getElementById('countDiv');
                countDiv.style.visibility = 'visible';
            }, 550);

        } else {
            clearTimeout(timer.current);
            const countDiv = document.getElementById('countDiv');
            countDiv.style.visibility = 'visible';
        }

    }

    const countClick = () => {
        // 取得分數圖層的ID
        const countDiv = document.getElementById('countDiv');
        // 隱藏分數圖層
        countDiv.style.visibility = 'hidden';

        // 將分數歸0
        setCount(0);

        // 將預設數字按鈕設為5
        numberNow.current = 5;

        // 將按鈕顏色恢復預設
        for (let i = 1; i <= 9; i++) {
            const myButton = document.getElementById('but' + i);
            myButton.style.backgroundColor = '#A2B59F';
        }

    }

    return (
        <div style={myTest}>

            {/* 分數圖層 */}
            <div id='countDiv' style={{ visibility: 'hidden', position: 'absolute', opacity: '0.8', backgroundColor: 'black', width: '100%', height: '100%' }}>
                <p style={{ fontSize: '100px', margin: '0px' }}>{count}分</p>
                <button onClick={countClick} className='shape-ex3' style={{ fontSize: '20px', border: '0px', padding: '10px', borderRadius: '50px' }}>再來一次</button>
            </div>


            <div style={{ padding: '10px', display: 'flex', width: '90%' }}>
                <div style={tableDivStyle}>
                    <div style={pickStyle} >
                        <button id='but1' className='photo-txt' style={buttonStyle} onClick={() => { click(1) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but2' className='photo-txt' style={buttonStyle} onClick={() => { click(2) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but3' className='photo-txt' style={buttonStyle} onClick={() => { click(3) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but4' className='photo-txt' style={buttonStyle} onClick={() => { click(4) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but5' className='photo-txt' style={buttonStyle} onClick={() => { click(5); }}>{count !== 0 ? count : '點此開始'}</button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but6' className='photo-txt' style={buttonStyle} onClick={() => { click(6) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but7' className='photo-txt' style={buttonStyle} onClick={() => { click(7) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but8' className='photo-txt' style={buttonStyle} onClick={() => { click(8) }}></button>
                    </div>
                    <div style={pickStyle} >
                        <button id='but9' className='photo-txt' style={buttonStyle} onClick={() => { click(9) }}></button>
                    </div>

                </div>
            </div>

        </div>
    )
}