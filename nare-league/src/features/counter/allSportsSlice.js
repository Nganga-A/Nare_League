import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllSports = () => {
    return async (dispatch) => {
        dispatch(fetchAllSportsStart());
        try {
        const response = await axios.get('https://api.betnare.com/v1/categories');
        dispatch(fetchAllSportsSuccess(response.data));
        } catch (error) {
        dispatch(fetchAllSportsFailure(error.message));
        }
    };
    };

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const allSportsSlice = createSlice({
    name: 'allSports',
    initialState,
    reducers: {
        fetchAllSportsStart(state) {
        state.loading = true;
        state.error = null;
        },
        fetchAllSportsSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        },
        fetchAllSportsFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const { fetchAllSportsStart, fetchAllSportsSuccess, fetchAllSportsFailure } = allSportsSlice.actions;

export default allSportsSlice.reducer;
