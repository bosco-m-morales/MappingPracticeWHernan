import React, { useState } from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card m-3" style={{ width: "300px" }}>
			<div className="card-body">
				<h5 className="card-title">{props.var1}</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p className="card-text">{props.var2}</p>
				<a href={props.var3}>Card link</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	var1: PropTypes.string,
	var2: PropTypes.string,
	var3: PropTypes.string
};
