import React from 'react';
import ReactDom from 'react-dom';
import firebase from 'firebase'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Page from './pages/inicio';
import Registro from './pages/registro';
import PaginaPrincipal from './pages/paginaprincipal';


firebase.initializeApp({
    apiKey: "AIzaSyDg4WqvYKBDhk025oJpU6FHKT0UA20eHkU",
    authDomain: "primer-asignacion-jb.firebaseapp.com",
    databaseURL: "https://primer-asignacion-jb.firebaseio.com",
    projectId: "primer-asignacion-jb",
    storageBucket: "primer-asignacion-jb.appspot.com",
    messagingSenderId: "343264580079",
    appId: "1:343264580079:web:3f56ec2db7fae22ee3661a"

})
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