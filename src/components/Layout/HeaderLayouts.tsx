import { Layout } from 'antd';
import React, { memo } from 'react';
import { useDeviceDetect } from '../../hooks';
import { Routes } from '../../navigation/Routes';
import Header from './Header/Header';
import { ContentWrapper } from './Layout.component';
import AuthMiddleware from '../../navigation/Middleware/AuthMiddleware';
import { usePathname } from 'next/navigation';

const HeaderLayoutCmp = ({ children }: React.ReactPortal) => {
    const match = usePathname();
    // const params: { id: string } = useParams();
    const { isMobile } = useDeviceDetect();

    return (
        <AuthMiddleware>
            <Layout
                style={{
                    minHeight: '100vh',
                    overflow: 'hidden',
                    position: 'relative',
                }}
                className="layout-main-page"
            >
                {!(match === Routes.orderStep.replace(':id', 'params?.id') && isMobile) && <Header />}
                <ContentWrapper className="page-content">{children}</ContentWrapper>
            </Layout>
        </AuthMiddleware>
    );
};

export default memo(HeaderLayoutCmp);
