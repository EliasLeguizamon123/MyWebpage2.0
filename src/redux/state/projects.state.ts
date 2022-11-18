import { createSlice } from '@reduxjs/toolkit';

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        chargeProjecs: (state, action) => {
            state.push(action.payload);
        },
        resetProjects: () => [],
    },
});

export const { chargeProjecs, resetProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
