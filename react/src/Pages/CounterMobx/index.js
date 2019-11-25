import React from "react";
import { observer, inject } from "mobx-react";

import styles from "./index.module.<%- locals.preprocessor %>";

@inject('CounterStore')
@observer
class Counter extends React.PureComponent {
	addNum = () => {
		const { CounterStore: { addNum } } = this.props;
		addNum && addNum(1);
	};

	subtractNum = () => {
		const { CounterStore: { subtractNum } } = this.props;
		subtractNum && subtractNum(1);
	};

	render() {
		const { CounterStore: { value } } = this.props;
		return (
			<div className={styles.counter__container}>
				<button className={styles.button} onClick={this.subtractNum}>
					-
				</button>
				<input className={styles.input} value={value} readOnly />
				<button className={styles.button} onClick={this.addNum}>+</button>
			</div>
		);
	}
}

export default Counter;
