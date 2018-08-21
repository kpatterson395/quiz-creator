import React from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';

export default class Quiz extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			...props.location.state
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e){
		e.preventDefault();
		let questions = this.state.quiz.length;
		let ansArr = []
		for (var i = 0; i < questions; i++){
			let ans = e.target.elements[i].options.selectedIndex
			

			if(e.target.elements[i].options[ans].value === "correct"){
				ansArr.push(e.target.elements[i].options[ans].value)
				let temp = {...this.state.quiz[i],
							userAns: true}
				this.setState({
					quiz: [
						...this.state.quiz.splice(0, i),
						temp,
						...this.state.quiz.splice(i+1)
					]
				})
			}
			else {
				let temp = {...this.state.quiz[i],
					userAns: false}
				this.setState({
					quiz: [
						...this.state.quiz.splice(0, i),
						temp,
						...this.state.quiz.splice(i+1)
					]
				})				
			}
		}

		alert("You got "+ansArr.length+" out of "+questions+" right!")
	}
	render(){
		return(
			<div>
				<h1>Quiz Page</h1>
				{ !this.state.quiz[0] ? <h2> Please create Quiz! </h2> :
					<form onSubmit={this.handleSubmit} id="quiz_form">
						{this.state.quiz.map((val) => {
							return (
								<Question 
									key={this.state.quiz.indexOf(val)} 
									question={val.question} 
									userAns={val.userAns} 
									corrAns={val.correctAns}
									wrongAns1={val.wrongAns[0]}
									wrongAns2={val.wrongAns[1]}
									wrongAns3={val.wrongAns[2]}
								/>
								)
							})}
						<input type="submit" />
						<Link to={`/`}>  Create a new quiz! </Link> 
					</form> 
				}
			</div>
		)
	}
}

