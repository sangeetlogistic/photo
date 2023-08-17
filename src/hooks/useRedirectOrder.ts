// useRedirect.js
import { useHistory } from 'react-router-dom';
import { Routes } from '../navigation/Routes';

export const useRedirectOrder = () => {
    const history = useHistory();

    const redirectTo = () => {
        history.push(Routes.orderStep.replace(':id', '1'));
    };

    return { redirectTo };
};
