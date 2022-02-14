import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from '../reducers'
import sagas from '../sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'header',
    'user'
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  const loggerMiddleware = createLogger({});
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    persistedReducer,
    applyMiddleware(loggerMiddleware, sagaMiddleware),
  );

  let persistor = persistStore(store)
  sagaMiddleware.run(sagas);

  return { store, persistor }
}

export default configureStore;