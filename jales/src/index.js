import React from 'react';
import ReactDOM from 'react-dom/client';
import Jales from './Jales';
import Widgets from './routes/Widgets';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <Jales /> },
    { path: "/ui", element: <Widgets /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);