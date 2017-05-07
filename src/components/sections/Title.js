import React from 'react';

export default function Title(props){
	return (
		<div className={props.cssClass}>
          <h2>{props.label}</h2>
        </div>
    );
};