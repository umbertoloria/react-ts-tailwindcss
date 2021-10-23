import { useParams } from "react-router";

export default function ProjectPage() {
    const { projectId } = useParams<{ projectId?: string }>();
    console.log(projectId);

    return (
        <p>
            Project page
            {projectId}
        </p>
    );
}
