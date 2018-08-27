import React from 'react';
import { Link } from 'react-router-dom';


export default class InputForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {

			quiz: []
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		let el = e.target.elements
		if (el.question.value == "" ||
			el.answer.value == ""||
			el.wrongAnswer1.value == ""||
			el.wrongAnswer2.value == ""||
			el.wrongAnswer3.value == ""){
			alert("fill in all blanks")
		}
		else {
			this.setState({
			quiz: [
				...this.state.quiz,
				{
					question: el.question.value,
					correctAns: el.answer.value, 
					wrongAns: [el.wrongAnswer1.value, el.wrongAnswer2.value, el.wrongAnswer3.value],
					userAns: ""
				}
			]
		})
			el.question.value="";
			el.answer.value="";
			el.wrongAnswer1.value="";
			el.wrongAnswer2.value="";
			el.wrongAnswer3.value="";		
		}

	
	}
	render(){
		return (
			<div className="quiz-creator">
				<h2>Create Your Quiz</h2>
				<form onSubmit={this.handleSubmit}>
					<label>Input question here:</label>
						<textarea name="question" />
					<br />
					<label>Input answer here:</label>
						<input type="text" name="answer" />
					<br />
					<label>Input wrong answers for multiple choice options:</label>
						<input type="text" name="wrongAnswer1" />
						<input type="text" name="wrongAnswer2" />
						<input type="text" name="wrongAnswer3" />
					<br />
					<input id="submit-button" type="submit" />
				</form>
				<p>Your quiz has {this.state.quiz.length} {this.state.quiz.length === 1 ? "question": "questions"}</p>
				<Link 
					id="start-link"
					to={{
						pathname: '/quiz',
						state: {
							...this.state
					}}}>Start Quiz!</Link>
			</div>
		)
	}
}