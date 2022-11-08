import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css';

const Login = () => {
/*     const [user, setUser] = useState(null);
    const [error, setError] = useState(null); */
    const {userSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       /*  if(user){
           setUser(userSignIn);
        }
        else{
            setError("Please enter a valid user.")
            return;
        } */
        userSignIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.error(error);
        })
        console.log(email, password);
    }
    return (
        <div className = 'form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id=""required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a new account</Link></p>
            
        </div>
    );
};

export default Login;