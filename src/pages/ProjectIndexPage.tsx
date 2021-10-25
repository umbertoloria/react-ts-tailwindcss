import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import store, { Project } from '../js/store/projects';

export default function ProjectIndexPage() {

    const [projects, setProjects] = useState<Project[]>(store.getState().projects);

    useEffect(() => {
        store.subscribe(() => {
            console.log('refreshed ProjectIndexPage listener');
            setProjects(store.getState().projects);
        });
    }, []);

    const action = () => {
        store.dispatch({ type: 'addProject' });
    };

    return (
        <div>
            <div className="p-5 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {projects.map((proj) => (
                    <ProjectCard key={proj.id} project={proj} />
                ))}
            </div>
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

function ProjectCard({ project }: { project: Project }) {
    return (
        <figure className="bg-gray-100 rounded-xl p-8">
            <img className="w-32 h-32 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512" />
            <div className="pt-6 text-center space-y-4">
                <blockquote>
                    <p className="text-lg font-semibold">
                        {project.id}
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams.It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-cyan-600">
                        Sarah Dayan
                    </div>
                    <div className="text-gray-500">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure>
    );
}