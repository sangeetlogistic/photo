/* eslint-disable consistent-return */
import { useState, useEffect, useRef } from 'react';
import { MediaBreakpoints } from '../theme';

export const useDeviceDetect = () => {
    const checkForDevice = () => {
        // Check if window is defined before using it
        if (typeof window !== 'undefined') {
            const windowWidth = window.innerWidth;
            return windowWidth < MediaBreakpoints.upMd;
        }
        return false; // Default value for server-side rendering
    };

    const getDeviceHeight = () => {
        // Check if window is defined before using it
        if (typeof window !== 'undefined') {
            return window.innerHeight;
        }
        return 0; // Default value for server-side rendering
    };

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
        if (typeof window !== 'undefined') {
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
        }
    }, []);

    return {
        isMobile,
        orientation,
    };
};
