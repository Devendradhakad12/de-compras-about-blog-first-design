import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [signIn, toggle] = React.useState(true);
    return (
        <>
        <div className="login-container">
            <div className="signUpContainer" data-signinIn={signIn}>
                <form action="">
                    <h1 className='form-title'>Join Us</h1>
                    <input type="text" name="" id="" placeholder='Username'/>
                    <input type="email" name="" id="" placeholder='Email'/>
                    <input type="password" name="" id="" placeholder='Password'/>
                    <button className='btn'>Sign Up</button>
                </form>
            </div>

            <div className="signInContainer" data-signinIn={signIn}>
                <form action="">
                    <h1 className='form-title'>Sign In</h1>
                    <input type="text" name="" id="" placeholder='Username or Email' />
                    <input type="password" name="" id="" placeholder='Password'/>
                    <Link className='anchor'>Trouble Logging In...</Link>
                    <button className='btn'>Sign In</button>
                </form>
            </div>

            <div className="overLayContainer" data-signinIn={signIn}>
                <div className="overLay" data-signinIn={signIn}>
                    <div className="overLayPanel leftOverlayPanel" data-signinIn={signIn}>
                        <h1 className='overlay-h1'>Welcome Back!</h1>
                        <p className='overlay-para'>We got something new for you!!!</p>
                        <button className="ghostButton btn" onClick={() => toggle(true)}>Sign In</button>
                    </div>
                    <div className="overLayPanel rightOverlayPanel" data-signinIn={signIn}>
                        <h1 className='overlay-h1'>Konnichiwa, Nakama!</h1>
                        <p className='overlay-para'>Join our crew...</p>
                        <button className="ghostButton btn" onClick={() => toggle(false)}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login
