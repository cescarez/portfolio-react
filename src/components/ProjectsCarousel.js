import React from 'react';
import { Image, Carousel, Container } from 'react-bootstrap';
import { GrNext, GrPrevious } from 'react-icons/gr';

import pothos from '../images/projects/pothos.png';
import stellar from '../images/projects/stellar.png';
import videoStore from '../images/projects/video_store.png';
import mediaRanker from '../images/projects/media_ranker.png';
import ticTacToe from '../images/projects/tic_tac_toe.png';
import exquisiteCorpse from '../images/projects/exquisite_corpse.png';
import rideshare from '../images/projects/rideshare.png';
import taskList from '../images/projects/task_list.png';

import './ProjectsCarousel.css';

//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const ProjectsCarousel = ({projects, displayTechnologies, selectionFilter}) => {
    const projectImages =  {
        "Pothos": pothos,
        "Stellar": stellar,
        "Video Store": videoStore,
        "Media Ranker": mediaRanker,
        "Tic Tac Toe": ticTacToe,
        "Exquisite Corpse": exquisiteCorpse,
        "Rideshare": rideshare,
        "Task List": taskList
    }
    const displayProjectsCarousel = () => {
        return (
            <Carousel pause='hover' interval='10000' className='mx-auto' id='projects-carousel'>
                { projects.map((project) => {
                    return (
                        (selectionFilter === "Show All" || project.stackEnd === selectionFilter) && project.image && 
                        <Carousel.Item key={project.name}>
                            <Image className="d-block w-100 mx-auto"
                                src={projectImages[project.name]}
                                alt={project.name} />
                            <Carousel.Caption>
                                <h3>{project.name}</h3>
                                <a href={project.github}>Gitub Repo</a> | 
                                <a href={project.deployment}>Deployed App</a>
                                <p>
                                    {project.solo ? 'This was a solo project. ' : null}
                                    {project.note ? project.note : null}
                                </p>
                                <p>{displayTechnologies(project.technologies)}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        )
    }

    return (
        <div>
            {displayProjectsCarousel()}
        </div>
    )
}

export default ProjectsCarousel;