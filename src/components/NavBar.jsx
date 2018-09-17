import React from "react";
import { Link } from "react-router-dom";
import "./css/NavBar.css";

const NavBar = props => {
	const { REACT_APP_DURATION, REACT_APP_SCOPE, REACT_APP_SECRET_STRING } = process.env;
	const CLIENT_ID = process.env.NODE_ENV === "production" ? process.env.REACT_APP_CLIENT_ID : process.env.REACT_APP_CLIENT_ID_DEV;
	const URI = process.env.NODE_ENV === "production" ? process.env.REACT_APP_URI : process.env.REACT_APP_URI_DEV;
	const { loggedIn, user, handleSideBar } = props;

	return (
		<div className="navbar">
			
			<Link to="/x/" className="link"><div className="logo">For Reddit To Go</div></Link>	
			
			<i onClick={ handleSideBar } className="fas fa-bars"></i>
			<div className="nav-right">
				<form>
					<input type="text" placeholder="search reddit" />
					<button type="submit"><i className="fas fa-search"></i></button>
				</form>
				{ loggedIn && user ?
					<UserBox user={ user } />
					:
					<a className="login-btn"
						href={ `https://www.reddit.com/api/v1/authorize
						?client_id=${CLIENT_ID}
						&response_type=token
						&state=${REACT_APP_SECRET_STRING}
						&redirect_uri=${URI}
						&duration=${REACT_APP_DURATION}
						&scope=${REACT_APP_SCOPE}` }>
					    <i className="fas fa-user"></i>
					</a>
				}
			</div>

		</div>
	);
}

export default NavBar;

const UserBox = ({ user }) => {
	return (
		<div className="UserBox">
			<div className="name-karma-container">
				<div className="name">{ user.name }</div>
				<div className="karma">{ user.karma } Karma</div>
			</div>
			<img src={ user.img } />
		</div>
	);
}