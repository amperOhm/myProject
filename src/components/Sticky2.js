import '../App.css';
import image1 from '../image/img1.jpg';

export default function Sticky2() {

    // 如果有一個父容器設置了 overflow: hidden; 或者其他值，並且這個容器內包含 
    // position: sticky; 的子元素，這可能會導致 position: sticky; 失效

    const myTest = {
        backgroundColor: '#282c34',
        display: 'flex',
        width: '100%',
        height: '100%',
        color: 'white',
        // flexDirection: 'column',
        // alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200vh',
        // maxHeight: '100vh'
        position: 'relative',
    };

    const perspectiveStyle = {
        position: 'sticky',
        width: '50%',
        height: '100vh',
        backgroundColor: '#CB8A90',
        minWidth: '300px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        overflow: 'hidden',
        top: '100px'
    };

    const textStyle = {
        position: 'relative',
        // color: 'white',
        width: '30%',
        height: '25%',
        minWidth: '140px',
        maxHeight: '140px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '50px',
        cursor: 'pointer',

    };

    return (
        <div className="App" >
            <div style={myTest}>

                <div style={perspectiveStyle}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: '5px' }}>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                        <div style={textStyle}>
                            <img src={image1} alt='123' style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}