import React from 'react';



const Questions = (props) => {

		return (
			<div>
				<p>{props.question}</p>
				{props.userAns ? <p>Correct!</p> : props.userAns === "" ? <p></p> : <p> Wrong Answer! </p>}
				<select name="question" size="4">
				  	<option value="correct">{props.corrAns}</option>
				  	<option value="wrong1">{props.wrongAns1}</option>
					<option value="wrong2">{props.wrongAns2}</option>
				 	<option value="wrong3">{props.wrongAns3}</option>
				</select>
			</div>
		)
	
}


export default Questions