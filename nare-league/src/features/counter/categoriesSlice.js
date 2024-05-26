import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async (sportId) => {
        const response = await axios.get('https://api.betnare.com/v1/categories');
        return response.data;
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
    });

    export default categoriesSlice.reducer;
