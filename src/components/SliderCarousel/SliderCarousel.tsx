import React, { forwardRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderCarousel = forwardRef(({ settings, children, ...rest }: any, ref: any) => (
    <Slider {...settings} ref={ref} {...rest}>
        {children}
    </Slider>
));

export default SliderCarousel;
