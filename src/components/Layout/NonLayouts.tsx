import React, { memo } from 'react';
import { ContentWrapper } from './Layout.component';
import AuthMiddleware from '../../navigation/Middleware/AuthMiddleware';

const LayoutCmp = ({ children }: React.ReactPortal) => (
    <AuthMiddleware>
        <ContentWrapper className="page-content">{children}</ContentWrapper>
    </AuthMiddleware>
);

export default memo(LayoutCmp);
