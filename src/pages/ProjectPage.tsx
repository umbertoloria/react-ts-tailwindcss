import { useEffect, useState } from "react";
import { useParams } from "react-router";
import store from '../js/store/projects';

export default function ProjectPage() {

    const { projectId } = useParams<{ projectId?: string }>();
    const [ids, setIds] = useState<number[]>();

    useEffect(() => {
        store.subscribe(() => {
            const projectsStore = store.getState();
            const projIds = projectsStore.projects.map((proj) => proj.id);
            setIds(projIds);
        });
    }, []);

    const action = () => {
        store.dispatch({ type: 'addProject' });
    };

    return (
        <div>
            <p>
                Selected project: {projectId}
            </p>
            <p>
                General IDs: {ids?.join()}
            </p>
            <form>
                <button
                    type="button"
                    onClick={action}
                    className="p-3 font-medium bg-red-500 text-white rounded-lg"
                >
                    Aggiungi progetto
                </button>
            </form>
        </div>
    );
}
