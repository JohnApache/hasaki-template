import React from "react";
import styles from "./App.module.less";
import logo from './logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
// import { Provider as ReduxProvider } from "react-redux";
// import configStore from "./Redux/ConfigureStore";
import AppRouter from  "./Router";
import RoutesConfig from "./Router/config";

import {Provider as MobxProvider} from 'mobx-react'
import mobxStore from './Mobx/index';
// const reduxStore = configStore();


const App = () => {
	return (
		<div>
			{/* <ReduxProvider store={reduxStore}>
				<Router>
					<div className={styles.App}>
						<div className={styles.App_Content}>
						  	<img src={logo} className={styles.App_Logo} alt="logo" />
							<div className={styles.App_Main}>
								<div className={styles.Button_Group}>
								{
									RoutesConfig.map((route, i) => (
										<Link 
											to={route.Path} 
											className={styles.Button}
											key={i}
										>
										{route.Name}
										</Link>
									))
								}
								</div>
								<AppRouter />
							</div>
						</div>
					</div>
				</Router>
			</ReduxProvider> */}
			<MobxProvider {...mobxStore}>
				<Router>
					<div className={styles.App}>
						<div className={styles.App_Content}>
						  	<img src={logo} className={styles.App_Logo} alt="logo" />
							<div className={styles.App_Main}>
								<div className={styles.Button_Group}>
								{
									RoutesConfig.map((route, i) => (
										<Link 
											to={route.Path} 
											className={styles.Button}
											key={i}
										>
										{route.Name}
										</Link>
									))
								}
								</div>
								<AppRouter />
							</div>
						</div>
					</div>
				</Router>
			</MobxProvider>
		</div>
	);
};

export default App;
