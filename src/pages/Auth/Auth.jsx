import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="logo" />
                <div className="WebName">
                    <h1>WESSAM Media</h1>
                    <h5>Explore the ideas throughout the world</h5>
                </div>
            </div>
            <LogIn />
        </div>
    )
}
function LogIn() {
    return (
        <>
            <div className='a-right'>
                <form className="InfoForm AuthForm">
                    <h3>SignIn</h3>
                    <div>
                        <input type="text" placeholder='Username' className='InfoInput' name='username' />
                    </div>
                    <div>
                        <input type="text" placeholder='Password' className='InfoInput' name='password' />
                    </div>
                    <div>
                        <span style={{ fontSize: "14px" }}>Don't have an account. Sign up!</span>
                        <button className="button InfoButton" type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
function Signup() {
    return (
        <>
            <div className='a-right'>
                <form className="InfoForm AuthForm">
                    <h3>Signup</h3>
                    <div>
                        <input type="text" placeholder='First Name' className='InfoInput' name='firstname' />
                        <input type="text" placeholder='Last Name' className='InfoInput' name='lastname' />
                    </div>
                    <div>
                        <input type="text" placeholder='Username' className='InfoInput' name='username' />
                    </div>
                    <div>
                        <input type="text" placeholder='Password' className='InfoInput' name='password' />
                        <input type="text" placeholder='Confirm Password' className='InfoInput' name='confirmpass' />
                    </div>
                    <div>
                        <span style={{ fontSize: "14px" }}>Already have an account. Login!</span>
                    </div>
                    <button className="button InfoButton" type='submit'>Signup</button>
                </form>
            </div>
        </>
    )
}
export default Auth