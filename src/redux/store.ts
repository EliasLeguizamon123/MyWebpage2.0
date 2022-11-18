import { Project } from '@/models/project.model';
import { configureStore } from '@reduxjs/toolkit';
import { projectsSlice } from './state/projects.state';

export interface AppStore {
    projects: Project[];
}

export default configureStore<AppStore>({
    reducer: {
        projects: projectsSlice.reducer,
    },
});
