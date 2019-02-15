// @flow
import React, {Component} from "react";
import classnames from "classnames";
import "../scss/alert.scss";

type AlertProps = {
	children: React.Node,
	type: string,
};

class Alert extends Component<AlertProps> {
	render(){
		const { children } = this.props;
		let type = this.props.type || "info";
		const classNames = classnames({
			"alert": true,
			[`alert--${type}`]: true
		});
		return (
			<div className={classNames}>
				{children}
			</div>
		);
	}
}

export default Alert;
