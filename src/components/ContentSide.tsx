import { Switch, Route, useParams } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ProjectPage from '../pages/ProjectPage';

export default function ContentSide() {
    return (
        <div className="flex-grow">
            <Switch>
                <Route
                    path="/home"
                    children={<MainPage />}
                />
                <Route
                    path="/projects/:projectId"
                    children={<ProjectPage />}
                />
            </Switch>
        </div>
    );
}
