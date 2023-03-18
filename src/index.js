import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter, Link,
    RouterProvider,
} from "react-router-dom";
import {Provider} from "react-redux";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import {store} from "./redux/store";

import Root from "./routes/root";
import './styles/index.scss'
import './styles/normalize.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                index: true,
                element: <Products/>
            },
            {
                path: 'product/:id',
                element: <Product/>
            }
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
