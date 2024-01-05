/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
// import './App.css';
import '../App.css'
import { useNavigate } from "react-router-dom";
import image from '../image/carby.jpg';
import image1 from '../image/img1.jpg';

function AppFrontPage() {
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

    const myTest3 = {
        backgroundColor: '#282c34',
        display: 'flex',
        width: '100%',
        height: '200px',
        color: 'white',
        flexDirection: 'column',
        alignItems: 'center',
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
            fontSize: '3rem',
        };

        return myStyle;
    }

    const textStyle = {
        position: 'relative',
        // color: 'white',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50px',
        cursor: 'pointer',
    };

    return (
        <div className="App">
            <div style={myTest}>
                <div style={myTest2}>

                    <div style={divTestStyle('#A2B59F')}>
                        <div style={textStyle} className='opacity-change shape-ex2' onClick={() => { navigate('/Sticky') }}>
                            <p style={{ zIndex: '2' }}>模仿巴哈留言板</p>
                            <img src={image1} alt='123' className='myimg' />
                        </div>
                    </div>

                </div>
                <div style={myTest2}>
                    <div style={divTestStyle('#D18063')}>
                        <div style={textStyle} className='opacity-change shape-ex2' onClick={() => { navigate('/PickGame') }}>
                            <p style={{ zIndex: '2' }}>打地鼠小遊戲</p>
                            <img src={image} alt='123' className='myimg' />
                        </div>
                    </div>
                    <div style={myTest3}>
                        <div style={divTestStyle('#917B56')}>
                            <div style={textStyle} className='opacity-change shape-ex2' onClick={() => { navigate('/Table') }}>
                                <span style={{ zIndex: '2' }}>Table</span>
                                <img src={image1} alt='123' className='myimg' />
                            </div>
                        </div>
                        <div style={divTestStyle('#B57FB3')}>
                            <div style={textStyle} className='opacity-change shape-ex2' onClick={() => { navigate('/ColorPalette') }}>
                                <span style={{ zIndex: '2' }}>調色盤</span>
                                <img src={image1} alt='123' className='myimg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={myTest2}>
                    <div style={divTestStyle('#CB8A90')}>
                        <div style={textStyle} className='opacity-change shape-ex2' onClick={() => { navigate('/') }}>
                            <span style={{ zIndex: '2' }}></span>
                            <img src={image1} alt='123' className='myimg' />
                        </div>
                    </div>
                </div>
            </div>

            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>
    );
}

export default AppFrontPage;
