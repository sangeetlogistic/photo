import { Layout } from 'antd';
import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ContentWrapper } from './Layout.component';
import { getClassByRoute } from './LayoutClass.const';

const LayoutCmp = ({ children }: React.ReactPortal) => {
    const match = useLocation();

    return (
        <Layout
            style={{
                minHeight: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
            className={`layout-main-page ${getClassByRoute[match.pathname] ? getClassByRoute[match.pathname] : ''}`}
        >
            <Header />
            <ContentWrapper className="page-content">{children}</ContentWrapper>
            <Footer />
        </Layout>
    );
};

export default memo(LayoutCmp);
