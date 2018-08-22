import React from 'react';



export default class Questions extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			question: this.props.question,
			corrAns: this.props.corrAns,
			wrong1: this.props.wrongAns1,
			wrong2: this.props.wrongAns2,
			wrong3: this.props.wrongAns3,
			userAns: "",
			order: Math.floor((Math.random()*4))
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e){
		this.setState({
			userAns: e.target.value
		})
	}

	render(){
			let optionArr = [<option value="correct">{this.state.corrAns}</option>,
							 <option value="wrong1">{this.state.wrong1}</option>,
							 <option value="wrong2">{this.state.wrong2}</option>,
							 <option value="wrong3">{this.state.wrong3}</option> ]
			return (
			<div>
				<p>{this.state.question}</p>
				{this.state.userAns === "correct" ? <p> Correct Answer! </p> : this.state.userAns === "" ? <p></p> : <p> Wrong Answer! </p>}
				<select value={this.state.userAns ? this.state.userAns : "header"} onChange={this.handleChange} name="question" size="5">
				  	<option disabled value="header"> -- select an option -- </option>
				  	{optionArr[this.state.order]}
				  	{optionArr[(this.state.order+1)%4]}
				  	{optionArr[(this.state.order+2)%4]}
				  	{optionArr[(this.state.order+3)%4]}
				</select>
			</div>
		)		
	}

	
}




