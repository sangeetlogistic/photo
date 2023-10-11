import React from 'react';
import { Parallax } from 'react-scroll-parallax';

const ParallaxTranslate = (props: { speed?: number; children: React.ReactNode }) => {
    const { speed = 10, children } = props;
    return (
        <Parallax
            speed={speed}
            style={{
                transition: 'transform 0.1s ease-out 0s',
                zIndex: 3,
                position: 'relative',
            }}
        >
            {children}
        </Parallax>
    );
};

export default ParallaxTranslate;
