import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Landing/Banner';
import Partner from '../components/Landing/Partner';
import About from '../components/Landing/About';
import Features from '../components/Landing/Features';
import Blog from '../components/Landing/Blog';

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Partner />
                <About />
                <Features />
                <Blog />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
