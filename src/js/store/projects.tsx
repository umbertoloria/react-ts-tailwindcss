import { createStore } from 'redux'

interface Project {
    id: number;
}

interface ProjectStore {
    projects: Project[],
    nextId: number,
}

const initialState: ProjectStore = {
    projects: [],
    nextId: 1,
};

const store = createStore((state: ProjectStore = initialState, action: { type: string }) => {
    switch (action.type) {
        case 'addProject':
            return {
                ...state,
                projects: [
                    ...state.projects,
                    {
                        id: state.nextId,
                    },
                ],
                nextId: state.nextId + 1,
            };
        default:
            return state;
    }
});

export default store;
