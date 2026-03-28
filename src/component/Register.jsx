
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

const Register = () => {
    const auth = getAuth(app);
    console.log(auth);
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                console.log(user);
                alert("Registration Successfull")
                navigate("/login")

            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
                alert(error.message);
            });
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Register</h2>
                <form className='space-y-4' onSubmit={handleRegister}>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' placeholder='Enter your Email' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2' />
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' id='password' placeholder='Enter your Password' className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2' />
                    </div>
                    <button type='submit' className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-900'>Sign Up</button>
                </form>
                <p className='text-sm text-center text-gray-600'>Already have an Account? <Link to={"/login"} className='text-blue-600 hover:underline'>Please Log in</Link></p>
            </div>
        </div>
    )
}

export default Register
