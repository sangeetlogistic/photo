import { useEffect } from 'react';

export const useHover = (ref: any, handler: any) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current) {
                return;
            }
            handler(event);
        };
        if (ref.current) {
            ref.current.addEventListener('mouseleave', listener);
        }
        document.addEventListener('mouseenter', listener);
        return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseleave', listener);
            }
            document.removeEventListener('mouseenter', listener);
        };
    }, [ref, handler]);
};
