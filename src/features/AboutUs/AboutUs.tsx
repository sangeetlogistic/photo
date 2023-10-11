/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Layout } from 'antd';
import { Helmet } from 'react-helmet';

import { AboutUsCmp } from './About.components';

const { Content } = Layout;
const AboutUs = () => (
    <AboutUsCmp>
        <Helmet>
            <title>About Us</title>
        </Helmet>

        <Content className="container">
            <figure>
                <img
                    src="https://photo2painting.com/wp-content/uploads/2023/04/Screenshot-2023-04-11-at-16.51.30-1-scaled.jpg"
                    alt="scew"
                    loading="lazy"
                />
                <img
                    src="https://photo2painting.com/wp-content/uploads/2023/04/Screenshot-2023-04-11-at-17.23.38-1.jpeg"
                    alt="about us artists section"
                    loading="lazy"
                ></img>
            </figure>
        </Content>
    </AboutUsCmp>
);

export default AboutUs;
