import React, { Component } from "react";
import Project from "./Project";
import SelectedProject from "./SelectedProject";
// import { Modal, ModalBody } from "reactstrap";
import MetaTags from "react-meta-tags";
import "./portfolio.css";

const projectList = [
  {
    name: "Phone Book Manager",
    shortDesc: "Phone Book Manager App created in ReactJS",
    thumbnail: require("../../assets/images/phonebook_thumbnail.jpg"),
    desc:
      "It's a Single Page Application created in ReactJS for managing phonebook. It is just the simple demonstration on creating SPA with using JavaScript library, i.e ReactJS. It helps the user to add a new number to phonebook, delete the number from phonebook and also edit existing numbers.",
    technologyUsed: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Bootstrap(v4)",
      "ReactJS"
    ],
    collaborators: [
      {
        name: "Rishav Pandey",
        website: "https://rishavpandey.com/"
      }
    ],
    githubRepo: "https://github.com/rishavpandey43/phonebook-directory",
    url: "https://rishavpandey.com/phonebook-directory/",
    images: [
      {
        value: require("../../assets/images/phonebook_img1.png"),
        alt: "apna broker web app image 1"
      },
      {
        value: require("../../assets/images/phonebook_img2.png"),
        alt: "apna broker web app image 2"
      },
      {
        value: require("../../assets/images/phonebook_img3.png"),
        alt: "apna broker web app image 3"
      }
    ],
    type: "react",
    display: true
  },
  {
    name: "Apna Broker",
    shortDesc: "A ML Based House Rent Predictor",
    thumbnail: require("../../assets/images/apnabroker_thumbnail.jpg"),
    desc: "A Machine Learning Based House Rent Predictor SPA Web Application. ",
    technologyUsed: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "AngularJS",
      "Python",
      "Flask",
      "Gunicorn",
      "Pickle",
      "Numpy",
      "Pandas"
    ],
    collaborators: [
      {
        name: "Rishav Pandey",
        website: "https://rishavpandey.com/"
      },
      {
        name: "Shashank Shekhar",
        website: "https://shashankshekhar.me/"
      }
    ],
    githubRepo: "https://github.com/EvilCoders/Apna-Broker",
    url: "https://evilcoders.github.io/Apna-Broker/#/",
    images: [
      {
        value: require("../../assets/images/apnabroker_img1.png"),
        alt: "apna broker web app image 1"
      },
      {
        value: require("../../assets/images/apnabroker_img2.png"),
        alt: "apna broker web app image 2"
      }
    ],
    type: "ml",
    display: true
  },
  {
    name: "BMI Calculator",
    shortDesc: "BMI Calculator with multiple units Input",
    thumbnail: require("../../assets/images/bmicalculator_thumbnail.jpg"),
    desc:
      "This BMI calculator is just a basic implementation of demonstration of jQuery along with JavaScript. In this user has complete flexibility to input the height, weight with any unit they prefer, the calculator will give correct output. Even based on the result, User will be given some measures to control the BMI according to it's standard chart.",
    technologyUsed: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Bootstrap(v4)",
      "jQuery"
    ],
    collaborators: [
      {
        name: "Rishav Pandey",
        website: "https://rishavpandey.com/"
      }
    ],
    githubRepo: "https://github.com/rishavpandey43/bmi-calculator",
    url: "https://rishavpandey.com/bmi-calculator/",
    images: [
      {
        value: require("../../assets/images/bmicalculator_img1.png"),
        alt: "apna broker web app image 1"
      },
      {
        value: require("../../assets/images/bmicalculator_img2.png"),
        alt: "apna broker web app image 2"
      }
    ],
    type: "js",
    display: true
  },
  {
    name: "Food Recipe App",
    shortDesc:
      "Food Recipe App with several features like Recipe Search, Nutrition Analysis, etc",
    thumbnail: require("../../assets/images/foodrecipe_thumbnail.jpg"),
    desc:
      "This Food Recipe App is created using ReactJS. It has several features like Recipe Search, Food Database, Nutrition Analysis. This Web App uses Edamam API for the several services.",
    technologyUsed: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Bootstrap(v4)",
      "ReactJS",
      "Edamam API Services"
    ],
    collaborators: [
      {
        name: "Rishav Pandey",
        website: "https://rishavpandey.com/"
      }
    ],
    githubRepo: "https://github.com/rishavpandey43/food-recipe-app",
    url: "http://rishavpandey.com/food-recipe-app/",
    images: [
      {
        value: require("../../assets/images/foodrecipe_img1.png"),
        alt: "food recipe web app image 1"
      },
      {
        value: require("../../assets/images/foodrecipe_img2.png"),
        alt: "food recipe web app image 2"
      },
      {
        value: require("../../assets/images/foodrecipe_img3.png"),
        alt: "food recipe web app image 2"
      },
      {
        value: require("../../assets/images/foodrecipe_img4.png"),
        alt: "food recipe web app image 2"
      },
      {
        value: require("../../assets/images/foodrecipe_img5.png"),
        alt: "food recipe web app image 2"
      }
    ],
    type: "react",
    display: true
  }
];

const projectFilterList = [
  {
    name: "All",
    value: "all",
    active: true,
    display: true
  },
  {
    name: "ReactJS",
    value: "react",
    active: false,
    display: true
  },
  {
    name: "Angular",
    value: "angular",
    active: false,
    display: false
  },
  {
    name: "JavaScript",
    value: "js",
    active: false,
    display: true
  },
  {
    name: "Python",
    value: "js",
    active: false,
    display: false
  },
  {
    name: "Machine Learning",
    value: "ml",
    active: false,
    display: true
  },
  {
    name: "Capstone Projects",
    value: "cp",
    active: false,
    display: false
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

  filterProjectList = i => {
    let projectFilterCopy = this.state.projectFilterList;
    let projectListCopy = this.state.projectListDetail;
    projectFilterCopy.forEach(element => {
      element.active = false;
    });
    projectFilterCopy[i].active = true;
    projectListCopy.forEach(element => {
      if (projectFilterCopy[i].value === "all") {
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

  openCurrentProject = i => {
    console.log(i);
    this.toggleModal();
    this.setState({ currentProject: this.state.projectListDetail[i] });
  };

  render() {
    let projectFilter = this.state.projectFilterList.map((item, i) => (
      <div
        key={i}
        className={
          item.display
            ? item.active
              ? "filter-div active"
              : "filter-div"
            : "filter-div d-none"
        }
        onClick={this.filterProjectList.bind(null, i)}
      >
        <span>{item.name}</span>
      </div>
    ));
    let projectList = this.state.projectListDetail.map((item, i) => (
      <div
        key={i}
        className={
          item.display
            ? "col-12 col-sm-6 col-md-4 pt-2 d-block"
            : "col-12 col-sm-6 col-md-4 pt-2 d-none"
        }
      >
        <Project
          project={item}
          index={i}
          openCurrentProject={this.openCurrentProject}
        />
      </div>
    ));
    return (
      <div>
        <MetaTags>
          <title>Rishav Pandey | Portfolio</title>
          <meta
            property="title"
            content="Rishav Pandey | Web Developer | Programmer"
          />
          <meta
            property="og:title"
            content="Rishav Pandey | Web Developer | Programmer"
          />
          <meta name="author" content="Rishav Pandey" />
          <link rel="canonical" href="https://rishavpandey.com/portfolio" />
          <meta
            property="og:url"
            content="https://rishavpandey.com/portfolio"
          />
          <meta property="og:type" content="website" />
          <meta
            name="description"
            content="Hello World, I'm Rishav Pandey. A Tech Geek who loves to Code and Program."
          />
          <meta
            property="og:description"
            content="Hello World, I'm Rishav Pandey. A Tech Geek who loves to Code and Program."
          />
          <meta
            name="description"
            content="This is about me section for my website"
          />
        </MetaTags>
        <section className="sec-bg-1">
          <div className="container">
            <div className="main-div">
              <div className="sec-head">
                <h1>My Works and Projects</h1>
              </div>
              <div className="sec-detail">
                <p>
                  I've always been fascinating towards the project-based
                  learning approach. Passively learning facts and reciting them
                  out of context is no longer sufficient to prepare me for
                  real-world problems. Working with Projects also leads in
                  developing many skills likewise teamwork, problem-solving,
                  research gathering, time management, information synthesizing,
                  utilizing high tech tools. I've personally felt this all are
                  very essential in making us a Good Developer and develop
                  skills for living in a Knowledge-Based, Highly Technological
                  Society.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-bg-2">
          <div className="container">
            <div className="main-div">
              <div className="sec-head">
                <h1>Happy spending my time to this projects</h1>
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
