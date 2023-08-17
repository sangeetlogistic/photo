import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { ParallaxProvider } from 'react-scroll-parallax';

import LayoutCmp from './components/Layout';
import Authmiddleware from './navigation/Middleware/Authmiddleware';
import { HeaderScreens, LayoutScreens, NonLayoutScreens } from './navigation/Screens';
import './style/theme.scss';
import history from './utils/history';
import NotFound from './features/NotFound/Loadable';
import NonLayouts from './components/Layout/NonLayouts';
import HeaderLayoutCmp from './components/Layout/HeaderLayouts';

const App = () => {
    const getLayoutRoutes = (layout: React.ElementType) => {
        const routes = Object.entries(LayoutScreens).map((item) => {
            const [name, props] = item;
            const { path, component, ...optProps } = props;
            return <Authmiddleware key={name} path={path} component={component} layout={layout} {...optProps} />;
        });
        return routes;
    };
    const getNonLayoutRoutes = (layout: React.ElementType) => {
        const routes = Object.entries(NonLayoutScreens).map((item) => {
            const [name, props] = item;
            const { path, component, ...optProps } = props;
            return <Authmiddleware key={name} path={path} component={component} layout={layout} {...optProps} />;
        });
        return routes;
    };
    const getHeaderLayoutRoutes = (layout: React.ElementType) => {
        const routes = Object.entries(HeaderScreens).map((item) => {
            const [name, props] = item;
            const { path, component, ...optProps } = props;
            return <Authmiddleware key={name} path={path} component={component} layout={layout} {...optProps} />;
        });
        return routes;
    };

    return (
        <ConnectedRouter history={history}>
            <ParallaxProvider>
                <Switch>
                    {getLayoutRoutes(LayoutCmp)}
                    {getNonLayoutRoutes(NonLayouts)}
                    {getHeaderLayoutRoutes(HeaderLayoutCmp)}
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </ParallaxProvider>
        </ConnectedRouter>
    );
};

export default App;
