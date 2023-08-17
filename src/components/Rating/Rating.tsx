import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../theme';
import { StarSvg } from '../../assets/customSVG';

const RatingCmp = styled(Rate)`
    color: ${Colors.reviewRating} !important;
`;

const Rating = (props: any) => <RatingCmp {...props} character={<StarSvg />} />;

export default Rating;
