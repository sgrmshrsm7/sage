import React from "react";

import "./HomePage.scss";
import Quote from "../Quote/Quote";
import projectData from "./projects.json";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const HomePage = () => {
    return (
        <div className="home_page">
            <div className="header">
                Sagar Mishra<div className="username">( sgrmshrsm7 )</div>
            </div>
            <Quote
                quoteLine="Dreams are not what you see in your sleep, dreams are the things
                which do not let you sleep."
                quoteBy="Cristiano Ronaldo"
            />
            <div className="aboutme">
                <div className="heading">About</div>
                <p>
                    I'm Sagar Mishra, currently a Computer Science undergraduate
                    at VNIT Nagpur. I have skills in <em>Python</em>, <em>C</em>
                    , <em>C++</em>, <em>Java</em>, <em>HTML5</em>/<em>CSS3</em>/
                    <em>SCSS</em>, <em>JavaScript</em>, <em>ReactJS</em>,{" "}
                    <em>NodeJS</em>, <em>MongoDB</em>, <em>MySQL</em>. I like
                    being fit. I like playing football, cricket, running or any
                    sport. Personalities I admire the most are Cristiano
                    Ronaldo, Srinivasa Ramanujan, Alan Turing. I'm a music lover
                    and I also like singing, but you will not want me to sing
                    for you or will you 😉 ? I'm not fond of watching TV series
                    but I liked some of them, namely Sherlock, Rick and Morty,
                    Dragon Ball Series.
                </p>
            </div>
            <div className="projects">
                <div className="heading">Projects</div>
                <div className="cards">
                    {projectData.projects.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                heading={project.name}
                                description={project.description}
                            />
                        );
                    })}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
