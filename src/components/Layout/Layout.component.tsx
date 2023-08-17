import { Layout } from 'antd';
import styled from 'styled-components';
import { Colors } from '../../theme';

const { Content } = Layout;

export const ContentWrapper = styled(Content)`
    &.page-content {
        position: relative;
        background-color: ${Colors.pageContetBg};
    }
`;
