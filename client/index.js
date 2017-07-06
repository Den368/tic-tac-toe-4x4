import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/Root';
import SettingsContainer from './containers/SettingsContainer';
import GameContainer from './containers/GameContainer';
import { store } from './store';

// const history = syncHistoryWithStore(browserHistory, store)
injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Root}>
        <IndexRoute component={SettingsContainer} />
        <Route path="start" component={SettingsContainer} />
        <Route path="game" component={GameContainer} />
        <Route path="*" component={SettingsContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
