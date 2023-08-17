import { useCookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

export const useCookie = (cookiesArray: Array<string>) => {
    const newCookies = cookiesArray.map((item: string) => `$${item}`);
    const [cookies, setCookie, removeCookie] = useCookies(newCookies);
    const getCookie = (key: string): Cookie => cookies[`${key}`];
    const setCookies = (key: string, value: Cookie, option?: CookieSetOptions): void => setCookie(`${key}`, value, option);
    const removeCookies = (key: string, option?: CookieSetOptions): void => removeCookie(`${key}`, option);

    return {
        getCookie,
        setCookie: setCookies,
        removeCookie: removeCookies,
    };
};
