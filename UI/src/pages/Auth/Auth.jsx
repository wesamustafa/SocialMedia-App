import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch } from 'react-redux'
import { logIn, signUp } from '../../actions/AuthAction'
const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        confirmpass: ""
    })
    const [confirmPass, setConfirmPass] = useState(true)
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            // if (data.password !== data.confirmpass) {
            //     setConfirmPass(false)
            // } else {
            //     setConfirmPass(true)
            // }
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
        } else {
            dispatch(logIn(data))
        }
    }
    const resetForm = () => {
        setConfirmPass(true);
        setData({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
            confirmpass: ""
        })
    }
    return (
        <div className="Auth">
            {/* left side */}
            <div className="a-left">
                <img src={Logo} alt="logo" />
                <div className="WebName">
                    <h1>WESSAM Media</h1>
                    <h5>Explore the ideas throughout the world</h5>
                </div>
            </div>
            {/* <Signup /> */}
            {/* right side */}
            <div className='a-right'>
                <form className="InfoForm AuthForm" onSubmit={handleSubmit}>
                    <h3>{isSignUp ? "Signup" : "Log in"}</h3>
                    {isSignUp && (
                        <div>
                            <input type="text" placeholder='First Name' className='InfoInput' name='firstname' onChange={handleChange} value={data.firstname} />
                            <input type="text" placeholder='Last Name' className='InfoInput' name='lastname' onChange={handleChange} value={data.lastname} />
                        </div>
                    )}
                    <div>
                        <input type="text" placeholder='Username' className='InfoInput' name='username' onChange={handleChange} value={data.username} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' className='InfoInput' name='password' onChange={handleChange} value={data.password} />
                        {isSignUp && (
                            <input type="password" placeholder='Confirm Password' className='InfoInput' name='confirmpass' onChange={handleChange} value={data.confirmpass} />
                        )}
                    </div>
                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Confirm Password is not same
                    </span>
                    <div>
                        <span style={{ fontSize: "14px", cursor: "pointer" }} onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}>{isSignUp ? "Already have an account. Login!" : "Don't have an account? Sign Up"}</span>
                    </div>
                    <button className="button InfoButton" type='submit'>{isSignUp ? "Signup" : "Log in"}</button>
                </form>
            </div>
        </div>
    )
}
// function LogIn() {
//     return (
//         <>
//             <div className='a-right'>
//                 <form className="InfoForm AuthForm">
//                     <h3>SignIn</h3>
//                     <div>
//                         <input type="text" placeholder='Username' className='InfoInput' name='username' />
//                     </div>
//                     <div>
//                         <input type="text" placeholder='Password' className='InfoInput' name='password' />
//                     </div>
//                     <div>
//                         <span style={{ fontSize: "14px" }}>Don't have an account. Sign up!</span>
//                         <button className="button InfoButton" type='submit'>Login</button>
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }
// function Signup() {
//     return (
//         <>
//             <div className='a-right'>
//                 <form className="InfoForm AuthForm">
//                     <h3>Signup</h3>
//                     <div>
//                         <input type="text" placeholder='First Name' className='InfoInput' name='firstname' />
//                         <input type="text" placeholder='Last Name' className='InfoInput' name='lastname' />
//                     </div>
//                     <div>
//                         <input type="text" placeholder='Username' className='InfoInput' name='username' />
//                     </div>
//                     <div>
//                         <input type="text" placeholder='Password' className='InfoInput' name='password' />
//                         <input type="text" placeholder='Confirm Password' className='InfoInput' name='confirmpass' />
//                     </div>
//                     <div>
//                         <span style={{ fontSize: "14px" }}>Already have an account. Login!</span>
//                     </div>
//                     <button className="button InfoButton" type='submit'>Signup</button>
//                 </form>
//             </div>
//         </>
//     )
// }
export default Auth