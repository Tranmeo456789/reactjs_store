import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import cartReducer, { getTotals } from '~/slices/cartSlice';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
store.dispatch(getTotals());
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <Provider store={store}>
                <App />
            </Provider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
