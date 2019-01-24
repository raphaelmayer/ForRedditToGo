import React, { Component } from 'react';
import Parser from "html-react-parser";
import './css/Thread.css';

import Synth from "../containers/Synth";
import ErrorBox from "../components/ErrorBox";
import LoadingScreen from "../components/LoadingScreen";
import AuthorHeader from "../components/AuthorHeader";
import SortBox from "../components/SortBox";
import MoreButton from "../components/MoreButton";

import { fetchRedditThread, fetchMoreAndInsert, fetchWithToken } from "../services/user.service.js";
import convertToHoursAgo from "../helpers/convertToHoursAgo";
import decodeHtml from "../helpers/decodeHtml";

class Thread extends Component {
  	constructor() {
		super();
		this.state = { listing: null, loading: true, toRead: null, sort: "Best" }
		this.handleSort = this.handleSort.bind(this);
		this.handleMore = this.handleMore.bind(this);
  	}
  	
  	componentDidMount() {
  		const subreddit = this.props.location.pathname.split("/")[3];
  		const threadId = this.props.location.pathname.split("/")[4];
  		
  		fetchRedditThread(subreddit, threadId)
  		.then(data => this.setState({ listing: data, loading: false }))
  		.catch(err => this.setState({ listing: null, loading: false }));
  	}

  	handleSort(e) {
    	this.setState({ loading: true, sort: e.target.value });
    	
  		const subreddit = this.props.location.pathname.split("/")[3];
  		const threadId = this.props.location.pathname.split("/")[4];
  		
  		fetchRedditThread(subreddit, threadId, e.target.value)
  		.then(data => this.setState({ listing: data, loading: false }))
  		.catch(err => this.setState({ listing: null, loading: false }))
  	}

  	handleVote(e) {
  		const name = e.target.attributes.name.value;
  		const dir = e.target.className === "fas fa-arrow-up" ? "1" : "-1";

  		fetchWithToken(`/api/vote?id=${name}&dir=${dir}`)
  		.then(data => {
  			console.log(data);
  			e.target.className += " orange";
  		})
  		.catch(err => console.error(err))	
  	}

  	handleMore(e, children, parentId) {
  		const { listing } = this.state;
  		const link_id = listing[0].data.children[0].data.id;

  		// fetch more replies
  		fetchMoreAndInsert(link_id, children, listing, parentId)
  		.then(newListing => this.setState({ listing: newListing }))
  		.catch(err => console.error(err))
  	}

  	render() {
		const { listing, loading, sort } = this.state;
		if (loading) {
			return ( <LoadingScreen /> );

	  	} else if (listing) {
			const threadInfo = listing[0].data.children[0];
			const comments = listing[1].data.children;

			return (
			  	<div className="Thread">
			  		<Synth listing={ listing } />
			  		<div className="container">
			  			<ThreadHead { ...threadInfo } handleVote={ this.handleVote } />
						<div>
							<SortBox onChange={ this.handleSort } active={ sort } values={[ "Best", "Top", "New", "Controversial",  "Old" ]} />
							{ comments && comments.map((c, i) => <CommentBox key={i} { ...c } handleVote={ this.handleVote } handleMore={ this.handleMore } />) }
						</div>
					</div>
			  	</div>
			);
		
		} else {
	  		return ( <ErrorBox /> );
	  	}
  	}
}

export default Thread;

const ThreadHead = ({ data, handleVote }) => {
	return (
		<article className="ThreadHead">
			<AuthorHeader r={ data.subreddit_name_prefixed } author={ data.author } date={ data.created_utc } />

			<header>
				<h2>{ data.title }</h2>
			</header>

			{/* data.media && data.media.reddit_video && <iframe src={ data.media.reddit_video.scrubber_media_url } width={ data.media.reddit_video.width } ></iframe> */}
			{/* data.preview && data.preview.reddit_video_preview && <iframe src={ data.preview.reddit_video_preview.scrubber_media_url } ></iframe> */}
			{/* data.media_embed.content && Parser(decodeHtml(data.media_embed.content)) */}
			{ data.selftext_html ? <div>{ Parser(decodeHtml(data.selftext_html)) }</div> : <p>{ "This post contains media only. Follow the link to find out more." }</p> }
			{ data.url && data.url.slice(0, 23) !== "https://www.reddit.com/" && <a href={ data.url } target="_blank" rel="noopener noreferrer"><div>{ data.url.split("/")[2] }</div></a> }

			<div className="stats">
				<small>{ data.num_comments } Comments</small>
				<small className="score">
					<span>
						<i className="fas fa-arrow-up" name={ data.name } onClick={ handleVote }></i>
						{ ` ${data.score} Upvotes ` }
						<i className="fas fa-arrow-down" name={ data.name } onClick={ handleVote }></i>
					</span>
				</small>
			</div>
		</article>
	);
}

const CommentBox = ({ data, handleVote, handleMore }) => {
	if (!data) { console.error("") }
	const hoursAgoStr = data && convertToHoursAgo(data.created_utc*1000);
	return (
		<div className="CommentBox">
			<div className="content">
				<small className="author">{ data.author } &#8226; { hoursAgoStr } </small>
				<div>{ Parser(decodeHtml(data.body_html)) }</div>

				<div className="stats">
					<small>
						<span>{ `${data.replies ? data.replies.data.children.length : 0} Replies` }</span>
					</small>
					<small className="score">
						<span>
							<i className="fas fa-arrow-up" name={ data.name } onClick={ handleVote }></i>
							{ ` ${data.score} Upvotes ` }
							<i className="fas fa-arrow-down" name={ data.name } onClick={ handleVote }></i>
						</span>
					</small>
				</div>
				<br />
				{/* loop over replies and check if reply === comment || link id to more*/}
				{
					data.replies && data.replies.data.children && data.replies.data.children.map((r, i) => r.kind === "more" ? 
						<MoreButton key={i} { ...r } onClick={ handleMore } text={ `${r.data.count} more replies` } />
						:
						r.data && <CommentBox { ...r } key={i} handleMore={ handleMore } />)
				}
			</div>
		</div>
	);
}

