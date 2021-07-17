import React from 'react'
import loginimg from '../images/login.svg';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <section className="login">
                <div className="container mt-5">
                    <div className="login-content">
                        <div className="login-form">
                            <h2 className="form-title">Signin</h2>
                            <div className="login-image">
                                <figure>
                                    <img width="50%" src={loginimg} alt="loginimg" />
                                </figure>
                                <NavLink to="/signup" className="login-image-link" >Create an account</NavLink>
                            </div>
                            <form className="register-form" id="regiser-form">
                                
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autocomplete="off"
                                    placeholder="Your email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="text" name="password" id="password" autocomplete="off"
                                    placeholder="Your password"
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="login" id="login" className="form-submit"
                                        value="Login"
                                    />
                                </div>
                            </form>
                            </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
