// useRedirect.js
import { useRouter } from 'next/router';
import { Routes } from '../navigation/Routes';

export const useRedirectOrder = () => {
    const history = useRouter();

    const redirectTo = () => {
        history.push(Routes.orderStep.replace(':id', '1'));
    };

    return { redirectTo };
};
