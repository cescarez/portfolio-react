import React, {useState} from 'react';
import projects from '../data/projects.json';
import { Table, Badge, Dropdown, DropdownButton } from 'react-bootstrap';
import emoji from 'emoji-dictionary';

import './Portfolio.css';

//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const Portfolio = () => {
    const [selectionFilter, setSelectionFilter] = useState("All");


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

  const displayProjects = () => {
    return (
      < Table hover size="sm">
        <thead>
          <tr>
            <th>Project Name/Repo</th>
            <th>Demo Link</th>
            <th>Technologies</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          { projects.map((project) => {
            return (
              (selectionFilter === "All" || project.stackEnd === selectionFilter) && 
              <tr key={project.name} className={project.starred ? 'portfolio__table--row-starred-project' : 'portfolio__table--row-project'}>
                <td className='portfolio__td-project-name'>
                    {project.starred ? emoji.getUnicode('star2') : null}
                  <a href={project.github}>{project.name}</a>
                </td>
                <td className='portfolio__td-project-demo'><a href={project.deployment}>Demo</a></td>
                <td className='portfolio__td-project-technologies'>{displayTechnologies(project.technologies)}</td>
                <td className='portfolio__td-project-notes'>
                  <div>
                    {project.solo ? 'This was a solo project. ' : null}
                    {project.note ? project.note : null}
                  </div>
                </td>
              </tr>
            );


          })}
        </tbody>
      </Table>
    );
  }

  const handleSelectFilter = (event) => {
    setSelectionFilter(event);
  }

  const techStackFilter = () => {

    return (
      <DropdownButton title={selectionFilter} onSelect={handleSelectFilter} size="sm">
        <Dropdown.Item eventKey="All">All</Dropdown.Item>
        <Dropdown.Item eventKey="Backend">Backend</Dropdown.Item>
        <Dropdown.Item eventKey="Frontend">Frontend</Dropdown.Item>
        <Dropdown.Item eventKey="Fullstack">Fullstack</Dropdown.Item>
      </DropdownButton>
    )
  }

  return ( 
    <div className='portfolio__div'>
      <h2>Portfolio</h2>
      <p>For the below links to deployed apps, please be patient. The apps and APIs deployed to Heroku enter an "Asleep" state when no traffic has been received for an hour. First requests to pages or APIs will be delayed, but subsequent requests will perform normally.</p>
      {techStackFilter()}
      {displayProjects()}
    </div>
  );
}

export default Portfolio;