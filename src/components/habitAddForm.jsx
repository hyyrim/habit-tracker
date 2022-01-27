import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
	inputRef = React.createRef();
	formRef = React.createRef();

	onSubmit = (e) => {
		e.preventDefault();
		const name = this.inputRef.current.value;
		name && this.props.onAdd(name);
		this.formRef.current.reset();
	};

	render() {
		return (
			<form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
				<input
					ref={this.inputRef}
					className="add-input"
					type="text"
					placeholder="Set up your habit"
				/>
				<button className="add-button">Add</button>
			</form>
		);
	}
}

export default HabitAddForm;
