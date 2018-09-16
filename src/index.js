import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
    BrowserRouter, 
    Route, 
    Link,Switch
} from "react-browser-router";
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import LoginForm from './components/login';
import rootReducer from './reducers/index';
import PendingLeaves from './components/pandingleaves';
import ApprovedLeaves from './components/approvedleaves';
import Myleaves from './components/myleaves';
import Newleave from './components/newleave';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
			  <BrowserRouter>
			    <Switch>
			        <Route exact path='/' component={LoginForm}/>
			        <Route path='/dashboard' component={App}/>
              <Route path='/pending' component = {PendingLeaves}/>
              <Route path='/approved' component = {ApprovedLeaves}/>
              <Route path='/myleave' component = {Myleaves}/>
              <Route path='/newleave' component = {Newleave}/>
				</Switch>
			  </BrowserRouter>

  </Provider>
  , document.querySelector('.indexRoute'));
