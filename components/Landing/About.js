import React, { Component } from 'react';

const About = () => {
    return (
        <section id="about" className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-12 about-us-left">
                    </div>
                    <div className="col-lg-8 col-md-12 about-us-right">
                        <div className="about-content">
                            <p className="tag">The numbers</p>
                            <br />
                            <h2>More Leads Higher ROI..</h2>
                            <div className="row mt-5">
                                <div className="col-lg-12 col-md-12">
                                    <h3 className="about-sub-title">Masters in quantity & quality. We think around the box.</h3>
                                </div>
                                <div className="col-lg-12 col-md-12 mt-3">
                                    <p className="about-sub-content">Our advanced tehnologies for tracking consumer behavior give you the competitive advantage you need to be able to close deals faster, smarter, and not waste your time in calling forced leads other companiese register. All our clients are specifically requesting to connect on their own will.</p>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <button className="btn btn-primary btn-about-read">LEARN MORE</button>
                                    <button className="btn btn-secondary btn-about-terminal">READ OUR TESTIMONIALS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-12">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <div className="icon">
                                    <img src='/images/icon1.png' alt="icon" />
                                </div>
                                <h3>Online Marketing</h3>
                            </div>
                            <div className="price">
                                Many aspects of computing and rechnology and the term is more recognizable than before.
                                </div>
                            <a href="#" className="read-more"><i className="fa fa-arrow-right"></i> READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="pricing-table">
                            <div className="pricing-header">
                                <div className="icon">
                                    <img src='/images/icon2.png' alt="icon" />
                                </div>
                                <h3>Advanced Analytics</h3>
                            </div>
                            <div className="price">
                                Many aspects of computing and technology and the term is more recognizable than before
                                </div>
                            <a href="#" className="read-more"><i className="fa fa-arrow-right"></i> READ MORE</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="pricing-table subscription-table">
                            <div className="pricing-header">
                                <h3 className=" subscription">Subscribe Now</h3>
                            </div>
                            <div className="price subscription">
                                Many aspects of computing and technology and the term is more recognizable than before
                                </div>
                            <input className="form-control mb-5 subscrption-email" type="text" placeholder="Enter your email..."></input>
                            <button className="btn btn-blue btn-block btn-subscription">Subscribe now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
