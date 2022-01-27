import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
	render() {
		return (
			<header className="navbar">
				<i className="logo fas fa-check-circle"></i>
				<span className="title">Habit Tracker</span>
				<span className="navbar-count">{this.props.totalCount}</span>
			</header>
		);
	}
}

export default Navbar;
