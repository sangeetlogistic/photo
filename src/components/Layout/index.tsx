import { Layout } from 'antd';
import React, { memo } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import { ContentWrapper } from './Layout.component';
import { getClassByRoute } from './LayoutClass.const';
import { useRouter } from 'next/router';
import AuthMiddleware from '../../navigation/Middleware/AuthMiddleware';

const LayoutCmp = ({ children }: React.ReactPortal) => {
    const router = useRouter();

    return (
        <AuthMiddleware>
            <Layout
                style={{
                    minHeight: '100vh',
                    overflow: 'hidden',
                    position: 'relative',
                }}
                className={`layout-main-page ${getClassByRoute[router.pathname] ? getClassByRoute[router.pathname] : ''}`}
            >
                <Header />
                <ContentWrapper className="page-content">{children}</ContentWrapper>
                <Footer />
            </Layout>
        </AuthMiddleware>
    );
};

export default memo(LayoutCmp);
