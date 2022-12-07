import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Index from "../pages/firstPage";
import CoursePage from "../pages/CoursePage/CoursePage";
import CourseIdPage from "../pages/CourseIdPage/CourseIdPage";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/welcome">
                <Index/>
            </Route>
            <Route exact path="/courses">
                <CoursePage/>
            </Route>
            <Route exact path="/courses:id">
                <CourseIdPage/>
            </Route>
            <Redirect to="/courses"/>
        </Switch>
    );
};

export default AppRouter;