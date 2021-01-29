import React, { Component } from 'react';
import Link from 'next/link';

class Blog extends Component {
    render() {
        return (
            <section id="blog" className="blog-area blog-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2 className="news-title">inc brands <span>news</span></h2>
                        <p>Get the lastest updates on all of our brands! From new projects to new release, special events and more. Subscribe to see even more updates!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 one">
                            <div className="image">
                                <img src="/images/agency-blog1.jpg" alt="image" />
                            </div>
                            <div className="blog-one blog">
                                <p>Brand Releases</p>
                                <h4>Residential.com test run ready for take off.</h4>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 two">
                            <div className="image">
                                <img src="/images/agency-blog2.jpg" alt="image" />
                            </div>
                            <div className="blog blog-two">
                                <p>Marketing Tips</p>
                                <h4>Lead Generation is changing and it's much better..</h4>
                                <i className="fa fa-arrow-right"></i>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 three">
                            <div className="image">
                                <img src="/images/agency-blog3.jpg" alt="image" />
                            </div>
                            <div className="blog blog-third">
                                <p>Holiday & More</p>
                                <h4>Celebrate the holidays with more leads.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
