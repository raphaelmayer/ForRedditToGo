(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(76)},28:function(e,t,a){},30:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=(a(28),a(5)),l=a(6),s=a(8),u=a(7),d=a(9),m=a(2),h=a(80),p=a(79),f=a(78),g=a(15),b=Object(g.a)(),E=(a(30),a(4)),v=a.n(E),S=a(12),y={get:function(){return JSON.parse(localStorage.getItem("access_token"))},set:function(e){localStorage.setItem("access_token",JSON.stringify(e))},remove:function(){localStorage.removeItem("access_token")}};var k=function(e){var t=e.expires_in-Date.now()/1e3;return t>0&&(console.log("timeRemaining:",t+" sec"),!0)};function w(e){var t=e?e.value:"",a="top"===t?"&t=".concat(e.top):"";return"/".concat(t,".json?limit=100").concat(a)}function O(e){return N.apply(this,arguments)}function N(){return(N=Object(S.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/subreddits/search.json?q=".concat(t,"&limit=5"));case 2:return a=e.sent,e.next=5,x("/search.json?q=".concat(t));case 5:return n=e.sent,e.abrupt("return",{subreddits:a,posts:n});case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function j(e,t){return e=e?e.map(function(e){return e.data.display_name}):["askreddit","showerthoughts"],x("/r/".concat(e.join("+")).concat(w(t)))}function T(e,t){return x("/r/".concat(e).concat(w(t)))}function _(e,t,a){return x("/r/".concat(e,"/comments/").concat(t,"/.json?sort=").concat(a,"&limit=100"))}function R(e){return Promise.all([A("/api/v1/me",e),A("/subreddits/mine/subscriber",e)])}function C(e,t){return P("/api/vote?id=".concat(e,"&dir=").concat(t))}function x(e){return I.apply(this,arguments)}function I(){return(I=Object(S.a)(v.a.mark(function e(t){var a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com".concat(t));case 2:return a=e.sent,console.log(a.status),e.abrupt("return",a.json());case 5:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function A(e,t){return M.apply(this,arguments)}function M(){return(M=Object(S.a)(v.a.mark(function e(t,a){var n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=a||y.get(),k(a)){e.next=4;break}return y.remove(),e.abrupt("return",Promise.reject("Token is expired."));case 4:return n={headers:{Authorization:"bearer ".concat(a.value)}},e.next=7,fetch("https://oauth.reddit.com".concat(t),n);case 7:return r=e.sent,console.log(r.status),e.abrupt("return",r.json());case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function P(e){return D.apply(this,arguments)}function D(){return(D=Object(S.a)(v.a.mark(function e(t){var a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=y.get(),k(a)){e.next=4;break}return y.remove(),e.abrupt("return",Promise.reject("Token is expired."));case 4:return n={method:"POST",headers:{Authorization:"bearer ".concat(a.value)}},e.next=7,fetch("https://oauth.reddit.com".concat(t),n);case 7:return r=e.sent,console.log(r.status),e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function B(e,t,a,n){return L.apply(this,arguments)}function L(){return(L=Object(S.a)(v.a.mark(function e(t,a,n,r){var o;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("/api/morechildren.json?link_id=t3_".concat(t,"&children=").concat(a.join(", "),"&api_type=json"));case 2:return o=e.sent,e.abrupt("return",G(n,r.substring(3),o.json.data.things));case 4:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function G(e,t,a){return new Promise(function(n,r){e[1].data.children.forEach(function(r,o){r.data.id===t&&"more"!==r.kind&&(r.data.replies.data.children.pop(),a.map(function(e){return r.data.replies.data.children.push(e)}),n(e)),r.data.replies&&function t(a,n,r){return new Promise(function(o,c){var i=a.data.children;i.forEach(function(a,c){a.data.id===n&&"more"!==a.kind&&(a.data.replies.data.children.pop(),r.map(function(e){return a.data.replies.data.children.push(e)}),o(e)),a.data.replies&&t(a.data.replies,n,r).then(function(e){return o(e)}).catch(function(e){return console.err(e)})})})}(r.data.replies,t,a).then(function(e){return e&&n(e)}).catch(function(e){return console.error(e)})})})}var F=function(e){var t=window.location.hash.match(new RegExp(e+"=([^&]*)"));return t?t[1]:null};function V(){var e=y.get(),t=F("state"),a={value:F("access_token"),expires_in:Date.now()/1e3+Number(F("expires_in"))};return a&&t===Object({NODE_ENV:"production",PUBLIC_URL:"/ForRedditToGo"}).REACT_APP_SECRET_STRING?(console.log("setting new token"),y.set(a),R(a)):e&&k(e)?R(e):(y.remove(),Promise.reject("not logged in"))}function U(){y.remove(),b.push("".concat("/ForRedditToGo","/"))}a(34);var H=a(77),q=(a(36),function(){return r.a.createElement("div",{className:"to-frontpage-container"},r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/frontpage")},r.a.createElement("button",{className:"to-frontpage-btn"},"To the frontpage")))}),W=function(){return r.a.createElement("div",{className:"About"},r.a.createElement(z,null),r.a.createElement(Y,null))},z=function(){return r.a.createElement("header",{className:"about-banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",null,"For Reddit,To Go")),r.a.createElement("img",{alt:"",src:"".concat("/ForRedditToGo","/images/walker.png")}))},Y=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"about-section"},r.a.createElement("h1",null,"Listen to Reddit, while getting stuff done."),r.a.createElement("p",null,"Reddit To Go is a web application intended for portable devices that leverages the ",r.a.createElement("b",null,"Text to Speech")," features of modern browsers to read out reddit threads. For now please consider using the latest version of ",r.a.createElement("b",null,"Google Chrome")," or ",r.a.createElement("b",null,"Mozilla Firefox")," to ensure functionality and the best possible user experience."),r.a.createElement(q,null),r.a.createElement("p",null,"RedditToGo fits some subreddits more than others. Where it excels are textbased threads and comment trees. Accessing threads that share images, videos or links is possible, but for now you will have to follow the link to the original source to consume it."),r.a.createElement("p",null,"Features like messaging, mod features, etc are not included for now, because this is meant to be a complementary service one can use if needed."),r.a.createElement("p",null,"If you want to suggest or contribute a feature, feel free to contact me on my page or on github.")),r.a.createElement("section",{className:"about-section"},r.a.createElement("h1",null,"How to use / main features"),r.a.createElement("p",null,"When reading a thread a user may use the synthesizer buttons to control the speech synthesis. Pressing ",r.a.createElement("b",null,"PLAY")," will read the thread from beginning to end. You may skip or relisten to individual posts by using the ",r.a.createElement("b",null,"BACK")," / ",r.a.createElement("b",null,"SKIP")," buttons respectively. ",r.a.createElement("b",null,"STOP")," will halt and cancel all queued messages."),r.a.createElement("p",null,"You may also select a ",r.a.createElement("b",null,"READMODE"),". For now there is ",r.a.createElement("b",null,"STANDARD")," and ",r.a.createElement("b",null,"TOP CMNTS"),". ",r.a.createElement("b",null,"STANDARD")," will read the thread as is with all comments including some (or all, depending on the volume) high rated replies, while ",r.a.createElement("b",null,"TOP CMNTS")," only reads out comments without reading out any replies."),r.a.createElement("p",null,"Comments get initialized with the phrase: ",r.a.createElement("i",null,"USERNAME comments...")," while replies get initialized with ",r.a.createElement("i",null,"USERNAME replies..."))),r.a.createElement("section",{className:"about-section"},r.a.createElement("h1",null,"Contact"),r.a.createElement("p",null,"If you find any bugs or have suggestions please feel free to contact me on my page or on github. I built this project for myself initially, but figured some people might find it useful. I would be stoked to improve ",r.a.createElement("b",null,"For Reddit, To Go")," for others aswell."),r.a.createElement("div",{className:"socialmedia-icons"},r.a.createElement("a",{href:"https://raphaelmayer.github.io/go",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-envelope"})),r.a.createElement("a",{href:"https://github.com/raphaelmayer/ForRedditToGo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})))))},J=(a(40),a(42),function(e){var t=Date.now(),a=Math.round((t-e)/1e3);if(a<10?a="Just now":a<60?a=Math.round(a)+" seconds ago":a<3600?a=Math.round(a/60)+" minutes ago":a<86400?a=Math.round(a/3600)+" hours ago":a<2592e3?a=Math.round(a/86400)+" days ago":a<31536e3?a=Math.round(a/2592e3)+" months ago":a>=31536e3&&(a=Math.round(a/31536e3)+" years ago"),a[0]<2){var n=a.indexOf("s");a=a.slice(0,n)+" ago"}return a}),K=function(e){var t=e.r,a=e.author,n=e.date,o=J(1e3*n);return r.a.createElement("small",{className:"AuthorHeader"},r.a.createElement("span",{className:"subreddit"},r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/").concat(t)},t)),r.a.createElement("span",{className:"author"}," \u2022 Posted by u/",a),r.a.createElement("span",{className:"time"}," \u2022 ",o))};a(44);var $=function(e){return!e||e<1e3?e:(e=e.toString().split("")).map(function(t,a){return 0===a?t:(e.length-a)%3===0?" ".concat(t):t}).join("")};function Q(){console.log("no."),alert("no.")}var X,Z,ee=function(e){var t=e.data,a=e.handleVote,n=e.type;return r.a.createElement("div",{className:"ThreadStatsBox"},r.a.createElement("div",null,r.a.createElement("small",null,r.a.createElement("span",null,"".concat($(t.num_comments)||0," ").concat(n||"Comments"))),r.a.createElement("small",{className:"score-mobile"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-arrow-up",name:t.name,onClick:a||Q})," ".concat($(t.score)," Upvotes "),r.a.createElement("i",{className:"fas fa-arrow-down",name:t.name,onClick:a||Q})))),r.a.createElement(te,{url:t.url}))},te=function(e){var t=e.url;return t&&"https://www.reddit.com/"!==t.slice(0,23)?r.a.createElement("div",{className:"media-link"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-link"}),r.a.createElement("span",null,t.split("/")[2]))):null},ae=function(e){var t=e.data,a=e.handleVote;return r.a.createElement("div",{className:"ThreadBox"},r.a.createElement("small",{className:"score"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-arrow-up",name:t.name,onClick:a})),r.a.createElement("div",null,t.score),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-arrow-down",name:t.name,onClick:a})))),r.a.createElement("div",{className:"content"},r.a.createElement(K,{r:t.subreddit_name_prefixed,author:t.author,date:t.created_utc}),r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/r/").concat(t.subreddit,"/").concat(t.id)},t&&r.a.createElement("h3",null,t.title),t.selftext&&r.a.createElement("p",{className:"selftext"},t.selftext)),r.a.createElement(ee,{data:{num_comments:t.num_comments,score:t.score,name:t.name,url:t.url},handleVote:a})))},ne=function(){return r.a.createElement("div",null,"There seems to be an error. Please try again and check your URL.")},re=(a(46),function(){return r.a.createElement("div",{className:"LoadingScreen"},r.a.createElement("div",null,r.a.createElement("div",{className:"spinner"})))}),oe=(a(48),function(e){var t=e.onChange,a=e.values,n=e.active;return r.a.createElement("form",{className:"SortBox",onChange:t},r.a.createElement("span",null,"Sort by"),r.a.createElement("select",{defaultValue:n.value||n},a&&a.map(function(e,t){return r.a.createElement("option",{value:e.toLowerCase(),key:t},e)})),n.top&&r.a.createElement("select",{defaultValue:n.top,className:"top"===n.value?"SortBox-top SortBox-top-active":"SortBox-top"},ce.map(function(e,t){return r.a.createElement("option",{value:e.toLowerCase(),key:t},e)})))}),ce=["Hour","Day","Week","Month","Year","All"],ie=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={listing:null,currentSub:null,loading:!0,sort:{value:"hot",top:"hour"}},e.handleSort=e.handleSort.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname.split("/")[3];T(t).then(function(a){return e.setState({listing:a,currentSub:t,loading:!1})}).catch(function(a){return e.setState({listing:null,currentSub:t,loading:!1})})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props.location.pathname.split("/")[3],a=this.state,n=a.loading,r=a.currentSub,o=a.sort;n||r===t||(this.setState({loading:!0}),T(t,o).then(function(a){return e.setState({listing:a,currentSub:t,loading:!1})}).catch(function(a){return e.setState({listing:null,currentSub:t,loading:!1})}))}},{key:"handleSort",value:function(e){var t=this,a={value:e.target.form[0].value,top:e.target.form[1].value},n=this.props.location.pathname.split("/")[3];this.setState({loading:!0,sort:a}),T(n,a).then(function(e){return t.setState({listing:e,currentSub:n,loading:!1})}).catch(function(e){return t.setState({listing:null,currentSub:n,loading:!1})})}},{key:"handleVote",value:function(e){var t=e.target.attributes.name.value,a="fas fa-arrow-up"===e.target.className?"1":"-1";e.target.className+=" orange",C(t,a).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.listing,n=t.loading,o=t.sort;if(n)return r.a.createElement(re,null);if(a&&a.data){var c=a.data.children;return r.a.createElement("div",{className:"Sub"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"SubTitle"},r.a.createElement("h2",null,"r/",c[0]&&c[0].data.subreddit)),r.a.createElement(oe,{onChange:this.handleSort,active:o,values:["Hot","New","Controversial","Top"]}),c.map(function(t,a){return r.a.createElement(ae,Object.assign({},t,{handleVote:e.handleVote,key:a}))})))}return r.a.createElement(ne,null)}}]),t}(n.Component),le=a(16),se=a.n(le),ue=(a(61),a(63),function(e){var t=document.getElementById("log");t&&t.insertAdjacentHTML("beforeend","<small><b>".concat(e,"</b></small>"))}),de=0;function me(){de++;var e=X.getVoices();e.length&&(Z=e.find(function(e){return/en[-_]US/.test(e.lang)})),Z||(de<10?setTimeout(function(){me()},250):console.error("en-US voice not found."))}function he(e,t){var a=[],n=e[0].data.children[0].data.title,r=e[0].data.children[0].data.selftext,o=e[1].data.children;return n&&a.push(pe(n)),r&&a.push(pe(r)),o.forEach(function(e,n){a.push(" ".concat(e.data.author," comments: ? ")+pe(e.data.body)),"STANDARD"===t&&function e(t,a){if(t&&"more"!==t.kind){var n=t.data.children;n.forEach(function(t,n){"more"!==t.kind&&(a.push(" ".concat(t.data.author," replies: ? ")+pe(t.data.body)),e(t.data.replies,a))})}}(e.data.replies,a)}),a}function pe(e){return e?e.replace(/[^\w\s.:,_$@%;-=`\xb4'\/!?]/gi,""):null}"speechSynthesis"in window&&(X=window.speechSynthesis,me());var fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={logIsOpen:!1,listing:null,readmode:"STANDARD",script:null,position:0,isOn:!1},a.handleLog=a.handleLog.bind(Object(m.a)(Object(m.a)(a))),a.handleReadMode=a.handleReadMode.bind(Object(m.a)(Object(m.a)(a))),a.play=a.play.bind(Object(m.a)(Object(m.a)(a))),a.back=a.back.bind(Object(m.a)(Object(m.a)(a))),a.skip=a.skip.bind(Object(m.a)(Object(m.a)(a))),a.stop=a.stop.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.listing;e&&this.setState({listing:e})}},{key:"play",value:function(e){var t=this,a=this.state,n=a.listing,r=a.position,o=a.readmode;if(window.speechSynthesis.speaking)ue("TOGGLE PAUSE EVENT"),window.speechSynthesis.cancel(),this.setState({isOn:!1,position:r-1});else{ue("START EVENT");var c=he(n,o);be(r,c,function(e,a){t.setState({position:t.state.position+1})}),this.setState({isOn:!0,script:c,position:r})}}},{key:"back",value:function(e){var t=this;ue("BACK EVENT");var a=this.state,n=a.script,r=a.position,o=r<2?0:r-1;be(o,n,function(e,a){t.setState({position:t.state.position+1})}),window.speechSynthesis.speaking?this.setState({position:o-1,isOn:!0}):this.setState({position:o,isOn:!0})}},{key:"skip",value:function(e){var t=this;ue("SKIP EVENT");var a=this.state,n=a.script,r=a.position+1;be(r,n,function(e,a){t.setState({position:t.state.position+1})}),window.speechSynthesis.speaking?this.setState({position:r-1,isOn:!0}):this.setState({position:r,isOn:!0})}},{key:"stop",value:function(e){ue("STOP EVENT");var t=this.state.isOn;window.speechSynthesis.cancel(),t&&this.setState({isOn:!1,position:-1,script:null})}},{key:"handleLog",value:function(e){this.setState({logIsOpen:!this.state.logIsOpen})}},{key:"handleReadMode",value:function(e){this.setState({readmode:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.logIsOpen,a=e.isOn,n=e.readmode,o=e.position,c=e.script;return r.a.createElement("div",{className:"Synth"},r.a.createElement("i",{onClick:this.handleLog,className:"fas fa-bars"}),r.a.createElement("div",{id:"log",className:t?"":"hidden"},r.a.createElement("p",null,r.a.createElement("u",null,"DebugLog"))),r.a.createElement("div",{className:"synth-name"},"Synthesizer 2000"),r.a.createElement("div",{className:"readmode"},"Mode:",r.a.createElement("select",{onChange:this.handleReadMode,value:n},r.a.createElement("option",{value:"STANDARD"},"Standard"),r.a.createElement("option",{value:"TOP_COMMENTS"},"Top cmnts")),r.a.createElement("span",{className:"position"},"".concat(o," / ").concat(c?c.length:" - "))),r.a.createElement("div",{className:"synth-btn-container"},r.a.createElement(ge,{icon:a?"fas fa-pause":"fas fa-play",onClick:this.play}),r.a.createElement(ge,{icon:"fas fa-backward",onClick:this.back}),r.a.createElement(ge,{icon:"fas fa-forward",onClick:this.skip}),r.a.createElement(ge,{icon:"fas fa-stop",onClick:this.stop})))}}]),t}(n.Component),ge=function(e){var t=e.icon,a=e.onClick;return r.a.createElement("div",{className:"synth-btn",onClick:a},r.a.createElement("i",{className:t,id:"playbtn"}))};function be(e,t,a){window.speechSynthesis.cancel(),t.slice(e,t.length).forEach(function(e){e&&function(e,t){var a=new SpeechSynthesisUtterance(e);me(),a.lang="en-US",a.volume=1,a.rate=1,a.pitch=1,a.voice=Z,a.addEventListener("error",function(e){return console.error(e)}),a.onstart=function(t){ue("array char count: ".concat(e.length," (32,767 max)")),ue("SPEECH started.")},a.onend=function(e){ue("SPEECH ended."),t&&t(null,e)},a.onpause=function(){ue("SPEECH paused.")},a.onresume=function(){ue("SPEECH resumed.")},a.onerror=function(e){ue("SPEECH ERROR!"),t&&t("ERROR reading out.",e)},X.speak(a)}(e,function(e,t){e&&console.error(e),a(null,t)})})}var Ee=function(e){var t=e.onClick,a=e.text,n=e.data,o=n&&n.children,c=n&&n.parent_id;return r.a.createElement("button",{onClick:function(e){return t(e,o,c)},className:"MoreButton"},"".concat(a))},ve=function(e){var t=document.createElement("textarea");return t.innerHTML=e,t.value},Se=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={listing:null,loading:!0,toRead:null,sort:"Best"},e.handleSort=e.handleSort.bind(Object(m.a)(Object(m.a)(e))),e.handleMore=e.handleMore.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;_(this.props.location.pathname.split("/")[3],this.props.location.pathname.split("/")[4]).then(function(t){return e.setState({listing:t,loading:!1})}).catch(function(t){return e.setState({listing:null,loading:!1})})}},{key:"handleSort",value:function(e){var t=this;this.setState({loading:!0,sort:e.target.value}),_(this.props.location.pathname.split("/")[3],this.props.location.pathname.split("/")[4],e.target.value).then(function(e){return t.setState({listing:e,loading:!1})}).catch(function(e){return t.setState({listing:null,loading:!1})})}},{key:"handleVote",value:function(e){var t=e.target.attributes.name.value,a="fas fa-arrow-up"===e.target.className?"1":"-1";e.target.className+=" orange",C(t,a).then(function(e){console.log(e)}).catch(function(e){return console.error(e)})}},{key:"handleMore",value:function(e,t,a){var n=this,r=this.state.listing;B(r[0].data.children[0].data.id,t,r,a).then(function(e){return n.setState({listing:e})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.listing,n=t.loading,o=t.sort;if(console.log("listing",a),console.log("should log"),n)return r.a.createElement(re,null);if(a){var c=a[0].data.children[0],i=a[1].data.children;return r.a.createElement("div",{className:"Thread"},r.a.createElement(fe,{listing:a}),r.a.createElement("div",{className:"container"},r.a.createElement(ye,Object.assign({},c,{handleVote:this.handleVote})),r.a.createElement("div",null,r.a.createElement(oe,{onChange:this.handleSort,active:o,values:["Best","Top","New","Controversial","Old"]}),i&&i.map(function(t,a){return r.a.createElement(ke,Object.assign({key:a},t,{handleVote:e.handleVote,handleMore:e.handleMore}))}))))}return r.a.createElement(ne,null)}}]),t}(n.Component),ye=function(e){var t=e.data,a=e.handleVote;return r.a.createElement("article",{className:"ThreadHead"},r.a.createElement(K,{r:t.subreddit_name_prefixed,author:t.author,date:t.created_utc}),r.a.createElement("header",null,r.a.createElement("h2",null,t.title)),t.selftext_html&&r.a.createElement("div",null,se()(ve(t.selftext_html))),r.a.createElement(ee,{data:{num_comments:t.num_comments,score:t.score,name:t.name,url:t.url},handleVote:a}))},ke=function e(t){var a=t.data,n=t.handleVote,o=t.handleMore;a||console.error("");var c=a&&J(1e3*a.created_utc);return r.a.createElement("div",{className:"CommentBox"},r.a.createElement("div",{className:"content"},r.a.createElement("small",{className:"author"},a.author," \u2022 ",c," "),r.a.createElement("div",null,se()(ve(a.body_html))),r.a.createElement(ee,{data:{num_comments:a.replies&&a.replies.data.children.length,score:a.score,name:a.name},handleVote:n,type:"Replies"}),r.a.createElement("br",null),a.replies&&a.replies.data.children&&a.replies.data.children.map(function(t,a){return"more"===t.kind?r.a.createElement(Ee,Object.assign({key:a},t,{onClick:o,text:"".concat(t.data.count," more replies")})):t.data&&r.a.createElement(e,Object.assign({},t,{key:a,handleVote:n,handleMore:o}))})))},we=(a(65),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={loading:!0,query:null,posts:null,subreddits:null},e.getMoreSubreddits=e.getMoreSubreddits.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(S.a)(v.a.mark(function e(){var t,a,n,r;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.location.pathname.split("/")[3],e.next=3,O(t);case 3:a=e.sent,n=a.subreddits,r=a.posts,this.setState({posts:r,subreddits:n,loading:!1,query:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(S.a)(v.a.mark(function e(){var t,a,n,r,o,c,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state,a=t.query,n=t.loading,r=this.props.location.pathname.split("/")[3],n||a===r){e.next=10;break}return this.setState({loading:!0}),e.next=6,O(r);case 6:o=e.sent,c=o.subreddits,i=o.posts,this.setState({subreddits:c,posts:i,loading:!1,query:r});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getMoreSubreddits",value:function(){var e=Object(S.a)(v.a.mark(function e(){var t,a;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.query,e.next=3,x("/subreddits/search.json?q=".concat(t,"&limit=25"));case 3:a=e.sent,this.setState({subreddits:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.posts,a=e.subreddits,n=e.loading,o=e.query;return n?r.a.createElement(re,null):t&&a||a||t?r.a.createElement("div",{className:"Search"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"SearchTitle"},r.a.createElement("h2",null,"Search results for ",r.a.createElement("u",null,o),":")),r.a.createElement("section",{className:"search-results"},r.a.createElement("h3",null,"Subreddits"),a.data.children[0]?a.data.children.map(function(e,t){return r.a.createElement(Oe,Object.assign({},e,{key:t}))}):r.a.createElement("small",null,"Wow, much empty o.O"),r.a.createElement(Ee,{onClick:this.getMoreSubreddits,text:"Show more results"})),r.a.createElement("div",{style:{width:"100%",margin:"40px auto"}}),r.a.createElement("section",{className:"search-results"},r.a.createElement("h3",null,"Posts"),t.data.children[0]?t.data.children.map(function(e,t){return r.a.createElement(ae,Object.assign({},e,{key:t}))}):r.a.createElement("small",null,"Wow, much empty o.O")))):r.a.createElement(ne,null)}}]),t}(n.Component)),Oe=function(e){var t=e.data;return console.log(t),r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/r/").concat(t.display_name)},r.a.createElement("div",{className:"SubRedditBoxAlt"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"subreddit-box-img",style:{backgroundImage:"url(".concat(t.community_icon||t.icon_img,")")}}),r.a.createElement("div",{className:"title"},r.a.createElement("p",null,r.a.createElement("b",null,t.display_name_prefixed)),r.a.createElement("small",null,$(t.subscribers)," Subscribers"))),r.a.createElement("small",{className:"description"},t.public_description||t.title)))},Ne=(a(67),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={listing:null,loading:!0,sort:{value:"Hot",top:"Hour"}},a.handleSort=a.handleSort.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.mySubreddits;t.loggedIn;j(a).then(function(t){return e.setState({listing:t,loading:!1})}).catch(function(e){return console.error(e)})}},{key:"handleSort",value:function(e){var t=this,a=this.props,n=a.mySubreddits,r=(a.loggedIn,{value:e.target.form[0].value,top:e.target.form[1].value});this.setState({loading:!0,sort:r}),j(n,r).then(function(e){return t.setState({listing:e,loading:!1})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this.state,t=e.listing,a=e.loading,n=e.sort;return a?r.a.createElement(re,null):t?r.a.createElement("div",{className:"Frontpage"},r.a.createElement("div",{className:"container"},r.a.createElement("header",{className:"SubTitle"},r.a.createElement("h2",null,"Frontpage")),r.a.createElement(oe,{onChange:this.handleSort,active:n,values:["Hot","New","Controversial","Top"]}),t.data.children.map(function(e,t){return r.a.createElement(ae,Object.assign({},e,{key:t}))}))):r.a.createElement(ne,null)}}]),t}(n.Component)),je=(a(69),a(71),function(e){var t=e.loggedIn,a=e.user,n=e.logout;return r.a.createElement("div",{className:"login-user-field"},t&&a?r.a.createElement(Te,{user:a,logout:n}):r.a.createElement(_e,null))}),Te=function(e){var t=e.user,a=e.logout;return r.a.createElement("div",{className:"UserBox"},r.a.createElement("div",{className:"name-karma-container"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"karma"},t.karma," Karma")),r.a.createElement("img",{src:t.img,alt:"user_image"}),r.a.createElement("button",{onClick:a,className:"logout-btn"},"Logout"))},_e=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/ForRedditToGo"}),t=e.REACT_APP_DURATION,a=e.REACT_APP_SCOPE,n=e.REACT_APP_SECRET_STRING,o=Object({NODE_ENV:"production",PUBLIC_URL:"/ForRedditToGo"}).REACT_APP_CLIENT_ID,c=Object({NODE_ENV:"production",PUBLIC_URL:"/ForRedditToGo"}).REACT_APP_URI;return r.a.createElement("a",{className:"login-btn",href:"https://www.reddit.com/api/v1/authorize\n\t\t\t?client_id=".concat(o,"\n\t\t\t&response_type=token\n\t\t\t&state=").concat(n,"\n\t\t\t&redirect_uri=").concat(c,"\n\t\t\t&duration=").concat(t,"\n\t\t\t&scope=").concat(a)},r.a.createElement("i",{className:"fas fa-user"}))},Re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isHidden:!1},a.onScroll=function(){window.scrollY>a.prev?a.setState({isHidden:!0}):a.setState({isHidden:!1}),a.prev=window.scrollY},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this.props,t=e.loggedIn,a=e.user,n=e.handleSideBar,o=e.onSubmit,c=e.logout,i=this.state.isHidden;return r.a.createElement("nav",{className:i?"navbar hide":"navbar"},r.a.createElement("i",{onClick:n,className:"fas fa-bars"}),r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/"),className:"link"},r.a.createElement("div",{className:"logo"},"For Reddit To Go")),r.a.createElement("form",{onSubmit:o},r.a.createElement("input",{type:"text",placeholder:"search reddit"}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fas fa-search"}))),r.a.createElement(je,{loggedIn:t,user:a,logout:c}))}}]),t}(n.Component),Ce=(a(73),function(e){var t=e.subreddits,a=e.isOpen,n=e.handleSideBar;e.loggedIn;return r.a.createElement("div",{className:a?"SubRedditTab SubRedditTab-active":"SubRedditTab"},r.a.createElement("div",{className:"sub-reddit-tab-top"},r.a.createElement(H.a,{className:"logo",to:"".concat("/ForRedditToGo","/"),onClick:n},"For Reddit To Go"),r.a.createElement("i",{className:"fas fa-times",onClick:n})),r.a.createElement("div",{className:"about-link"},r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/about/")},"About")),t&&t.map(function(e,t){return r.a.createElement(xe,Object.assign({handleSideBar:n,key:t},e))}),!t&&r.a.createElement("div",{className:"not-logged-in"},"Log in to see a list of your subscribed subreddits."))}),xe=function(e){var t=e.data,a=e.handleSideBar;return r.a.createElement(H.a,{to:"".concat("/ForRedditToGo","/r/").concat(t.display_name),onClick:a,className:"subreddit-box"},r.a.createElement("div",{className:"subreddit-box-img",style:{backgroundImage:"url(".concat(t.community_icon||t.icon_img,")")}}),r.a.createElement("h3",null,t.display_name_prefixed))},Ie="/ForRedditToGo",Ae=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={user:null,mySubreddits:null,loggedIn:!1,sidebarIsOpen:!1},e.handleSideBar=e.handleSideBar.bind(Object(m.a)(Object(m.a)(e))),e.handleSearch=e.handleSearch.bind(Object(m.a)(Object(m.a)(e))),e.logout=e.logout.bind(Object(m.a)(Object(m.a)(e))),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;V().then(function(t){e.setState({user:t[0],mySubreddits:t[1].data.children,loggedIn:!0})}).catch(function(e){console.error(e)})}},{key:"handleSideBar",value:function(e){this.setState({sidebarIsOpen:!this.state.sidebarIsOpen})}},{key:"handleSearch",value:function(e){e.preventDefault();var t=e.target[0].value;b.push("".concat(Ie,"/search/").concat(t))}},{key:"logout",value:function(e){U(),this.setState({user:null,mySubreddits:null,loggedIn:!1})}},{key:"render",value:function(){var e=this.state,t=e.mySubreddits,a=e.loggedIn,n=e.user,o=e.sidebarIsOpen,c=n?{name:n.name,karma:n.comment_karma,img:n.icon_img}:null;return r.a.createElement(h.a,{history:b},r.a.createElement("div",{className:"App"},r.a.createElement(Re,{loggedIn:a,user:c,handleSideBar:this.handleSideBar,onSubmit:this.handleSearch,logout:this.logout}),r.a.createElement(Ce,{subreddits:t,isOpen:o,handleSideBar:this.handleSideBar}),r.a.createElement(p.a,null,r.a.createElement(f.a,{exact:!0,path:"".concat(Ie,"/frontpage"),render:function(e){return r.a.createElement(Ne,Object.assign({mySubreddits:t,loggedIn:a},e))}}),r.a.createElement(f.a,{path:"".concat(Ie,"/r/:subreddit/:title"),component:Se}),r.a.createElement(f.a,{path:"".concat(Ie,"/r"),component:ie}),r.a.createElement(f.a,{path:"".concat(Ie,"/search/:query"),component:we}),r.a.createElement(f.a,{path:"".concat(Ie,"/loginsuccess"),component:Me}),r.a.createElement(f.a,{path:"".concat(Ie,"/"),component:W}),r.a.createElement(f.a,{path:"".concat(Ie,"/about"),component:W}))))}}]),t}(n.Component),Me=function(){return setTimeout(function(){return b.push(Ie)},100),r.a.createElement("div",null,r.a.createElement("h2",null,"Login Success!"),r.a.createElement("p",null,"You will be redirected shortly."))},Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(Ae,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/ForRedditToGo",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ForRedditToGo","/service-worker.js");Pe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):De(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):De(e)})}}()}},[[23,2,1]]]);
//# sourceMappingURL=main.a4cf7b2b.chunk.js.map