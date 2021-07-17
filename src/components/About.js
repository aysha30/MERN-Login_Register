import React from 'react'
import ayshapic from '../images/ayshapic.jpeg'

const About = () => {
    return (
        <>
        <div className="container emp-profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img width="50%" src={ayshapic} alt="profile pic" />
                    </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h5>Aysha Yazdani</h5>
                            <h6>Web Developer</h6>
                            <p className="profile-rating mt-3 mb-5">RANKING: <span>1/10</span></p>
                            <ul className="nav nav-tabs">
                                <li className="nav-itam">
                                    <a className="nav-link" id="home-tab" 
                                    data-toggle="tab" href="#home" role="tab">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" 
                                    data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                    </div>
                </div>
                <div className="row">
                    {/* left side url */}
                    <div className="col-md-4">
                        <div className="profile-work">
                            <p>WORK LINKS: </p>
                            <a href="https://github.com/aysha30" target="_aysha">GitHub</a><br/>
                            <a href="https://github.com/aysha30" target="_aysha">GitHub</a><br/>
                            <a href="https://github.com/aysha30" target="_aysha">GitHub</a><br/>
                            <a href="https://github.com/aysha30" target="_aysha">GitHub</a><br/>
                            <a href="https://github.com/aysha30" target="_aysha">GitHub</a><br/>
                        </div>
                    </div>
                    {/* right side data toggle */}
                    <div className="col-md-8 pl-5 about-info">
                        <div className="tab-content profile-tab" id="myTabContent">
                            <div className="tab-pane fade shadow active" id="home" role="tabpanel" aria-labelledby="home-tab" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>User Id</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>789654123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Aysha</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Email</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>abc@def.com</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Phone</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>789654123</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Profession</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Web Developer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade shadow active" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Experience</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Hourly Rate</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>500/hr</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Total Projects</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>10</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>English Level</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>intermediate</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>Availability</label>
                                    </div>
                                    <div className="col-md-6">
                                        <p>6 months</p>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </form>
        </div>

        </>
    )
}

export default About;
