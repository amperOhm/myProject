import React, { useState, useEffect } from "react";
import image from '../image/cocacola.jpg';
import image2 from '../image/Img2.png';
import { testApi } from '../apis/testApi';
import Message from "../module/Message";
import { useSelector, useDispatch } from "react-redux";

export default function Sticky() {
    const [apiData, setApiData] = useState([]);
    const [apiData2, setApiData2] = useState([]);
    const signIn = useSelector((state) => state.signIn);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        myApi();
        console.log('apiData:' + apiData);
    }, []);

    async function myApi() {
        const response = await testApi();
        if (response) {
            setApiData(response);
        }
    }

    const myTest = {
        position: 'relative',
        backgroundColor: '#282c34',
        display: 'flex',
        width: '100%',
        height: '100%',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        minHeight: '200vh',
    };

    const divStyle = {
        width: '50vw',
        // maxHeight: '50vw',
        minWidth: '300px',
        minHeight: '600px',
        backgroundColor: '#D18063',
        // padding: '10px',
        flexDirection: 'column',
        display: 'flex',
        flex: '3',
        alignItems: 'center'
    };

    const divStyle2 = {
        position: 'sticky',
        top: '100px',
        height: '100%',
        flex: '1',
        minWidth: '200px',
    };

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            // console.log('Enter 按下！');
            if (msg !== '') {
                setMsg('');
                setApiData([...apiData, { name: signIn.userName, company: { catchPhrase: msg } }]);
            }
        }
    }

    return (
        <div style={myTest}>

            <div style={{ width: '100%', display: 'flex', marginTop: '20px' }}>
                <div style={divStyle2}>
                    <img src={image2} alt='123'
                        style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={divStyle}>
                    <div style={{ marginTop: '5px', width: '90%', height: '80%', minHeight: '400px', backgroundColor: 'white' }}>

                    </div>
                    <div style={{ margin: '5px', width: '90%', backgroundColor: 'gray' }}>
                        <Message
                            data={apiData}
                            onKeyDown={handleKeyDown}
                            value={msg}
                            handleChange={setMsg}
                        />
                    </div>
                </div>
                <div style={divStyle2}>
                    <img src={image} alt='123'
                        style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>





            <div style={{ width: '100%', display: 'flex', marginTop: '20px', }}>
                <div style={divStyle2}>
                    <img src={image2} alt='123'
                        style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={divStyle}>
                </div>
                <div style={divStyle2}>
                    <img src={image} alt='123'
                        style={{ zIndex: '2', width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>

    );

}