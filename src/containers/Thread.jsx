import React, { Component } from 'react';
import './css/Thread.css';

import ErrorBox from "../components/ErrorBox";
import LoadingScreen from "../components/LoadingScreen";
import AuthorHeader from "../components/AuthorHeader";
import Synth from "../components/Synth";
import SortBox from "../components/SortBox";

import convertToHoursAgo from "../helpers/convertToHoursAgo";

class Thread extends Component {
  	constructor() {
		super();
		this.state = { listing: null, loading: true, toRead: null }
		this.handleSort = this.handleSort.bind(this);
  	}
  	componentDidMount() {
  		const path = this.props.location.pathname;
  		const subreddit = path.split("/")[3];
  		const id = path.split("/")[4];
  		
  		fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/.json?limit=100`)
  		.then(res => res.json())
  		.then(data => this.setState({ listing: data, loading: false }))
  		.catch(err => this.setState({ listing: "ERROR", loading: false }))
  	}

  	handleSort(e) {
    	this.setState({ loading: true });
  		const path = this.props.location.pathname;
  		const subreddit = path.split("/")[3];
  		const id = path.split("/")[4];
  		
  		fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/.json?sort=${e.target.value}&limit=100`)
  		.then(res => res.json())
  		.then(data => this.setState({ listing: data, loading: false }))
  		.catch(err => this.setState({ listing: err, loading: false }))

  	}

  	render() {
		const { listing, loading } = this.state;

		if (loading) {
			return ( <LoadingScreen /> );

	  	} else if (listing) {
			const threadInfo = listing[0].data.children[0];
			const comments = listing[1].data.children;

			return (
			  	<div className="Thread">
			  		<Synth toRead={ toRead(listing) } />
			  		<ThreadTitle { ...threadInfo } onClick={ this.handleClick } />
			  		<ThreadCommentsContainer comments={ comments } handleSort={ this.handleSort } />
			  	</div>
			);
		
		} else {
	  		return ( <ErrorBox /> );
	  	}
  	}
}

export default Thread;

const ThreadTitle = ({ data }) => {
	return (
		<article className="ThreadTitle">
			<AuthorHeader r={ data.subreddit_name_prefixed } author={ data.author } date={ data.created_utc } />

			<header>
				<h2>{ data.title }</h2>
			</header>

			<p>{ data.selftext }</p>

			<small>
				<span  className="subreddit">{ data.num_comments } Comments</span>
				<span  className="subreddit"> - { data.score } Upvotes</span>
			</small>
		</article>
	);
}

const ThreadCommentsContainer = ({ comments, handleSort }) => {
	return (
		<div>
			<SortBox onChange={ handleSort } values={ [ "Best", "Top", "New", "Controversial",  "Old" ] } />
			{ comments.map((c, i) => <CommentBox key={i} { ...c } />) }
		</div>
	);
}

const CommentBox = ({ data }) => {
	const hoursAgoStr = convertToHoursAgo(data.created_utc*1000);
	return (
		<div className="CommentBox">
			<small className="score">
				<span>{ data.score }</span>
			</small>
			<div className="content">
				<div className="author"><b>{ data.author }</b> &#8226; { hoursAgoStr } </div>
				<p>{ data.body }</p>

				<div>
					<small>
						<span>{ `${data.replies ? data.replies.data.children.length : 0} Comments` }</span>
					</small>
					<small className="score-mobile">
						<span>{ `${data.score} Upvotes` }</span>
					</small>
				</div>
				<br />
				{ data.replies && data.replies.data.children.map((r, i) => <CommentBox { ...r } key={i} />) }
			</div>
		</div>
	);
}

// makes array of strings to pass to speechSynthesis;
const toRead = listing => {
	const title =  listing[0].data.children[0].data.title;
	const post = listing[0].data.children[0].data.selftext;
	const comments = listing[1].data.children;

	// push title, post and comments to array in order and read out
	let toRead = [];
	toRead.push(title);
	toRead.push(post);
	comments.map((c, i) => toRead.push(c.data.body));

	return toRead;
}