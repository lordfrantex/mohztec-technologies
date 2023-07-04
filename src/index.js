import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ScrollToTop from './Components/ScrollToTop';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { getTotal, getCartItems } from './features/cart/CartSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

let persistor = persistStore(store)

store.dispatch(getTotal())
store.dispatch(getCartItems())
root.render(
  <BrowserRouter >
    <ScrollToTop>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ScrollToTop>
  </BrowserRouter >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
