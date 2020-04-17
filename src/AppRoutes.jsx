import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ListItem from './components/listItem';

const AppRoutes = () => (
	<div className='middle_content'>
        <Router>
            <Switch>
            <Route path="/list/:id">
                <ListItem />
            </Route>
            </Switch>
        </Router>
    </div>
)
export default AppRoutes;