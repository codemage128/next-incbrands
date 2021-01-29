import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class Features extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({ isOpen: true })
    };

    render() {
        return (
            <React.Fragment>
                <section id="features" className="features-area ptb-100 bg-f5f7ff">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-6">
                                <div class="why-section">
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
                                        <div className="col-2"><button className="btn btn-icon btn-icon-check"><i className="fa fa-check"></i></button></div>
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
                            <div className="col-lg-5 col-md-6">
                                <img src='/images/why-us.png' alt="image" />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-12 col-md-12 text-center mt-5">
                                <img src='/images/cta-bg.jpg' alt="image" />
                            </div>
                            <div className="cta-content">
                                <div
                                    className="popup-youtube video-btn"
                                    onClick={e => { e.preventDefault(); this.openModal() }}
                                >
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ModalVideo
                    channel='youtube'
                    isOpen={this.state.isOpen}
                    videoId='szuchBiLrEM'
                    onClose={() => this.setState({ isOpen: false })}
                />
            </React.Fragment>
        );
    }
}

export default Features;
