import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Index from "../pages/firstPage";
import CoursePage from "../pages/CoursePage/CoursePage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/welcome">
                <Index/>
            </Route>
            <Route path="/courses">
                <CoursePage/>
            </Route>
            <Redirect to="/courses"/>
        </Switch>
    );
};

export default AppRouter;