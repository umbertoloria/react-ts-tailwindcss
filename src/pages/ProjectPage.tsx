import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import store, { Project } from '../js/store/projects';

export default function ProjectPage() {

    const { projectId } = useParams<{ projectId: string }>();
    const [project, setProject] = useState<Project | undefined>();

    const projectIdInt = useMemo<number>(() => parseInt(projectId, 10), [projectId]);

    useEffect(() => {
        store.subscribe(() => {
            const projectsStore = store.getState();
            const project = projectsStore.projects.find((proj) => proj.id === projectIdInt);
            setProject(project);
        });
    }, [projectIdInt]);

    return (
        <div>
            <p>
                Selected project: {projectId}
            </p>
            <pre>
                {JSON.stringify(project)}
            </pre>
        </div>
    );
}
