import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ready: {
        title: "Ready to Apply",
        leads: [
            {
                company: "roku",
                position: "Senior React Frontend Developer",
                url: "https://www.roku.com/jobs/position/2979719/senior-react-frontend-developer?gh_jid=2979719"
            },
            {
                company: "roku",
                position: "Senior React Frontend Developer",
                url: "https://www.roku.com/jobs/position/2979719/senior-react-frontend-developer?gh_jid=2979719"
            },
            {
                company: "roku",
                position: "Senior React Frontend Developer",
                url: "https://www.roku.com/jobs/position/2979719/senior-react-frontend-developer?gh_jid=2979719"
            }
        ]
    },
    waiting: {
        title: "Waiting for Response",
        leads: []
    },
    inProcess: {
        title: "In Process",
        leads: []
    },
    offer: {
        title: "Job Offer",
        leads: []
    }
}

export const stagesSlice = createSlice({
    name: 'stages',
    initialState,
    reducers: {
        bump: (state) => {
            state.waiting.leads[0] = state.ready.leads[0]
        },
    },
})

export const { bump } = stagesSlice.actions

export default stagesSlice.reducer