import React, { Component } from 'react';
import MetaTags from 'react-meta-tags';
import Typed from 'react-typed';
import { Loading1 } from '../Loading/Loading';
import './homepage.css';

import { Link } from 'react-router-dom';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: null,
			quoteError: null
		};
	}
	// componentDidMount() {
	//   this.getQuote(this);
	// }

	// shouldComponentUpdate(nextProps, nextState) {
	//   console.log(nextState.quoteError);
	//   // if (
	//   //   this.state.quote == nextState.quote ||
	//   //   this.state.quoteError == nextState.quoteError
	//   // ) {
	//   //   return false;
	//   // } else return true;
	//   return true;
	// }

	// getQuote = async _this => {
	//   await fetch(`https://quotes.rest/qod.json`)
	//     .then(function(response) {
	//       return response.json();
	//     })
	//     .then(function(myJson) {
	//       if (myJson.error) {
	//         console.log("Error");
	//         _this.setState({ quoteError: myJson });
	//       } else if (myJson.contents) {
	//         console.log("success");
	//         _this.setState({ quote: myJson });
	//       }
	//     });
	// };

	render() {
		return (
			<div>
				<MetaTags>
					<title>Saif Mujawar | HomePage</title>
					<meta property="title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta property="og:title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta name="author" content="Saif Mujawar" />
					<link rel="canonical" href="https://rishavpandey.com/" />
					<meta property="og:url" content="https://rishavpandey.com" />
					<meta property="og:type" content="website" />
					<meta
						name="description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta
						property="og:description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta
						name="keywords"
						contents="Saif Mujawar, Software Developer, Saif Mujawar HomePage, Full Stack Developer"
					/>
					<meta name="robots" content="index, follow" />
				</MetaTags>
				<div className="home-page">
					<section className="sec-bg-1">
						<div className="container">
							<div className="main-div">
								<div className="main-div-head">
									<h1>
										{/*<Typed
                      strings={["Hello, Hola, नमस्ते !"]}
                      typeSpeed={70}
                      backSpeed={70}
                    />*/}
										Hello, Hola, नमस्ते !
									</h1>
								</div>
								<div className="main-div-intro">
									<p>
										I'm <span className="custom">Saif Mujawar&nbsp;</span>
										&mdash; a MEAN/MERN/LAMP Stack Developer, Computer Programmer, Data Science
										Enthusiast, Open Source Contributer, who
										<span className="custom">&nbsp;Loves&nbsp;</span> to
										<span className="custom">&nbsp;&lt;/&gt;</span>
									</p>
								</div>
								<div className="quote-div d-none">
									{/*temporary hiding the div*/}
									<h3 className="quote-head">Quote of the day</h3>
									<blockquote className="pt-3">
										{this.state.quote ? this.state.quote.contents ? (
											<span className="success-quote">
												{this.state.quote.contents.quotes[0].quote}
											</span>
										) : (
											''
										) : this.state.quoteError ? (
											<span className="error-quote">{this.state.quoteError.error.message}</span>
										) : (
											<Loading1 />
										)}
										<br />
										{this.state.quote ? this.state.quote.contents ? (
											'~ ' + this.state.quote.contents.quotes[0].author
										) : (
											''
										) : (
											''
										)}
									</blockquote>
								</div>
							</div>
						</div>
					</section>
					<section className="sec-bg-2">
						<div className="container">
							<div className="main-div">
								<div className="sec-head">
									<h1>Who AM I?</h1>
								</div>
								<div className="sec-detail">
									<p>
										Hello World, My name is Saif Mujawar. I'm a Computer Programmer with an interest
										in Web Development, Competitive Programming, and Machine Learning. I've been
										working as a Software Developer since the last 2 Years with hands-on Industrial
										experience of more than a Year working as an Intern and Volunteer with several
										Companies/Startups.
									</p>
									<div className="discover-btn">
										<button className="btn">
											<Link to="/about">
												<span>Let's know more...</span>
											</Link>
										</button>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* <section className="sec-bg-1 bg-img">
                        <div className="custom-bg">
                            <div className="container">
                                <div className="main-div">
                                    <div className="sec-head">
                                        <h1>What I do</h1>
                                    </div>
                                    <div className="sec-detail">
                                        <p>
                                            I work as a MEAN/MERN/LAMP Stack Developer. I create
                                            Single Page Web Applications, Websites using majorly
                                            AngularJS, Angular, ReactJS as a Front-End stack,
                                            powered by Back-End with NodeJS/PHP and MongoDB/MySql
                                            for Database. My work also includes development in
                                            Python with it's web framework(Flask) and it's general
                                            purpose implementation like web scrapping.
                    </p>
                                    </div>
                                    <div className="card-grid">
                                        <div className="row">
                                            <div className="col-12 col-md-4 col-sm-12">
                                                <div className="cards">
                                                    <div className="card-icon">
                                                        <i className="fas fa-window-maximize fa-3x" />
                                                    </div>
                                                    <div className="card-title">
                                                        <h3>Web Developer</h3>
                                                    </div>
                                                    <div className="card-desc">
                                                        <p>
                                                            I work as MEAN/MERN/LAMP Stack Developer,
                                                            covering both Front-End and Back-End in Web
                                                            Development.
                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-sm-12">
                                                <div className="cards">
                                                    <div className="card-icon">
                                                        <i className="fab fa-python fa-3x" />
                                                    </div>
                                                    <div className="card-title">
                                                        <h3>Python Developer</h3>
                                                    </div>
                                                    <div className="card-desc">
                                                        <p>
                                                            I work with Python for General purpose
                                                            implementation like web scrapping, working
                                                            with Flask, etc.
                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4 col-sm-12">
                                                <div className="cards">
                                                    <div className="card-icon">
                                                        <i className="fas fa-laptop-code fa-3x" />
                                                    </div>
                                                    <div className="card-title">
                                                        <h3>Software Development</h3>
                                                    </div>
                                                    <div className="card-desc">
                                                        <p>
                                                            Implementation of Algorithms and Data
                                                            Structure using C, C++, Python, JS in
                                                            projects.
                            </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
				</div>
			</div>
		);
	}
}

export default HomePage;
