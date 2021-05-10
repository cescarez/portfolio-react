import React from 'react';
import { Table } from 'react-bootstrap';
import emoji from 'emoji-dictionary';

import './Portfolio.css';

//idea: visualize technologies for each project as a bootstrap badge OR: as a carousel with images and videos?
const ProjectsTable = ({projects, displayTechnologies, selectionFilter}) => {
    const displayProjectsTable = () => {
        return (
            < Table hover size="sm">
                <thead>
                <tr>
                    <th>Project Name/Repo</th>
                    <th>Link to Deployed App</th>
                    <th>Technologies</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                { projects.map((project) => {
                    return (
                        (selectionFilter === "Show All" || project.stackEnd === selectionFilter) && 
                        <tr key={project.name} className={project.starred ? 'portfolio__table--row-starred-project' : 'portfolio__table--row-project'}>
                            <td className='portfolio__td-project-name'>
                                {project.starred ? emoji.getUnicode('star2') : null}
                            <a href={project.github}>{project.name}</a>
                            </td>
                            <td className='portfolio__td-project-demo'>{project.deployment ? <a href={project.deployment}>Deployed App</a> : "No deployed app available"}</td>
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
        <div>
            {displayProjectsTable()}
        </div>
    )
}

export default ProjectsTable;