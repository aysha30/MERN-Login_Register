import React from 'react'
import {NavLink} from 'react-router-dom';
import signupimg from '../images/signup.svg';

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                            <form className="register-form" id="regiser-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autocomplete="off"
                                    placeholder="Your name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autocomplete="off"
                                    placeholder="Your email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                                    </label>
                                    <input type="text" name="phone" id="phone" autocomplete="off"
                                    placeholder="Your phone"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                    </label>
                                    <input type="text" name="work" id="work" autocomplete="off"
                                    placeholder="Your profession"
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
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i class="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="text" name="cpassword" id="cpassword" autocomplete="off"
                                    placeholder="Confirm your password"
                                    />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit"
                                        value="Register"
                                    />
                                </div>
                            </form>
                            </div>
                            <div className="signup-image">
                                <figure>
                                    <img width="50%" src={signupimg} alt="signupimg" />
                                </figure>
                                <NavLink to="/login" className="signup-image-link" >I am already registered</NavLink>
                            </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
