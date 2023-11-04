import React from 'react';
import { Layout } from 'antd';
import moment from 'moment';
import parse from 'html-react-parser';

const { Content } = Layout;
const ContentWrapper = ({ privacyPolicy }: any) => {
    return (
        <Content className="container">
            <div className="cookie_section">
                <h1>Privacy Policy</h1>
                <div className="editor_content_cookie">
                    <p>Last updated: {moment(privacyPolicy?.detail?.data?.[0]?.updatedAt).format('MMMM DD, YYYY')}</p>
                    {parse(privacyPolicy?.detail?.data?.[0]?.description || '')}
                </div>
            </div>
        </Content>
    );
};

export default ContentWrapper;
