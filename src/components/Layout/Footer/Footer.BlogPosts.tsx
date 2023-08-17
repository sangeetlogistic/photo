import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../../navigation/Routes';

const blogPostsContent = [
    {
        id: 1,
        path: Routes.blog.replace(':id', 'feel-like-you-missed-moment'),
        name: "Feel Like You Missed the Moment? You didn&apos't",
    },
    {
        id: 2,
        path: Routes.blog.replace(':id', 'honoring-unsung-heroes-of-COVID-19'),
        name: 'Honoring the Unsung Heroes of COVID-19',
    },
    {
        id: 3,
        path: Routes.blog.replace(':id', "six-things-you-didn't-know-paint-your-life-could-do-for-you"),
        name: "Six Things You Didn't Know Paint Your Life Could Do for You",
    },
];

const BlogPosts = () => (
    <div className="footer-blog-block">
        <div className="footer-blog-wrap">
            <h3 className="f-title">Recent Blog Posts</h3>
            <ul className="footer-blog-list">
                {blogPostsContent.map((obj) => (
                    <li key={obj.id}>
                        <Link className="footer-link" to={obj.path}>
                            {obj.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default BlogPosts;
