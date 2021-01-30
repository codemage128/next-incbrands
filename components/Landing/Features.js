import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Features extends Component {
    state = {
        isPlaying: false
    };

    openModal = () => {
        this.setState({ isPlaying: true })
    };

    render() {
        return (
            <React.Fragment>
                <section id="features" className="features-area ptb-100 bg-f5f7ff">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="why-section">
                                    <div className="row">
                                        <p className="tag">Trusted by fortune 500's</p>
                                        <h2 className="why-subtitle">Why Use inc brands</h2>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-2"><button className="btn btn-icon"><i className="fa fa-check"></i></button></div>
                                        <div className="col-10 mt-2">
                                            <h4 className="why-title">Behavioral Tracking Leads to more</h4>
                                            <p className="why-content">See the whole scope on eachtression derived from our lead gen or ad networks.</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-2"><button className="btn btn-icon"><i className="fa fa-check"></i></button></div>
                                        <div className="col-10 mt-2">
                                            <h4 className="why-title">Easy To start, Pause or Stop</h4>
                                            <p className="why-content">Our account managers assist our clientele in helping them achieve timelines and more.</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-2"><button className="btn btn-icon"><i className="fa fa-check"></i></button></div>
                                        <div className="col-10 mt-2">
                                            <h4 className="why-title">Integrate with All CRMs.</h4>
                                            <p className="why-content">We integrate our services with all crm systems, including but not limited to Sales Force, Real Geeks, Velocify and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 text-end">
                                <img src='/images/why-us.png' alt="image" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12 col-md-12 text-center mt-5">
                                <ReactPlayer className="video" url="https://www.youtube.com/watch?v=aqz-KE-bpKQ" playing={this.state.isPlaying} />
                            </div>
                            {this.state.isPlaying != true ? (
                                <div className="cta-content">
                                    <div
                                        className="popup-youtube video-btn"
                                        onClick={e => { e.preventDefault(); this.openModal() }}
                                    >
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            ) : (
                                    <></>
                                )}

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;
