import React, { memo } from 'react';

import { ContentWrapper } from './Layout.component';

const LayoutCmp = ({ children }: React.ReactPortal) => <ContentWrapper className="page-content">{children}</ContentWrapper>;

export default memo(LayoutCmp);
