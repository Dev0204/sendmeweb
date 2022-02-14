import React, { useState, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import { AppRoutes } from './routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { AuthProvider, history } from './helpers';
import { Notification } from './components';


const { store, persistor } = configureStore();

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <CustomRouter history={history}>
        <AuthProvider>
          <AppRoutes />
          <Notification />
        </AuthProvider>
      </CustomRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();