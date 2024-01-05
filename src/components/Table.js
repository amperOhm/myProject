import '../App.css';
import { useEffect, useState } from 'react';
import image from '../image/Img2.png';
import { testApi } from '../apis/testApi';
import TableComponent from '../module/TableComponent ';

export default function Table() {

    const [apiData, setApiData] = useState([]);
    const [pickData, setPickData] = useState([]);

    useEffect(() => {
        myApi();

    }, []);

    // 這是一種寫法
    // const xxx = async () => {}

    async function myApi() {
        const response = await testApi();
        if (response) {
            setApiData(response);
        }
    }

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
        flexWrap: 'wrap'
    };

    const tableDivStyle = {
        // position: 'relative',
        width: '90vw',
        height: '80vh',
        overflow: 'auto',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#CB8A90'
    };

    const clickFun = (rowData) => {
        const newApiData = apiData.filter((row) => {
            return rowData.id !== row.id;
        });

        setApiData(newApiData);

        // const newPickData = [...pickData, rowData];
        // setPickData(newPickData);

        setPickData((token) => {
            return [...token, rowData].sort((a, b) => a.id - b.id);
        })

    }

    const clickBackFun = (rowData) => {
        const newPickData = pickData.filter((row) => {
            return row.id !== rowData.id;
        });

        setPickData(newPickData);

        setApiData((token) => {
            return [...token, rowData].sort((a, b) => a.id - b.id);
        });

    };

    return (
        <div>
            <div style={myTest}>
                <div style={{ padding: '10px', display: 'flex', width: '90%', }}>
                    <div style={tableDivStyle}>

                        {/* {
                        apiData.length > 0 ? apiData.map((row) => {
                            return (<div>{row.id}</div>)
                        }) : (
                            <div>Loading...</div>
                        )
                    } */}
                        <TableComponent data={apiData} clickFun={clickFun} />
                    </div>
                    <div style={tableDivStyle}>
                        <TableComponent data={pickData} clickFun={clickBackFun} />
                    </div>
                </div>

                {/* 練習留言板 */}
                {/* <div style={{ padding: '10px', width: '50vw', backgroundColor: '#CB8A90', minHeight: '50vh', minWidth: '500px' }}>
                    <div style={{ display: 'flex', backgroundColor: '#A2B59F', textAlign: 'left', padding: '8xp 36xp', marginTop: '1px' }}>
                        <div style={{
                            borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', minWidth: '100px'
                        }}>
                            <img src={image} alt='123' style={{ objectFit: 'cover', width: '100%' }} />
                        </div>
                        <div style={{
                            width: '100%'
                        }}>
                            <a href='/'>123</a>
                            <article style={{ display: 'inline' }}>這樣設置後，文字應該會根據父元素的寬度自動換行。如果仍然存在問題，請確保父元素有足夠的寬度，並且沒有被其他樣式覆蓋，這樣文字才能正確自動換行。</article>
                        </div>
                    </div>


                    <div style={{ display: 'flex', backgroundColor: '#A2B59F', textAlign: 'left', padding: '8xp 36xp', marginTop: '1px' }}>
                        <div style={{
                            borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', minWidth: '100px'
                        }}>
                            <img src={image} alt='123' style={{ objectFit: 'cover', width: '100%' }} />
                        </div>
                        <div style={{
                            width: '100%'
                        }}>
                            <a href='/'>123</a>
                            <article style={{ display: 'inline' }}>這樣設置後，文字應該會根據父元素的寬度自動換行。如果仍然存在問題，請確保父元素有足夠的寬度，並且沒有被其他樣式覆蓋，這樣文字才能正確自動換行。</article>
                        </div>
                    </div>

                </div> */}

            </div>


        </div>
    )

}