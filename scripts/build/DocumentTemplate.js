import React from 'react';

export default class DocumentTemplate extends React.Component {
	render() {
		const { Head, Body, children } = this.props;
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Body>
					{children}
				</Body>
			</html>
		)
	}
}