import React from "react";
import MetaTags from "react-meta-tags";
import "./about.css";

// document import statement
import Resume from "../../assets/docs/Rishav_Resume.pdf";
import BrainPlayCertificate from "../../assets/docs/brainplay_internship_certificate.pdf";
import FinessyCertificate from "../../assets/docs/finessy_internship_certificate.pdf";
import NasscomCertificae from "../../assets/docs/nasscom_volunteer_certificate.pdf";

import { Link } from "react-router-dom";

let mainSkillList = [
  {
    name: "HTML"
  },
  {
    name: "CSS"
  },
  {
    name: "JavaScript"
  },
  {
    name: "jQuery"
  },
  {
    name: "ReactJS"
  },
  {
    name: "Redux"
  },
  {
    name: "Angular"
  },
  {
    name: "Bootstrap"
  },
  {
    name: "Material"
  },
  {
    name: "Semantic"
  },
  {
    name: "NodeJS"
  },
  {
    name: "ExpressJS"
  },
  {
    name: "MongoDB"
  },
  {
    name: "PHP"
  },
  {
    name: "MySQL"
  },
  {
    name: "Python"
  },
  {
    name: "C"
  },
  {
    name: "C++"
  }
];

let mainAcademicDetails = [
  {
    degreeName: "Bachelor's Degree",
    iconClassName: "fas fa-graduation-cap",
    from: "July 2016",
    to: "May 2020",
    institutionName: "Arya College of Engineering & I.T, RTU",
    desc:
      "I'm currently pursuing 4th year Undergraduate B.Tech degree in Computer Science stream from Arya College of Engineering & I.T, affiliated to Rajasthan Technical University."
  },
  {
    degreeName: "Senior Secondary Schooling",
    iconClassName: "fas fa-university",
    from: "May 2014",
    to: "April 2016",
    institutionName: "Shankar Pratap Deo Degree College, JAC",
    desc:
      "I completed my Senior Secondary schooling from S P Deo Degree College, affiliated to Jharkhand Academic Council."
  },
  {
    degreeName: "Secondary Schooling",
    iconClassName: "fas fa-school",
    from: "May 2013",
    to: "",
    institutionName: "Heritage International School, CBSE",
    desc:
      "I completed my Secondary schooling from Heritage International School, affiliated to Central Board of Secondary Education."
  }
];

let mainWorkExperienceDetails = [
  {
    companyName: "Rockmetric",
    type: "internship",
    iconClassName: "fas fa-laptop-code",
    from: "Jan 2019",
    to: "July 2019",
    location: "Work from Home",
    position: "Software Developer Intern",
    desc:
      "I worked here as a Software Developer Intern for 7 months as a both Front-End and Back-End Development. My work includes adding new features to the existing product, improving existing functionality, etc.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Bootstrap(v3 & v4)",
      "ReactJS",
      "PHP",
      "MySQL"
    ],
    certificate: null
  },
  {
    companyName: "BrainPlay Learning Solutions LLP",
    type: "internship",
    iconClassName: "fas fa-laptop-code",
    from: "May 2018",
    to: "July 2018",
    location: "Full Time, Gurgoan, In",
    position: "Software Developer Intern",
    desc:
      "I worked here as a Software Developer Intern as a Front-EndDeveloper for 2 months in Gurgoan,In office as a Full Time Intern. My work included creating a new SPA Website for the company, adding new features in there existing product, etc.",
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "Angular(v6)",
      "Bootstrap(v4)",
      "Materialize"
    ],
    certificate: BrainPlayCertificate
  },
  {
    companyName: "Finessy",
    type: "internship",
    iconClassName: "fas fa-laptop-code",
    from: "Feb 2018",
    to: "July 2018",
    location: "Work From Home",
    position: "Front-End Developer",
    desc:
      "I worked here as a Front-End Developer Intern for 5 months. I lead the team and was responsible for creating the project Abroad Manager from scratch. My work included the complete Front-End Development of Platform, integrating website with Back-End and improving the features.",
    techStack: ["HTML5", "CSS3", "JavaScript(ES6+)", "jQuery", "Bootstrap(v4)"],
    certificate: FinessyCertificate
  },
  {
    companyName: "Nasscom Foundation",
    type: "volunteer",
    iconClassName: "fas fa-laptop-code",
    from: "Jan 2018",
    to: "April 2018",
    location: "Work From Home",
    position: "Volunteer",
    desc:
      "I worked as Volunteer for Nasscom Foundation under their Skill Donation Program, i.e MyKartavya. My work included creating the complete website for NGO and helping them with giving the technical assistant",
    techStack: ["HTML5", "CSS3", "JavaScript(ES6+)", "jQuery", "Bootstrap(v4)"],
    certificate: NasscomCertificae
  }
];

export default function About(props) {
  let academicDetails = [];
  let workExperienceDetails = [];
  let skillList = [];
  if (mainAcademicDetails.length > 0) {
    academicDetails = mainAcademicDetails.map((item, i) => (
      <div className="timeline-div pb-3" key={i}>
        <div className="timeline-icon">
          <div>
            <i className={item.iconClassName} />
          </div>
        </div>
        <div className="timeline-head">
          <div className="title">
            <h5>{item.degreeName}</h5>
          </div>
          <div className="desc">
            <p>
              {item.from} {item.to !== "" ? " - " : ""} {item.to}
            </p>
          </div>
        </div>
        <div className="timeline-desc pt-2">
          <div className="title">
            <h5>{item.institutionName}</h5>
          </div>
          <div className="desc">
            <p>{item.desc}</p>
          </div>
        </div>
      </div>
    ));
  }
  if (mainWorkExperienceDetails.length > 0) {
    workExperienceDetails = mainWorkExperienceDetails.map((item, i) => (
      <div className="timeline-div pb-3" key={i}>
        <div className="timeline-icon">
          <div>
            <i className={item.iconClassName} />
          </div>
        </div>
        <div className="timeline-head">
          <div className="title">
            <h5>{item.companyName}</h5>
          </div>
          <div className="desc">
            <p>
              {item.from} - {item.to}
            </p>
            <p>{item.location}</p>
          </div>
        </div>
        <div className="timeline-desc pt-2">
          <div className="title">
            <h5>{item.position}</h5>
          </div>
          <div className="desc">
            <p>{item.desc}</p>
            <span>
              <h6 className="sub-head">My Tech stack includes:-</h6>
              <ul>
                {item.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </span>
            <p>
              <a
                href={item.certificate ? item.certificate : "#"}
                target="_black"
                rel="noopener noreferrer"
                className={!item.certificate ? "not-active" : ""}
              >
                <em>
                  Certificate of&nbsp;
                  {item.type === "internship" ? "Internship" : "Appreciation"}
                </em>
              </a>
            </p>
          </div>
        </div>
      </div>
    ));
  }
  if (mainSkillList.length > 0) {
    skillList = mainSkillList.map((item, i) => (
      <div className="skill-div" key={i}>
        <div className="skill-name">
          <span>{item.name}</span>
        </div>
        <div className="skill-range">
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    ));
  }
  return (
    <div>
      <MetaTags>
        <title>Saif Mujawar | About Me</title>
        <meta
          property="title"
          content="Saif Mujawar | Web Developer | Programmer"
        />
        <meta
          property="og:title"
          content="Saif Mujawar | Web Developer | Programmer"
        />
        <meta name="author" content="Saif Mujawar" />
        <link rel="canonical" href="https://rishavpandey.com/about" />
        <meta property="og:url" content="https://rishavpandey.com/about" />
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
          name="description"
          content="This is about me section for my website"
        />
      </MetaTags>
      <div className="about-page">
        <section className="sec-bg-1">
          <div className="container">
            <div className="main-div">
              <div className="sec-head">
                <h1>Let me Introduce myself</h1>
              </div>
              <div className="sec-detail">
                <p>
                  I'm from Medininagar, a city in the Indian state of Jharkhand.
                  I'm currently studying as a 4<sup>th</sup>
                  &nbsp;year Undergraduate CSE Major Engineering Student in
                  ACEIT located in the Pink City of India. I'm a Technology
                  Enthusiast focused at Research and Development in various
                  Fields of Computer Science. I love coding and creating new
                  stuffs. My field of interest includes Competitive Programming,
                  Web Development, Algorithms, and Machine Learning. I love
                  contributing in Open Source Work/Projects. I'm also fond of
                  reading books, exploring new places, traveling, spending time
                  with family.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-bg-2">
          <div className="container">
            <div className="main-div">
              <div className="sec-head">
                <h1>My Educational Qualification</h1>
              </div>
              <div className="timeline-sec">{academicDetails}</div>
            </div>
          </div>
        </section>
        <section className="sec-bg-1">
          <div className="container">
            <div className="main-div">
              <div className="sec-head">
                <h1>My Work Experience</h1>
              </div>
              <div className="timeline-sec">{workExperienceDetails}</div>
            </div>
          </div>
        </section>
        <section className="sec-bg-2">
          <div className="container">
            <div className="main-div skill-sec">
              <div className="sec-head">
                <h1>My Skills</h1>
              </div>
              <div className="sec-detail">
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="intro-main-div">
                      <div className="image">
                        <img
                          src={require("../../assets/images/main_img.jpeg")}
                          alt=""
                          width="100%"
                          height="100%"
                        />
                      </div>
                      <div className="desc">
                        <div className="title">
                          <h3>Who's this guy?</h3>
                        </div>
                        <div className="intro">
                          <p>
                            I'm a self taught computer programmer, currently
                            dealing with Front-End and Back-End Development of
                            Web Applications. I've a serious passion of learning
                            new things and adding new tech stack to my list
                            everyday.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="skill-main-div">{skillList}</div>
                  </div>
                </div>
                <div className="connect-div">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <div className="connect-me">
                        <Link to="/contact">
                          <button className="btn">Get in touch with me</button>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="resume">
                        <a
                          href={Resume}
                          target="_black"
                          rel="noopener noreferrer"
                        >
                          <button className="btn">My Resume</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="special-div">
          <div className="container">
            <div className="row">
              <div className="grid-div">
                <div className="icon-div">
                  <i className="fas fa-pencil-ruler fa-3x" />
                </div>
                <div className="num-div">
                  <span>20+</span>
                </div>
                <div className="desc-div">
                  <span>MOOC's</span>
                </div>
              </div>
              <div className="grid-div">
                <div className="icon-div">
                  <i className="fas fa-project-diagram fa-3x" />
                </div>
                <div className="num-div">
                  <span>5+</span>
                </div>
                <div className="desc-div">
                  <span>Projects</span>
                </div>
              </div>
              <div className="grid-div">
                <div className="icon-div">
                  <i className="fas fa-award fa-3x" />
                </div>
                <div className="num-div">
                  <span>5+</span>
                </div>
                <div className="desc-div">
                  <span>Awards & Honour</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
