import React from "react";
import logo from './logo.svg';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from  "./Router";
import RoutesConfig from "./Router/config";
<%_ if(locals.store === 'mobx'){ _%>
import {Provider as MobxProvider} from 'mobx-react'
import mobxStore from './Mobx/index';
<%_ } _%>
import styles from "./App.module.<%- locals.preprocessor %>";
<%_ if(locals.store === 'redux'){ _%>
import { Provider as ReduxProvider } from "react-redux";
import configStore from "./Redux/ConfigureStore";
const reduxStore = configStore();
<%_ } _%>


const App = () => {
	return (
		<div>
			<%_ if(locals.store === 'redux'){ _%>
			<ReduxProvider store={reduxStore}>
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
			</ReduxProvider>
			<%_ } _%>
			<%_ if(locals.store === 'mobx'){ _%>
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
			<%_ } _%>
		</div>
	);
};

export default App;
