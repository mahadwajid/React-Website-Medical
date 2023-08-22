import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { getSignup } from '../Service/API';
import '../Assessts/Login.css';

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
            const token = await getSignup(details);
            localStorage.setItem('adminToken', token);
            localStorage.setItem('userEmail', details.email);

            navigate('/Admin');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken'); // Clear the token on logout
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
