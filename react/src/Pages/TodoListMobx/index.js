import React from "react";
import { observer, inject } from "mobx-react";

import styles from "./index.module.<%- locals.preprocessor %>";

@inject('TodoListStore')
@observer
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ""
		};
	}

	addItem = e => {
		const {
			TodoListStore
		} = this.props;
		const { value } = this.state;
		if (TodoListStore.isLoading || !value) return;
		TodoListStore.handleAddItem(value);
		this.setState({
			value: ""
		});
	};

	deleteItem = index => {
		const { TodoListStore: { deleteItem } } = this.props;
		deleteItem && deleteItem(index);
	};

	handleInputChange = e => {
		this.setState({
			value: e.target.value
		});
	};

	handleKeyUp = e => {
		if (e.keyCode === 13) {
			this.addItem();
		}
	};

	render() {
		const {
			TodoListStore: { todoList = [], isLoading = false }
		} = this.props;
		return (
			<div className={styles.todolist_container}>
				<div className={styles.input_wrapper}>
					<input
						placeholder="add todo item"
						className={styles.todo_input}
						onChange={this.handleInputChange}
						onKeyUp={this.handleKeyUp}
						value={this.state.value}
					/>
					<div className={styles.todo_confirm_btn} onClick={this.addItem}>
						{!isLoading ? "添加" : "加载中..."}
					</div>
				</div>
				<div className={styles.todo_list_container}>
					{todoList.map((v, i) => (
						<div className={styles.todo_item} key={i}>
							{v}
							<div
								className={styles.delete_btn}
								onClick={this.deleteItem.bind(this, i)}
							>
								×
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default TodoList;
