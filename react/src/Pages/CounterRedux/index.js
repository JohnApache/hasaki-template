import React from "react";
import { connect } from "react-redux";
import styles from "./index.module.less";
import { addNum, subtractNum } from "../../Redux/Modal/CounterRedux/action";
class Counter extends React.PureComponent {
	addNum = () => {
		const { addNum } = this.props;
		addNum && addNum(1);
	};

	subtractNum = () => {
		const { subtractNum } = this.props;
		subtractNum && subtractNum(1);
	};

	render() {
		const { Counter } = this.props;
		return (
			<div className={styles.counter__container}>
				<button className={styles.button} onClick={this.subtractNum}>
					-
				</button>
				<input className={styles.input} value={Counter.value} readOnly />
				<button className={styles.button} onClick={this.addNum}>+</button>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		Counter: state.Counter
	};
};

export default connect(
	mapStateToProps,
	{
		addNum,
		subtractNum
	}
)(Counter);
