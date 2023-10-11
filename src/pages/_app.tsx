import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import '../style/AntDesign/customTheme.less'; // Add this line

import '../style/theme.scss';
import GlobalStyle from '../GlobalStyle';
import { store } from '../app/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ParallaxProvider>
            <Provider store={store}>
                <GlobalStyle />
                <Component {...pageProps} />
            </Provider>
        </ParallaxProvider>
    );
}
