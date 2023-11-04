import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import '../styles/AntDesign/customTheme.less';
import '../styles/theme.scss';

import GlobalStyle from '../GlobalStyle';
import { store } from '../app/store';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <GlobalStyle />
        <ParallaxProvider>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </ParallaxProvider>
    </>
);

export default App;
