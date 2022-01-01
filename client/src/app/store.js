import { configureStore } from '@reduxjs/toolkit'
import stagesReducer from '../features/stages/stagesSlice'

export const store = configureStore({
    reducer: {
        stages: stagesReducer,
    },
})