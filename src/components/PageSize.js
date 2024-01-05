import React from "react";
import image2 from '../image/Img2.png';
import '../App.css';

export default function PageSize() {

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
    };

    const divStyle = {
        position: 'relative',
        width: '50vw',
        height: '60vw',
        minWidth: '300px',
        minHeight: '300px',
        backgroundColor: '#D18063',
        marginTop: '10px',
        display: 'flex',
        // alignItems: 'left',
        justifyContent: 'left',
        padding: '10px',
        flexDirection: 'column',
    };

    const textStyle = {
        position: 'relative',
        // color: 'white',
        width: '40%',
        height: '100%',
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'left',
        overflow: 'hidden',
        cursor: 'pointer',
    };

    return (
        <div style={myTest}>
            <div style={divStyle}>

                <div style={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'left' }}>
                    <div style={textStyle}>
                        <img src={image2} alt='123' style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    <div style={textStyle}>
                        <p>contain:自動調整比例縮放，保證圖片始終保持完整的顯示，不剪裁圖片</p>
                    </div>
                </div>
                <div style={{ height: '10%' }}>
                    <img src={image2} alt='123' style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>

            <div style={divStyle}>
                <div style={{ width: '100%', height: '50%', display: 'flex', justifyContent: 'left' }}>
                    <div style={textStyle}>
                        <img src={image2} alt='123' style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={textStyle}>
                        <p>cover:對圖片等比例縮放，超出去的部分會被隱藏</p>
                    </div>
                </div>
                <div style={{ height: '10%' }}>
                    <img src={image2} alt='123' style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>

        </div>
    );
}