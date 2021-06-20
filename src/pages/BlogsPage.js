import React from 'react';
import MainTitle from '../components/shared/MainTitle';
import allBlogs from '../data/blogs'
import { useTranslation } from "react-i18next";

import i18n from "../i18n";

function BlogsPage() {
    const { t, i18n } = useTranslation();

    return (
        <div >
            <div className="b-title">
                <MainTitle title={'Case Studies'} span={'Case Studies'} />
            </div>
            <div className="BlogsPage">
                {
                    allBlogs.map((blog)=>{
                        return <div className="blog" key={blog.id}>
                            <div className="blog-content">
                                <img src={blog.image} alt=""/>
                                <a href={blog.link} className="blog-link">
                                    {blog.title}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            
        </div>
    )
}

export default BlogsPage;