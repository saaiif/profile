import React, { Component } from 'react';
import Project from './Project';
import SelectedProject from './SelectedProject';
import MetaTags from 'react-meta-tags';
import './portfolio.css';
const projectList = [
	{
		name: 'Ecommerce Website',
		shortDesc: 'This is Full Fledge Ecommerce site',
		thumbnail: require('../../assets/images/ec1.png'),
		desc: 'This is responsive ecommerce website made with using javascript.',
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/_newEcommerce',
		url: 'https://saif-ecommerce-site.netlify.app',
		images: [
			{
				value: require('../../assets/images/ec2.png'),
				alt: 'Ecommerce page 1'
			},
			{
				value: require('../../assets/images/ec3.png'),
				alt: 'Ecommerce page 2'
			},
			{
				value: require('../../assets/images/ec4.png'),
				alt: 'Ecommerce page 3'
			},
			{
				value: require('../../assets/images/ec5.png'),
				alt: 'Ecommerce page 4'
			}
		],
		type: 'js',
		display: true
	},

	{
		name: 'Admin Dashboard Website',
		shortDesc: 'Admin Dashboard Website created in ReactJS',
		thumbnail: require('../../assets/images/saifadminpanel.thumbnail.png'),
		desc:
			"It's a Multi Page Website created in ReactJS using API call for managing Admin Dashboard,Products and Account data, where user can add products and can delete new products as per need etc",
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript', 'ES6', 'ReactJS', 'Redux' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/saifadminpanel',
		url: 'https://saifadminpanel.netlify.com/',
		images: [
			{
				value: require('../../assets/images/saifadminpanel1.png'),
				alt: 'Admin Dashboard Website 1'
			},
			{
				value: require('../../assets/images/saifadminpanel2.png'),
				alt: 'Admin Dashboard Website 2'
			},
			{
				value: require('../../assets/images/saifadminpanel3.png'),
				alt: 'Admin Dashboard Website 3'
			}
		],
		type: 'react',
		display: true
	},
	{
		name: 'Calculator',
		shortDesc: 'This is basic calculator',
		thumbnail: require('../../assets/images/Calc.thumbnail.png'),
		desc: 'This is simple calculator made with using javascript.',
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/jscalc',
		url: 'https://saaiif-jscalc.glitch.me/CalculatorApp%20JS/calc.html',
		images: [
			{
				value: require('../../assets/images/Calc1.png'),
				alt: 'Basic Calculator 1'
			},
			{
				value: require('../../assets/images/Calc2.png'),
				alt: 'Basic Calculator 2'
			}
		],
		type: 'js',
		display: true
	},
	{
		name: 'My Travel Diary',
		shortDesc: 'My Travel Diary website using HTML5/CSS3 ',
		thumbnail: require('../../assets/images/TravelDairy.thumbnail.png'),
		desc: 'My Travel Diary project contains places where anyone can plan their vacations. ',
		technologyUsed: [ 'HTML5', 'CSS3' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/htmlfinalcode',
		url: 'https://saaiif-htmlfinalcode-1.glitch.me/hmlFinalproject.html',
		images: [
			{
				value: require('../../assets/images/TravelDairy2.png'),
				alt: 'TravelDairy 2'
			},
			{
				value: require('../../assets/images/TravelDairy3.png'),
				alt: 'TravelDairy 3'
			},
			{
				value: require('../../assets/images/TravelDairy.png'),
				alt: 'TravelDairy 4'
			}
		],
		type: 'html',
		display: true
	},

	{
		name: 'Online Meals.com',
		shortDesc: 'Online Meals Responsive website using HTML5/CSS3 ',
		thumbnail: require('../../assets/images/onlinemeals.thumbnail.png'),
		desc: 'My Online Meals project contains Services, Clients and Contact Page with responsive design. ',
		technologyUsed: [ 'HTML5', 'CSS3' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/SaifMealOnline',
		url: 'https://saifmealsonline.netlify.com/',
		images: [
			{
				value: require('../../assets/images/onlinemeals1.png'),
				alt: 'onlinemeals 1'
			},
			{
				value: require('../../assets/images/onlinemeals2.png'),
				alt: 'onlinemeals 2'
			},
			{
				value: require('../../assets/images/onlinemeals3.png'),
				alt: 'onlinemeals 4'
			}
		],
		type: 'html',
		display: true
	},

	{
		name: 'FitBit Watch App',
		shortDesc: 'FitBit Watch App with several features like Time and HeartBeat Rate',
		thumbnail: require('../../assets/images/FitbitWatch.thumbnail.png'),
		desc:
			'FitBit Watch App with several features like Time and HeartBeat Rate, available in 5 different colors etc',
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript', 'ReactJS' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/fitwatch',
		url: 'https://happy-cray-151e1f.netlify.com/',
		images: [
			{
				value: require('../../assets/images/FitbitWatch.png'),
				alt: 'FitbitWatch 1'
			},
			{
				value: require('../../assets/images/FitbitWatch2.png'),
				alt: 'FitbitWatch image 2'
			},
			{
				value: require('../../assets/images/FitbitWatch3.png'),
				alt: 'FitbitWatch image 3'
			}
		],
		type: 'react',
		display: true
	},
	{
		name: 'Currency Converter App',
		shortDesc: 'Currency Converter App Using an API in React',
		thumbnail: require('../../assets/images/currencyconverter.thumbnail.png'),
		desc:
			'Currency Converter App using data binding in React, this app helps you to find current currency exchange rates',
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript', 'ReactJS' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/CurrencyConverter',
		url: 'https://saifcurrencyconverter.netlify.com/',
		images: [
			{
				value: require('../../assets/images/currencyconverter1.png'),
				alt: 'currencyconverter 1'
			},
			{
				value: require('../../assets/images/currencyconverter2.png'),
				alt: 'currencyconverter 2'
			}
		],
		type: 'react',
		display: true
	},
	{
		name: 'Todo List App',
		shortDesc: 'Todo List App created in ReactJS',
		thumbnail: require('../../assets/images/TodoListApp.thumbnail.png'),
		desc:
			"It's Todo list app created in ReactJS for managing todo list where user can add items in the list and can delete as per convenience etc",
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript', 'ReactJS' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/saiftodo',
		url: 'https://saiftodolist.netlify.com/',
		images: [
			{
				value: require('../../assets/images/TodoListApp1.png'),
				alt: 'TodoListApp 1'
			},
			{
				value: require('../../assets/images/TodoListApp2.png'),
				alt: 'TodoListApp 3'
			}
		],
		type: 'react',
		display: true
	},
	{
		name: 'Analog Watch',
		shortDesc: 'This is simple Analog Watch',
		thumbnail: require('../../assets/images/AnalogWatch.thumbnail.png'),
		desc: 'This is simple Analog Watch made with using javascript.',
		technologyUsed: [ 'HTML5', 'CSS3', 'JavaScript' ],
		collaborators: [
			{
				name: 'Saif Mujawar',
				website: 'https://saifamujawar.netlify.com/'
			}
		],
		githubRepo: 'https://github.com/saaiif/AnalogClock',
		url: 'https://saaiif-analogclock-1.glitch.me/clock.html',
		images: [
			{
				value: require('../../assets/images/AnalogWatch1.png'),
				alt: 'AnalogWatch 1'
			}
		],
		type: 'js',
		display: true
	}
];

const projectFilterList = [
	{
		name: 'All',
		value: 'all',
		active: true,
		display: true
	},
	{
		name: 'ReactJS',
		value: 'react',
		active: false,
		display: true
	},
	{
		name: 'JavaScript',
		value: 'js',
		active: false,
		display: true
	},
	{
		name: 'HTML5/CSS3',
		value: 'html',
		active: false,
		display: true
	}
];

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectFilterList: projectFilterList,
			projectListDetail: projectList,
			modal: false,
			currentProject: null
		};
	}

	filterProjectList = (i) => {
		let projectFilterCopy = this.state.projectFilterList;
		let projectListCopy = this.state.projectListDetail;
		projectFilterCopy.forEach((element) => {
			element.active = false;
		});
		projectFilterCopy[i].active = true;
		projectListCopy.forEach((element) => {
			if (projectFilterCopy[i].value === 'all') {
				element.display = true;
			} else if (projectFilterCopy[i].value === element.type) {
				element.display = true;
			} else element.display = false;
		});
		projectFilterCopy[i].active = true;
		this.setState({
			projectFilterList: projectFilterCopy,
			projectListDetail: projectListCopy
		});
		console.log(projectFilterCopy);
	};

	toggleModal = () => {
		this.setState({ modal: this.state.modal ? false : true });
	};

	openCurrentProject = (i) => {
		console.log(i);
		this.toggleModal();
		this.setState({ currentProject: this.state.projectListDetail[i] });
	};

	render() {
		let projectFilter = this.state.projectFilterList.map((item, i) => (
			<div
				key={i}
				className={item.display ? item.active ? 'filter-div active' : 'filter-div' : 'filter-div d-none'}
				onClick={this.filterProjectList.bind(null, i)}
			>
				<span>{item.name}</span>
			</div>
		));
		let projectList = this.state.projectListDetail.map((item, i) => (
			<div
				key={i}
				className={
					item.display ? 'col-12 col-sm-6 col-md-4 pt-2 d-block' : 'col-12 col-sm-6 col-md-4 pt-2 d-none'
				}
			>
				<Project project={item} index={i} openCurrentProject={this.openCurrentProject} />
			</div>
		));
		return (
			<div>
				<MetaTags>
					<title>Saif Mujawar | Portfolio</title>
					<meta property="title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta property="og:title" content="Saif Mujawar | Web Developer | Programmer" />
					<meta name="author" content="Saif Mujawar" />
					<link rel="canonical" href="https://saifamujawar.netlify.com/portfolio" />
					<meta property="og:url" content="https://saifamujawar.netlify.com/portfolio" />
					<meta property="og:type" content="website" />
					<meta
						name="description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta
						property="og:description"
						content="Hello World, I'm Saif Mujawar. A Tech Geek who loves to Code and Program."
					/>
					<meta name="description" content="This is about me section for my website" />
				</MetaTags>
				<section className="sec-bg-1">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>My Works and Projects</h1>
							</div>
							<div className="sec-detail">
								<p>
									I've always been fascinating towards the project-based learning approach. Passively
									learning facts and reciting them out of context is no longer sufficient to prepare
									me for real-world problems. Working with Projects also leads in developing many
									skills likewise teamwork, problem-solving, research gathering, time management,
									information synthesizing, utilizing high tech tools. I've personally felt this all
									are very essential in making us a Good Developer and develop skills for living in a
									Knowledge-Based, Highly Technological Society.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="sec-bg-2">
					<div className="container">
						<div className="main-div">
							<div className="sec-head">
								<h1>Happy building my skill with this projects</h1>
							</div>
							<div className="sec-detail">
								<div className="project-filter-div row">{projectFilter}</div>
								<div className="project-list-div mt-5">
									<div className="row">{projectList}</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* Component For Opening current selected Project */}
				<SelectedProject
					currentProject={this.state.currentProject}
					modal={this.state.modal}
					toggleModal={this.toggleModal}
				/>
			</div>
		);
	}
}

export default Portfolio;
