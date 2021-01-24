import React from 'react';
import projects from '../data/projects.json';
import { Table, Badge } from 'react-bootstrap';


//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const Portfolio = () => {
  const assignBadgeClass = (technologyName) => {
    switch (technologyName) {
      case 'Ruby':
      case 'Rails':
        return 'danger';
      case 'JavaScript':
      case 'Node.js':
      case 'React.js':
        return 'success';
      default:
        return 'secondary';
    }
  }

  const displayTechnologies = (technologies) => {
    return (
      technologies.map((technology) => {
        console.log(`${technology} class: ${assignBadgeClass(technology)}`)
        return <Badge variant={assignBadgeClass(technology)}>{technology}</Badge>
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
                <td><a href={project.github}>{project.name}</a></td>
                <td><a href={project.deployment}>Demo</a></td>
                <td>{displayTechnologies(project.technologies)}</td>
                <td><small>
                  {project.solo ? 'This was a solo project. ' : null}
                  {project.notes ? project.note : null}
                </small></td>
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