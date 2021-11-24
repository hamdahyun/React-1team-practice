import { createAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { AppState } from '../index';
import { initialState } from './state'; 

const hydrate = createAction<AppState>(HYDRATE)

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        update: (state, action) => {
            
        }
    }
})