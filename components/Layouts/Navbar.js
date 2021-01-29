import React, { Component } from 'react';
import Link from 'next/link';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Navbar extends Component {
    state = {
        collapsed: true,
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        this._isMounted = true;
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);

        this.menuActiveClass()
    }

    menuActiveClass = () => {
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        window.addEventListener("scroll", () => {
            let fromTop = window.scrollY;
            mainNavLinks.forEach(link => {
                if (link.hash) {
                    let section = document.querySelector(link.hash);

                    if (
                        section.offsetTop <= fromTop &&
                        section.offsetTop + section.offsetHeight > fromTop
                    ) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'navbar-collapse collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <React.Fragment>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src="/images/white-logo.png" alt="logo" />
                                <img src='/images/black-logo.png' alt="logo" />
                            </a>
                        </Link>
                        <button
                            onClick={this.toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href="/company" className="nav-link active">
                                        Company
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/our-brands" className="nav-link ">
                                        Our Brands
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/solutions" className="nav-link ">
                                        Solutions
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/support" className="nav-link ">
                                        Support
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/news-room" className="nav-link ">
                                        NewsRoom
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contact" className="nav-link">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <ul className="others-option">
                                <li>
                                    <a href="/get-quote" className="btn btn-primary">GET A QUOTE</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
