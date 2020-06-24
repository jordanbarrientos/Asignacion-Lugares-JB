import React, { Suspense } from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Page from './pages/inicio';
import Registro from './pages/registro';
import PaginaPrincipal from './pages/paginaprincipal';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './config-firebase';
import Modal from './modals/modal1'
/*import { CoffeeLoading } from 'react-loadingg';*/



const documento = document.getElementById('root');

const App = (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback='conectando'>
            <BrowserRouter>
                <Switch>
                    <Route path="/pages">
                        <Page />
                    </Route>
                    <Route path="/registro">
                        <Registro />
                    </Route>
                    <Route path="/prueba">
                        <Modal />
                    </Route>
                    <Route path="/dashboard">
                        <PaginaPrincipal />
                    </Route>
                    <Redirect from="/" to="/pages" />
                </Switch>
            </BrowserRouter>
        </Suspense>
    </FirebaseAppProvider>
);

ReactDom.render(App, documento)
