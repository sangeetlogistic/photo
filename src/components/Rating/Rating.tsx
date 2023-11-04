import React from 'react';
import { Rate } from 'antd';
import styled from 'styled-components';

import { Colors } from '../../theme';
import dynamic from 'next/dynamic';

const StarSvg = dynamic(() => import('../../assets/customSVG').then((module) => module.StarSvg));

const RatingCmp = styled(Rate)`
    color: ${Colors.reviewRating} !important;
`;

const Rating = (props: any) => <RatingCmp {...props} character={<StarSvg />} />;

export default Rating;
