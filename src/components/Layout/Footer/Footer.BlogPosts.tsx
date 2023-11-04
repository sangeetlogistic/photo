import React from 'react';
import Link from 'next/link';

import { Routes } from '../../../navigation/Routes';
import { useAppSelector } from '../../../app/hooks';
import { selectRecentBlog } from '../../../services/API/GeneralSettings/GeneralSettings.slice';

const BlogPosts = () => {
    const recentBlog = useAppSelector(selectRecentBlog);

    return (
        <div className="footer-blog-block">
            <div className="footer-blog-wrap">
                <h3 className="f-title">Recent Blog Posts</h3>
                <ul className="footer-blog-list">
                    {recentBlog?.map((obj: any) => (
                        <li key={obj.id}>
                            <Link className="footer-link" href={Routes.blog.replace(':slug', obj.slug)} rel="canonical">
                                {obj.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BlogPosts;
