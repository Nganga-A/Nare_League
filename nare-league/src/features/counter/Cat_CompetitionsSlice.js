import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCat_Competitions = createAsyncThunk(
    'competitions/fetchCat_Competitions',
    async (category_id) => {
        const response = await axios.get('https://api.betnare.com/v1/categories');
        return response.data;
    }
);

const competitionsSlice = createSlice({
    name: 'cat_competitions',
    initialState: {
        competitions: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCat_Competitions.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCat_Competitions.fulfilled, (state, action) => {
                state.loading = false;
                state.competitions = action.payload;
            })
            .addCase(fetchCat_Competitions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default competitionsSlice.reducer;
