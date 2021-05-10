import React, {useState} from 'react';
import projects from '../data/projects.json';
import { Button, Badge, Dropdown, DropdownButton } from 'react-bootstrap';
import emoji from 'emoji-dictionary';

import ProjectsCarousel from './ProjectsCarousel.js';
import ProjectsTable from './ProjectsTable.js';
import './Portfolio.css';

//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const Portfolio = () => {
    const [selectionFilter, setSelectionFilter] = useState("Show All");
    const [showProjectsTable, setShowProjectsTable] = useState(false);


    const assignBadgeClass = (technologyName) => {
        switch (technologyName) {
        case 'Ruby':
        case 'Rails':
            return 'ruby';
        case 'JavaScript':
        case 'Node.js':
        case 'React.js':
            return 'javascript';
        case 'Python':
        case 'Flask':
            return 'python';
        case 'Java':
        case 'Spring':
            return 'java';
        default:
            return 'secondary';
        }
    }

    const displayTechnologies = (technologies) => {
        return (
            technologies.map((technology, i) => {
                return <Badge key={technology + i} variant={assignBadgeClass(technology)}>{technology}</Badge>
            })
        );
    }

    const handleSelectFilter = (event) => {
        setSelectionFilter(event);
    }

    const techStackFilter = () => {
        return (
            <DropdownButton title={selectionFilter} onSelect={handleSelectFilter} size="sm">
                <Dropdown.Item eventKey="Show All">Show All</Dropdown.Item>
                <Dropdown.Item eventKey="Fullstack">Fullstack</Dropdown.Item>
                <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
                <Dropdown.Item eventKey="Frontend">Frontend</Dropdown.Item>
            </DropdownButton>
        )
    }

    return ( 
        <div className='portfolio__div' >
            <h2>Portfolio</h2>
            <div className='row d-flex justify-content-center'>
                <div className="col-lg-3">
                    <Button variant='secondary' size='sm' onClick={()=>{setShowProjectsTable(!showProjectsTable)}}>Show Projects Table</Button>
                </div>
                <div class="col-lg-2">
                    {techStackFilter()}
                </div>
            </div>
            <p>For the below links to deployed apps, please be patient. The apps and APIs deployed to Heroku enter an "Asleep" state when no traffic has been received for an hour. First requests to pages or APIs will be delayed, but subsequent requests will perform normally.</p>
            {showProjectsTable && 
                <ProjectsTable projects={projects} displayTechnologies={displayTechnologies} selectionFilter={selectionFilter}/>
            }
            <ProjectsCarousel projects={projects} displayTechnologies={displayTechnologies} selectionFilter={selectionFilter}/>
        </div>
    );
}

export default Portfolio;