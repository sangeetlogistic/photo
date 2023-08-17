import React from 'react';
import CustomerReview from '../../CustomerReview';
import BlogPosts from './Footer.BlogPosts';
import { FooterCmp } from './Footer.component';
import Filters from './Footer.Filters';
import HelpContent from './Footer.HelpContent';
import SocialMeadia from './Footer.SocialMeadia';
import Subscribe from './Footer.Subscribe';

const Footer = () => (
    <FooterCmp>
        <Subscribe />
        <div className="footer-mid">
            <HelpContent />
            <div className="footer-review-section">
                <CustomerReview
                    className="footer-review-block"
                    title={
                        <div>
                            Customer review - <span className="text-success">Excellent</span>
                        </div>
                    }
                    rate={4.9}
                    totalReviews={1356}
                    footerLogo
                />
            </div>
            <BlogPosts />
        </div>
        <div className="footer-btm-block">
            <SocialMeadia />
            <Filters />
            <div className="footer-copy-right">
                Photo2Painting inc. 2022<sup>R</sup>
            </div>
        </div>
    </FooterCmp>
);

export default Footer;
