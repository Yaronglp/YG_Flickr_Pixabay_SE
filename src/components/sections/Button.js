import React from 'react';

let Button = (props) => {

	let btn = props.shouldBeDisabled ? <button 
											type={props.btnType}
											className={props.cssClass}
											onClick={props.clickHandler}>
												{props.text}
											</button> : <button 
														     type={props.btnType}
															 className={props.cssClass}
															 onClick={props.clickHandler}
															 disabled>
																{props.text}
														</button>;
	

	return btn;
};

export default Button;