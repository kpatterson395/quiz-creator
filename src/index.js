import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
