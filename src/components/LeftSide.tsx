import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Project {
    id: number,
    name: string,
};

export default function LeftSide() {
    const projects: Project[] = [
        { id: 10, name: 'Project 1' },
        { id: 13, name: 'Project 2' },
        { id: 15, name: 'Project 3' },
        { id: 18, name: 'Project 4' },
    ];
    return (
        <div className="w-80">
            {projects.map(ProjectItem)}
        </div>
    );
};

function ProjectItem(project: Project) {
    return (
        <>
            <Link
                to={`/projects/${project.id}`}
                className={classNames(
                    'block',
                    'mb-4',
                    'text-gray-600',
                    {},
                )}
            >
                {project.name}
            </Link>
        </>
    );
}