import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InputForm from './InputForm';
import Quiz from './Quiz';

const Main = () => {
	return (
			<Switch>
				<Route exact path='/' component={InputForm} />
				<Route exact path='/quiz' component={Quiz} />
			</Switch >

	)

}


export default Main;