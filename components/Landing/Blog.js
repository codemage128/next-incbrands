import React, { Component, useState } from 'react';
import Link from 'next/link';

const postData = [
    {
        id: "1",
        background: "/images/blog1.png",
        title: "Brand Releases",
        content: "Residential.com test run ready for take off."
    },
    {
        id: "2",
        background: "/images/blog2.png",
        title: "Marketing Tips",
        content: "Lead Generation is changing and it's much better.."
    },
    {
        id: "3",
        background: "/images/blog3.png",
        title: "Holiday & More",
        content: "Celebrate the holidays with more leads."
    }
];

const Blog = () => {
    const [over, setOver] = useState(false);
    const onHoverHandle = (data) => {
        setOver(true);
    }
    return (
        <section id="blog" className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2 className="news-title">inc brands <span>news</span></h2>
                    <p>Get the lastest updates on all of our brands! From new projects to new release, special events and more. Subscribe to see even more updates!</p>
                </div>
                <div className="row">
                    {postData.map(data => (
                        <div key={data.id} className="col-lg-4 col-md-12">
                            <div className="blog-section" style={{ backgroundImage: `url(${data.background})` }}>
                                <div className="overlay"></div>
                                <div className="blog-content" >
                                    <p>{data.title}</p>
                                    <h4>{data.content}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blog;
