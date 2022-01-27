import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
	render() {
		return (
			<>
				<ul className="habits">
					{this.props.habits.map((habit) => (
						<Habit
							key={habit.id}
							habit={habit}
							onIncrease={this.props.onIncrease}
							onDecrease={this.props.onDecrease}
							onDelete={this.props.onDelete}
						/>
					))}
				</ul>
				<div className="footer">
					<button className="reset-button" onClick={this.props.onReset}>
						Reset All
					</button>
				</div>
			</>
		);
	}
}

export default Habits;
