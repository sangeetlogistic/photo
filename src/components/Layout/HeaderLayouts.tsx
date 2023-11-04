import { Layout } from 'antd';
import React, { memo } from 'react';
import { useRouter } from 'next/router';
import { useParams } from 'next/navigation';

import { useDeviceDetect } from '../../hooks';
import { Routes } from '../../navigation/Routes';
import Header from './Header/Header';
import { ContentWrapper } from './Layout.component';

const HeaderLayoutCmp = ({ children }: React.ReactPortal) => {
    const route = useRouter();
    const params: any = useParams();
    const { isMobile } = useDeviceDetect();

    return (
        <Layout
            style={{
                minHeight: '100vh',
                overflow: 'hidden',
                position: 'relative',
            }}
            className="layout-main-page"
        >
            {!(route.asPath === Routes.orderStep.replace(':id', params?.id) && isMobile) && <Header />}
            <ContentWrapper className="page-content">{children}</ContentWrapper>
        </Layout>
    );
};

export default memo(HeaderLayoutCmp);
