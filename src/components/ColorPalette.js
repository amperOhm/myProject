import '../App.css';
import { useState, useEffect } from 'react';

export default function ColorPalette() {
    const [colorR, setColorR] = useState(128);
    const [colorG, setColorG] = useState(128);
    const [colorB, setColorB] = useState(128);

    useEffect(() => {
        changeColorAll();
    }, []);

    const colorChange = () => {
        let hexadecimalR = colorR.toString(16).padStart(2, '0');
        let hexadecimalG = colorG.toString(16).padStart(2, '0');
        let hexadecimalB = colorB.toString(16).padStart(2, '0');

        const myTest = {
            backgroundColor: `#${hexadecimalR}${hexadecimalG}${hexadecimalB}`,//'#D18063',
            display: 'flex',
            width: '90vw',
            height: '100%',
            color: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '90vh',
            // maxHeight: '100vh'
        };

        return myTest;
    }

    const changeColorAll = () => {
        let hexadecimalR = (255 - colorR).toString(16).padStart(2, '0');
        let hexadecimalG = (255 - colorG).toString(16).padStart(2, '0');
        let hexadecimalB = (255 - colorB).toString(16).padStart(2, '0');
        const color = `#${hexadecimalR}${hexadecimalG}${hexadecimalB}`;

        return color;
    }

    const rangeDivStyle = {
        display: 'flex',
    }

    const h3style = {
        // backgroundColor: 'red',
        padding: '1px',
        margin: '0',
        minWidth: '50px'
    };


    return (

        <div className='myTestContent'>
            <div style={colorChange()}>
                <div style={rangeDivStyle}>
                    <h3 style={h3style}>R</h3>
                    <input type='range' min='0' max='255' step='1'
                        value={colorR} onChange={(e) => { setColorR(parseInt(e.target.value)); }} />
                    <h3 style={h3style}>{colorR}</h3>
                </div>
                <div style={rangeDivStyle}>
                    <h3 style={h3style}>G</h3>
                    <input type='range' min='0' max='255' step='1'
                        value={colorG} onChange={(e) => { setColorG(parseInt(e.target.value)) }} />
                    <h3 style={h3style}>{colorG}</h3>
                </div>
                <div style={rangeDivStyle}>
                    <h3 style={h3style}>B</h3>
                    <input type='range' min='0' max='255' step='1'
                        value={colorB} onChange={(e) => { setColorB(parseInt(e.target.value)) }} />
                    <h3 style={h3style}>{colorB}</h3>
                </div>
                <div style={rangeDivStyle}>
                    <p style={{ fontSize: '50px', margin: '0px', color: changeColorAll() }}>{changeColorAll()}</p>
                </div>
            </div>
        </div>
    )

}