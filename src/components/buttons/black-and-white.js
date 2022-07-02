import React from 'react';
import "./black-and-white.styles.scss";

export const BUTTON_TYPE_CLASSES = {
	google: "google-sign-in",
	inverted: "inverted",
};

const BlackAndWhiteButton = ({ children, buttonType, ...otherProps }) => {
	return (
		<button
			className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default BlackAndWhiteButton;