import React from 'react';
import projects from '../data/projects.json';
import { Table, Badge } from 'react-bootstrap';
import emoji from 'emoji-dictionary';

import './Portfolio.css';

//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const Portfolio = () => {
  const assignBadgeClass = (technologyName) => {
    switch (technologyName) {
      case 'Ruby':
      case 'Rails':
        return 'ruby';
      case 'JavaScript':
      case 'Node.js':
      case 'React.js':
        return 'javascript';
      default:
        return 'secondary';
    }
  }

  const displayTechnologies = (technologies) => {
    return (
      technologies.map((technology, i) => {
        return <Badge key={technology + i}variant={assignBadgeClass(technology)}>{technology}</Badge>
      })
    );
  }

  const displayProjects = () => {
    return (
      < Table striped hover size="sm">
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

  return ( 
    <div className='portfolio__div'>
      <h2>Portfolio</h2>
      {displayProjects()}
    </div>
  );
}

export default Portfolio;