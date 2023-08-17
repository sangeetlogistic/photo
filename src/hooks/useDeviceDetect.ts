import { useState, useEffect, useRef } from 'react';
import { MediaBreakpoints } from '../theme';

export const useDeviceDetect = () => {
    const checkForDevice = () => {
        const windowWidth = window.innerWidth;
        return windowWidth < MediaBreakpoints.upMd;
    };
    const getDeviceHeight = () => window.innerHeight;

    const [isMobile, setIsMobile] = useState(checkForDevice());
    const [orientation, setOrientation] = useState(getDeviceHeight());

    const isMobileRef = useRef(isMobile);

    useEffect(() => {
        isMobileRef.current = isMobile;
    }, [isMobile]);

    useEffect(() => {
        const handlePageResized = () => {
            const checkIsMobile = checkForDevice();
            if (checkIsMobile !== isMobileRef.current) {
                setIsMobile(checkIsMobile);
            }
            setOrientation(getDeviceHeight());
        };
        window.addEventListener('resize', handlePageResized);
        window.addEventListener('orientationchange', handlePageResized);
        window.addEventListener('load', handlePageResized);
        window.addEventListener('reload', handlePageResized);

        return () => {
            window.removeEventListener('resize', handlePageResized);
            window.removeEventListener('orientationchange', handlePageResized);
            window.removeEventListener('load', handlePageResized);
            window.removeEventListener('reload', handlePageResized);
        };
    }, []);

    return {
        isMobile,
        orientation,
    };
};
