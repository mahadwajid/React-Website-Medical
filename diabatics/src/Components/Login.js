import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getSignup } from '../Service/API';
import '../Assessts/Login.css';
import axios from 'axios';

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate
    const [details, setDetails] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setDetails({ ...details, [event.target.name]: event.target.value });
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await getSignup(details);
            const token = response.data.token;
            localStorage.setItem('adminToken', token);
            console.log(localStorage.getItem('adminToken'));
            localStorage.setItem('userEmail', details.email);

            navigate('/Admin');
        } catch (error) {
            console.error('Login failed', error);
        }
    };
    return (
           <div className='Back-login-container'>

            <div className="form-container">
                <p className="title">Login</p>
                <form className="form">
                    <div className="input-group">
                        <label for="username">Username</label>
                        <input  onChange={handleChange} type="text" name="email" id="username" placeholder="@gmail.com" />
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input onChange={handleChange} type="password" name="password" id="password" placeholder="" />
                    
                    </div>


                    <button className="sign" onClick={handleLogin}>Sign in</button>



                </form>

            </div>
        </div>


    );
}

export default Login;
