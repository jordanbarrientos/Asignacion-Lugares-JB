import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Page from './pages/inicio';
import Registro from './pages/registro';
import PaginaPrincipal from './pages/paginaprincipal';




const documento = document.getElementById('root');

const App = (
<BrowserRouter>
    <Switch>
        <Route path="/pages">
            <Page/>
        </Route>
        <Route path="/registro">
            <Registro/>
        </Route>
        <Route path="/dashboard">
            <PaginaPrincipal/>
        </Route>
         <Redirect from="/" to="/pages"/>
    </Switch>
</BrowserRouter>
);

ReactDom.render(App,documento)