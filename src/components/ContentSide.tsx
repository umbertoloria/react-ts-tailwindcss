import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ProjectIndexPage from '../pages/ProjectIndexPage';
import ProjectPage from '../pages/ProjectPage';

export default function ContentSide() {
    return (
        <div className="mt-16 ml-20">
            <Switch>
                <Route
                    path="/home"
                    children={<MainPage />}
                />
                <Route
                    path="/projects/:projectId"
                    children={<ProjectPage />}
                />
                <Route
                    path="/projects"
                    children={<ProjectIndexPage />}
                />
            </Switch>
        </div>
    );
}
