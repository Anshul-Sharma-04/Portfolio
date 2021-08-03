import Card from '../card/card';
import './projects.css';
import React from 'react';
import BackgroundImage from '../../asset/card_book.png';

const Project = function(){
    const project1 = {
        image : BackgroundImage,
        title : "This Is Real AI Book",
        technology : "Gatsby (React)",
        body : `A small personal website that I made to market my book, 
        This Is Real AI. I built the entire website in less than a day.`,
        link : "lo.com"
    }

    return(
        <div className="projects">
            <h1>Projects</h1>
            <div className="card-holder">
            <Card project = {project1}/>
            <Card project = {project1}/>
            <Card project = {project1}/>

            <Card project = {project1}/>
            <Card project = {project1}/>
            </div>

            <p>
            I've also worked on projects such as UC and Ica Handlarna. In case you're curious,<br></br> jacobbergdahl.com was made with Svelte. This might also be a good place to mention that I'm a certified scrum master too.
            </p>

        </div>
    );
}

export default Project;