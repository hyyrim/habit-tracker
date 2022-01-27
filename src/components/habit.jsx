import React, { PureComponent } from 'react';

class Habit extends PureComponent {
	handleIncrease = () => {
		this.props.onIncrease(this.props.habit);
	};

	handleDecrease = () => {
		this.props.onDecrease(this.props.habit);
	};

	handleDelete = () => {
		this.props.onDelete(this.props.habit);
	};

	render() {
		const { name, count } = this.props.habit;
		return (
			<div className="habit">
				<div className="name-count">
					<span className="habit-name">{name}</span>
					<span className="habit-count">{count}</span>
				</div>
				<div className="buttons">
					<button className="plus-button" onClick={this.handleIncrease}>
						<i className="fas fa-plus-square"></i>
					</button>
					<button className="minus-button" onClick={this.handleDecrease}>
						<i className="fas fa-minus-square"></i>
					</button>
					<button className="delete-button" onClick={this.handleDelete}>
						<i className="fas fa-trash"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default Habit;
