import React from 'react';
import { DrawingPageBackground } from './DrawingPortrait.component';

const Background = ({ backgroundRepeatImage }: { backgroundRepeatImage: string }) => (
    <DrawingPageBackground backgroundRepeatImage={backgroundRepeatImage} />
);

export default Background;
