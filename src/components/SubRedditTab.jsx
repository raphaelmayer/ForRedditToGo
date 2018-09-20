import React from "react";
import { Link } from "react-router-dom";
import "./css/SubRedditTab.css";

const uri =  process.env.NODE_ENV === "production" ? "/ForRedditToGo" : "/x";

const SubRedditTab  = ({ subreddits, isOpen, handleSideBar }) => {
	return (
		<div className={ isOpen ? "SubRedditTab SubRedditTab-active" : "SubRedditTab" }>
			<Link to={ `${uri}/` }><div className="logo">For Reddit To Go</div></Link>	
			{ subreddits && subreddits.map((sub, i) => <SubRedditBox handleSideBar={ handleSideBar } key={i} { ...sub } />)}
		</div>
	);
}

const SubRedditBox = ({ data, handleSideBar }) => {

	return (
		<Link to={ `${uri}/r/${data.display_name}` } onClick={ handleSideBar } className="subreddit-box">
			<div className="subreddit-box-img" style={{ backgroundImage: `url(${data.header_img})` }}></div>
			<h3>{ data.display_name_prefixed }</h3>
		</Link>
	);
}

export default SubRedditTab;