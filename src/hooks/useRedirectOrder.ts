// useRedirect.js
import { useRouter } from 'next/router';
import { Routes } from '../navigation/Routes';

export const useRedirectOrder = () => {
    const route = useRouter();

    const redirectTo = () => {
        route.push(Routes.orderStep.replace(':id', '1'));
    };

    return { redirectTo };
};
