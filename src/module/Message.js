import image2 from '../image/Img2.png';
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Message = (prop) => {
    const navigate = useNavigate();
    const signIn = useSelector((state) => state.signIn);

    return (
        <div>
            {prop.data ? prop.data.map((row) => (
                <div style={{ display: 'flex', backgroundColor: '#A2B59F', textAlign: 'left', padding: '8xp 36xp', marginTop: '1px' }}>
                    <div style={{
                        borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', minWidth: '100px'
                    }}>
                        <img src={image2} alt='123' style={{ objectFit: 'cover', width: '100%' }} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <a href='/'>{row.name}</a>
                        <article style={{ display: 'inline' }}>{row.company.catchPhrase}</article>
                    </div>
                </div>
            )) : (
                <div></div>
            )}
            {signIn.signin ? (
                <div style={{ display: 'flex', backgroundColor: '#A2B59F', textAlign: 'left', padding: '8xp 36xp', marginTop: '1px' }}>
                    <div style={{
                        borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', minWidth: '100px'
                    }}>
                        <img src={image2} alt='123' style={{ objectFit: 'cover', width: '100%' }} />
                    </div>
                    <div style={{ width: '100%' }}>
                        <a href='/'>{signIn.userName}</a>
                        <input style={{ display: 'inline', width: '80%' }} value={prop.value} onChange={(e) => { prop.handleChange(e.target.value); }} onKeyPress={(e) => { prop.onKeyDown(e) }}></input>
                    </div>
                </div>
            ) : (<div style={{ display: 'flex', backgroundColor: '#A2B59F', textAlign: 'left', padding: '8xp 36xp', marginTop: '1px' }}>
                <div style={{
                    borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', minWidth: '100px'
                }}>
                    <img src={image2} alt='123' style={{ objectFit: 'cover', width: '100%' }} />
                </div>
                <div style={{ width: '100%' }}>
                    <a onClick={() => { navigate('/ActionForm2') }} style={{ cursor: 'pointer' }}>登入後可留言</a>
                </div>
            </div>)
            }
        </div>
    )
}

export default Message;