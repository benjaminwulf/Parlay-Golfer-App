import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CoursePicker from './CoursePicker';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={CoursePicker} />
            <Route path="/course/:courseID" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;