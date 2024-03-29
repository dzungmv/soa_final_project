import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import './pages/Home/Content/Content.module.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </GlobalStyles>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
