import React, { Component } from "react";
import PropTypes from "prop-types";

import "./../scss/simple-pagination.scss";

export class SimplePagination extends Component {
	render() {
		const {
			children,
			firstResultNumber,
			lastResultNumber,
			resultCount,
			handlePreviousPage,
			handleNextPage
		} = this.props;
		return (
			<>
				<div>
					Showing results {firstResultNumber} - {lastResultNumber} of{" "}
					{resultCount} results
				</div>
				<hr />
				{children}
				<hr />
				<div>
					<a onClick={handlePreviousPage}>Previous page</a>
					<p>Page 1 of 10</p>
					<a onClick={handleNextPage}>Next page</a>
				</div>
			</>
		);
	}
}

SimplePagination.propTypes = {
	children: PropTypes.node
};
