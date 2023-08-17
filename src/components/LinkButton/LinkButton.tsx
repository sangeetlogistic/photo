import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const LinkButtonCmp = styled(Button)``;

const LinkButton = (props: any) => <LinkButtonCmp type="link" {...props} />;

export default LinkButton;
