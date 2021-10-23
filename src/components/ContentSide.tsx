import { Switch, Route, useParams } from 'react-router-dom';

export default function ContentSide() {

    return (
        <div className="flex-grow">
            <Switch>
                <Route path="/home" children={MainPage} />
                <Route path="/projects/:projectId" children={
                    <ProjectPage />
                } />
            </Switch>
        </div>
    );
};

function MainPage() {
    return <p>Main page</p>;
}

function ProjectPage() {
    const { projectId } = useParams<{ projectId?: string }>();
    console.log(projectId);

    return (
        <p>
            Project page
            {projectId}
        </p>
    );
}