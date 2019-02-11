import { createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas/saga'
import reducers from './reducers/reducers'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware, logger));
//export default createStore(reducers,compose(applyMiddleware(sagaMiddleware, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
//export default createStore(reducers, applyMiddleware(sagaMiddleware, logger))
export default createStore(reducers, enhancer)
sagaMiddleware.run(sagas)




