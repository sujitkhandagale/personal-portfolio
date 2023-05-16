import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import BlogPlaceholder from "../assets/blog/React-Router-v6.jpg";

function blogs() {
    return (
        <div>
            <Header />
            <main>
                <div className="section_name">
                    Blogs
                </div>
                <div className="container blog_section">
                    <div className="blog_section_thumbnail_caro">
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                        <div className="blog_item">
                            <Image src={BlogPlaceholder} />
                            <h2>
                                React Router v6
                            </h2>
                        </div>
                    </div>
                    <div className="blog_menu_section">
                        <div className="blog_category">
                            <span>Treading Blogs</span>
                            <span>Treading Blogs</span>
                            <span>Treading Blogs</span>
                            <span>Treading Blogs</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default blogs