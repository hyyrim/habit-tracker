import React, { Component } from 'react';
import './app.css';
import HabitAddForm from './components/habitAddForm';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
	state = {
		habits: [
			{ id: 1, name: 'Reading', count: 0 },
			{ id: 2, name: 'Running', count: 0 },
			{ id: 3, name: 'Coding', count: 0 },
		],
	};

	/*
	totalCount = this.state.habits.filter((item) => {
		return item.count > 0;
	}).length;
	*/

	handleAdd = (name) => {
		const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
		this.setState({ habits });
	};

	handleIncrease = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				return { ...habit, count: habit.count + 1 };
			}
			return item;
		});

		// 기존 코드
		// [...this.state.habits];
		// const index = habits.indexOf(habit);
		// habits[index].count++;
		this.setState({ habits });
	};

	handleDecrease = (habit) => {
		const habits = this.state.habits.map((item) => {
			if (item.id === habit.id) {
				const count = habit.count - 1;
				return { ...habit, count: count < 0 ? 0 : count };
			}
			return item;
		});
		this.setState({ habits });
	};

	handleDelete = (habit) => {
		const habits = this.state.habits.filter((item) => {
			return item.id !== habit.id;
		});
		this.setState({ habits });
	};

	handleReset = () => {
		const habits = this.state.habits.map((habit) => {
			if (habit.count !== 0) {
				return { ...habit, count: (habit.count = 0) };
			}
			return habit;
		});
		this.setState({ habits });
	};

	render() {
		return (
			<div className="app">
				<Navbar
					totalCount={this.state.habits.filter((item) => item.count > 0).length}
				/>
				<HabitAddForm onAdd={this.handleAdd} />
				<Habits
					habits={this.state.habits}
					onIncrease={this.handleIncrease}
					onDecrease={this.handleDecrease}
					onDelete={this.handleDelete}
					onReset={this.handleReset}
				/>
			</div>
		);
	}
}

export default App;
