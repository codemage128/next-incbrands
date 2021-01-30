import React, { Component, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 150,
    autoplayTimeout: 6000,
    autoplaySpeed: 6000,
    navText: [
        "<i class='fas fa-angle-left'></i>",
        "<i class='fas fa-angle-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 3,
        },
        1024: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    }
}

class Partner extends Component {

    state = { display: false };

    componentDidMount() {
        this.setState({ display: true })
    }
    render() {
        return (
            <section className="partner-area">
                <div className="container-fluid mr-5 ml-5">
                    <div className="row">
                        {this.state.display ? <OwlCarousel
                            className="partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a>
                                        <img src='/images/agency-partner1.png' alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a>
                                        <img src='/images/agency-partner2.png' alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a>
                                        <img src='/images/agency-partner3.png' alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a>
                                        <img src='/images/agency-partner4.png' alt="logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <a>
                                        <img src='/images/agency-partner5.png' alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </section>
        );
    }
}

export default Partner;
