import React from "react";

import "./HomePage.scss";
import Quote from "../Quote/Quote";
import projectData from "./projects.json";
import Card from "../Card/Card";

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
            {/* <div className="footer">
                <div className="links">
                    <span className="linkicon">
                        <a
                            href="https://github.com/sgrmshrsm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                            </svg>
                        </a>
                    </span>
                    <span className="linkicon">
                        <a
                            href="mailto:sgrmshrsm7@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                            </svg>
                        </a>
                    </span>
                    <span className="linkicon">
                        <a
                            href="https://t.me/sgrmshrsm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
                            </svg>
                        </a>
                    </span>
                    <span className="linkicon">
                        <a
                            href="https://www.facebook.com/sgrmshrsm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
                            </svg>
                        </a>
                    </span>
                    <span className="linkicon">
                        <a
                            href="https://www.instagram.com/sgrmshrsm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                            </svg>
                        </a>
                    </span>
                    <span className="linkicon">
                        <a
                            href="https://twitter.com/sgrmshrsm7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                className="MuiSvgIcon-root link"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
                <a href="https://github.com/sgrmshrsm7" className="createdbylink">
                    <div className="createdby">Created by @sgrmshrsm7</div>
                </a>
            </div> */}
        </div>
    );
};

export default HomePage;
