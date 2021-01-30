import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area bg-0b0412">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src='/images/white-logo.png' alt="logo" width="156"/>
                                        </a>
                                    </Link>
                                </div>
                                <ul className="contact-info">
                                    <li>
                                        Zip Brands is a rapidly growing dot-com company that started with simplified search concepts and evolved into one of the fastest-rising networks of online brands in the US. We deliver common sense web brands that cater to the ever-growing consumer demand for online solutions.
                                    </li>
                                    <li className="mt-5">
                                        <img src='/images/footer-brand.png' alt="footer brand" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget pl-3">
                                <h3>Information</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list">
                                            <li>
                                                <Link href="/#">
                                                    <a>About</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>Our brands</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>Our team</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>careers</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>Terms of use</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>Privacy policy</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list">
                                            <li>
                                                <Link href="/#">
                                                    <a>lead generation</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>advertising network</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>support &  help</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#">
                                                    <a>our offices</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Get Support</h3>
                                <div className="row">
                                    <div className="col-12">
                                        <p className="support-text">Phone Support: <span>877-489-4859</span></p>
                                        <p className="support-text">Monday - Friday: <span>7:30am - 4:30pm (PST)</span></p>
                                        <p className="support-text">Saturday:  <span>10:00am - 12:00pm (PST)</span></p>
                                        <p className="support-text">By Email:  <span>support@zipbrands.com</span></p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <p className="support-text"><span>Award winning support, </span> voted number one in customer service.</p>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <p className="support-text">Our Offices: </p>
                                    </div>
                                </div>
                                <div className="row mr1 mt-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 office-rect">
                                                <img src='/images/contact1.png' alt="footer brand" />
                                            </div>
                                            <div className="col-lg-9 office-rect">
                                                <p className="support-text office">+1 805-342-2428</p>
                                                <p className="support-text office">Westlake Village, CA</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 office-rect">
                                                <img src='/images/contact3.png' alt="footer brand" />
                                            </div>
                                            <div className="col-lg-9 office-rect">
                                                <p className="support-text office">+1 468-300-1967</p>
                                                <p className="support-text office">Dallas, TX</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mr1 mt-3">
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 office-rect">
                                                <img src='/images/contact2.png' alt="footer brand" />
                                            </div>
                                            <div className="col-lg-9 office-rect">
                                                <p className="support-text office">+1 833-333-2333</p>
                                                <p className="support-text office">Phoenix, AZ</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="row">
                                            <div className="col-lg-3 office-rect">
                                                <img src='/images/contact4.png' alt="footer brand" />
                                            </div>
                                            <div className="col-lg-9 office-rect">
                                                <p className="support-text office">+1 469-300-1967</p>
                                                <p className="support-text office">Austin, TX (COMING SOON)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-md-12 text-center mt-3">
                                <p className="support-text"> ZipBrands, LLC Copyright 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
