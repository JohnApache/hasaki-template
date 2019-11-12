import React, {lazy, Suspense} from "react";
import { Switch, Route } from 'react-router-dom';
import RoutesConfig from './config';
import LoadingComponent from "../Component/Loading";

const AsyncComponent = importComponent => {
    const Component = lazy(importComponent);
    return () => (
        <Suspense 
            fallback={
                <LoadingComponent />
            }
        >
            <Component />
        </Suspense>
    )
}

const AppRouter = () => {
    return (
        <>
            <Switch>
                {
                    RoutesConfig.map((route, i) => (
                        <Route 
                            key={`${route.Path}_${i}`} 
                            path={route.Path} 
                            exact={route.Exact} 
                            component={
                                AsyncComponent(route.Component)
                            }
                        />
                    ))
                }
                
            </Switch>
        </>
    )
}

export default AppRouter;